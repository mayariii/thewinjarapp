import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type WinMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class Win {
  readonly id: string;
  readonly copy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Win, WinMetaData>);
  static copyOf(source: Win, mutator: (draft: MutableModel<Win, WinMetaData>) => MutableModel<Win, WinMetaData> | void): Win;
}