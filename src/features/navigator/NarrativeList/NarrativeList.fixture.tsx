import { NarrativeDoc } from '../../../common/types/NarrativeDoc';

export type NarrativeTestDoc = Pick<
  NarrativeDoc,
  | 'access_group'
  | 'creator'
  | 'narrative_title'
  | 'obj_id'
  | 'timestamp'
  | 'version'
>;

export const factoryNarrativeDoc = (
  partial: NarrativeTestDoc
): NarrativeDoc => {
  return {
    cells: [],
    copied: null,
    creation_date: partial.timestamp.toString(),
    data_objects: [],
    is_narratorial: false,
    is_public: false,
    is_temporary: false,
    modified_at: partial.timestamp,
    obj_name: 'obj_name',
    obj_type_module: 'KBaseType',
    obj_type_version: '1',
    owner: partial.creator,
    shared_users: [],
    tags: [],
    total_cells: 0,
    ...partial,
  };
};

export const testItems: NarrativeDoc[] = [
  {
    access_group: 10000,
    creator: 'user0',
    narrative_title: "user0's Narrative",
    obj_id: 1,
    timestamp: 100000000,
    version: 1,
  },
  {
    access_group: 10001,
    creator: 'user1',
    narrative_title: "user1's Narrative",
    obj_id: 1,
    timestamp: 1000000000,
    version: 2,
  },
  {
    access_group: 10002,
    creator: 'user2',
    narrative_title:
      'A navigator narrative with a, perhaps, excessively long, like really really long, title.',
    obj_id: 2,
    timestamp: 10000000000,
    version: 3,
  },
  {
    access_group: 10003,
    creator: 'user3',
    narrative_title: "user3's Narrative",
    obj_id: 1,
    timestamp: 100000000000,
    version: 3,
  },
  {
    access_group: 10004,
    creator: 'user4',
    narrative_title: "user4's Narrative",
    obj_id: 1,
    timestamp: 1000000000000,
    version: 4,
  },
  {
    access_group: 10005,
    creator: 'user5',
    narrative_title: "user5's Narrative",
    obj_id: 1,
    timestamp: 1414210000000,
    version: 5,
  },
  {
    access_group: 10006,
    creator: 'user6',
    narrative_title: "user6's Narrative",
    obj_id: 1,
    timestamp: 1475890000000,
    version: 2,
  },
  {
    access_group: 10007,
    creator: 'user7',
    narrative_title: "user7's Narrative",
    obj_id: 2,
    timestamp: 1475900000000,
    version: 7,
  },
  {
    access_group: 10008,
    creator: 'user8',
    narrative_title: "user8's Narrative",
    obj_id: 1,
    timestamp: 1475910000000,
    version: 8,
  },
  {
    access_group: 10009,
    creator: 'user9',
    narrative_title: "user9's Narrative",
    obj_id: 1,
    timestamp: 1475920000000,
    version: 9,
  },
  {
    access_group: 10010,
    creator: 'user10',
    narrative_title: "user10's Narrative",
    obj_id: 1,
    timestamp: 1475930000000,
    version: 10,
  },
  {
    access_group: 10011,
    creator: 'user11',
    narrative_title: "user11's Narrative",
    obj_id: 1,
    timestamp: 1475940000000,
    version: 11,
  },
  {
    access_group: 10012,
    creator: 'user12',
    narrative_title: "user12's Narrative",
    obj_id: 1,
    timestamp: 1475950000000,
    version: 12,
  },
  {
    access_group: 10013,
    creator: 'user13',
    narrative_title: "user13's Narrative",
    obj_id: 1,
    timestamp: 1475960000000,
    version: 13,
  },
  {
    access_group: 10014,
    creator: 'user14',
    narrative_title: "user14's Narrative",
    obj_id: 1,
    timestamp: 1570790000000,
    version: 14,
  },
  {
    access_group: 10015,
    creator: 'user15',
    narrative_title: "user15's Narrative",
    obj_id: 1,
    timestamp: 1587380000000,
    version: 15,
  },
  {
    access_group: 10016,
    creator: 'user16',
    narrative_title: "user16's Narrative",
    obj_id: 1,
    timestamp: 1618000000000,
    version: 16,
  },
  {
    access_group: 12348,
    creator: 'dlyon',
    narrative_title: 'Dawg Lion',
    obj_id: 1,
    timestamp: 1632640000000,
    version: 5,
  },
  {
    access_group: 12345,
    creator: 'charlie',
    narrative_title: "Charlie's Storybook Narrative",
    obj_id: 1,
    timestamp: 1666666666667,
    version: 8,
  },
  {
    access_group: 12346,
    creator: 'DJKhaled',
    narrative_title: 'Another One',
    obj_id: 1,
    timestamp: 1670000000000,
    version: 1,
  },
  {
    access_group: 12347,
    creator: 'dakota_ci',
    narrative_title: 'A cool narrative',
    obj_id: 2,
    timestamp: 2147483647501,
    version: 4,
  },
].map((partial) => factoryNarrativeDoc(partial));
