import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type WinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Win {
  readonly id: string;
  readonly win_text?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Win, WinMetaData>);
  static copyOf(source: Win, mutator: (draft: MutableModel<Win, WinMetaData>) => MutableModel<Win, WinMetaData> | void): Win;
}