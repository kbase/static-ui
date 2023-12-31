import { Cell } from '../types/NarrativeDoc';
import { baseApi } from './index';
import { jsonRpcService } from './utils/serviceHelpers';

const ws = jsonRpcService({
  url: '/services/ws',
});

type TimeParams = (
  | { after?: never; after_epoch?: number }
  | { after_epoch?: never; after?: string }
) &
  (
    | { before?: never; before_epoch?: number }
    | { before_epoch?: never; before?: string }
  );

interface wsParams {
  getwsNarrative: { upa: string };
  getwsObjectByName: { upa: string };
  listObjects: {
    ids?: number[];
    workspaces?: string[];
    type?: string;
    savedby?: string[];
    meta?: Record<string, string>;
    startafter?: string;
    minObjectID?: number;
    maxObjectID?: number;
    showDeleted?: boolean;
    showOnlyDeleted?: boolean;
    showHidden?: boolean;
    showAllVersions?: boolean;
    includeMetadata?: boolean;
    excludeGlobal?: boolean;
    limit?: number;
  } & TimeParams;
  listWorkspaceInfo: {
    perm?: string;
    owners?: string[];
    meta?: Record<string, string>;
    excludeGlobal?: boolean;
    showDeleted?: boolean;
    showOnlyDeleted?: boolean;
  } & TimeParams;
}

interface wsResults {
  getwsNarrative: {
    data: {
      data: {
        cells: Cell[];
      };
    }[];
  }[];
  getwsObjectByName: unknown;
  listWorkspaceInfo: [
    id: number,
    workspace: string,
    owner: string,
    moddate: string,
    maxobjid: number,
    user_permission: string,
    globalread: string,
    lockstat: string,
    metadata: Record<string, string>
  ][][];
  listObjects: [
    obj_id: number,
    name: string,
    type: string,
    save_date: string,
    version: number,
    saved_by: string,
    ws_id: number,
    ws_name: string,
    chsum: string,
    size: number,
    meta: Record<string, string>
  ][][];
}

const wsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getwsNarrative: builder.query<
      wsResults['getwsNarrative'],
      wsParams['getwsNarrative']
    >({
      query: ({ upa }) =>
        ws({
          method: 'Workspace.get_objects2',
          params: [{ objects: [{ ref: upa }] }],
        }),
    }),
    getwsObjectByName: builder.query<
      wsResults['getwsObjectByName'],
      wsParams['getwsObjectByName']
    >({
      query: ({ upa }) =>
        ws({
          method: 'Workspace.get_objects2',
          params: [{ objects: [{ ref: upa }] }],
        }),
    }),
    listObjects: builder.query<
      wsResults['listObjects'],
      wsParams['listObjects']
    >({
      query: (params) =>
        ws({
          method: 'Workspace.list_objects',
          params: [params],
        }),
    }),
    listWorkspaceInfo: builder.query<
      wsResults['listWorkspaceInfo'],
      wsParams['listWorkspaceInfo']
    >({
      query: (params) =>
        ws({
          method: 'Workspace.list_workspace_info',
          params: [params],
        }),
    }),
  }),
});

export const {
  getwsNarrative,
  getwsObjectByName,
  listObjects,
  listWorkspaceInfo,
} = wsApi.endpoints;
