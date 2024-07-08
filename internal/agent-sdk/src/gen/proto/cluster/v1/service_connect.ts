// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file proto/cluster/v1/service.proto (package cluster.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import {
  JoinClusterRequest,
  JoinClusterResponse,
  LeaveClusterRequest,
  LeaveClusterResponse,
} from "./service_pb";

/**
 * @generated from service cluster.v1.ClusterService
 */
export const ClusterService = {
  typeName: "cluster.v1.ClusterService",
  methods: {
    /**
     * @generated from rpc cluster.v1.ClusterService.JoinCluster
     */
    joinCluster: {
      name: "JoinCluster",
      I: JoinClusterRequest,
      O: JoinClusterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc cluster.v1.ClusterService.LeaveCluster
     */
    leaveCluster: {
      name: "LeaveCluster",
      I: LeaveClusterRequest,
      O: LeaveClusterResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
