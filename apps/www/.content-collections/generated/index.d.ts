import type { GetTypeByName } from "@content-collections/core";
import type configuration from "../../content-collections.ts";

export type Post = GetTypeByName<typeof configuration, "Post">;
export declare const allPosts: Array<Post>;
