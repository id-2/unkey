import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const Post = defineCollection({
  name: "Post",
  directory: "content/blog",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string().optional(),
    categories: z
      .array(z.enum(["company", "engineering", "education", "customers"]))
      .default(["company"]),
    tags: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const slugger = new GithubSlugger();
    const regXHeader = /\n(?<flag>#+)\s+(?<content>.+)/g;
    const headings = Array.from(document.content.matchAll(regXHeader)).map(({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag?.length,
        text: content,
        slug: content ? slugger.slug(content) : undefined,
      };
    });
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeSlug,
          rehypeCodeTitles,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"],
                "data-mdx-heading": "",
              },
            },
          ],
        ],
      ],
    });
    return {
      ...document,
      mdx,
      headings,
    };
  },
});

export default defineConfig({
  collections: [Post],
});
