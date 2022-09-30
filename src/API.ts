/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWinInput = {
  id?: string | null,
  win_text?: string | null,
  owner?: string | null,
};

export type ModelWinConditionInput = {
  win_text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWinConditionInput | null > | null,
  or?: Array< ModelWinConditionInput | null > | null,
  not?: ModelWinConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Win = {
  __typename: "Win",
  id: string,
  win_text?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWinInput = {
  id: string,
  win_text?: string | null,
  owner?: string | null,
};

export type DeleteWinInput = {
  id: string,
};

export type ModelWinFilterInput = {
  id?: ModelIDInput | null,
  win_text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWinFilterInput | null > | null,
  or?: Array< ModelWinFilterInput | null > | null,
  not?: ModelWinFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWinConnection = {
  __typename: "ModelWinConnection",
  items:  Array<Win | null >,
  nextToken?: string | null,
};

export type CreateWinMutationVariables = {
  input: CreateWinInput,
  condition?: ModelWinConditionInput | null,
};

export type CreateWinMutation = {
  createWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWinMutationVariables = {
  input: UpdateWinInput,
  condition?: ModelWinConditionInput | null,
};

export type UpdateWinMutation = {
  updateWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWinMutationVariables = {
  input: DeleteWinInput,
  condition?: ModelWinConditionInput | null,
};

export type DeleteWinMutation = {
  deleteWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWinQueryVariables = {
  id: string,
};

export type GetWinQuery = {
  getWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWinsQueryVariables = {
  filter?: ModelWinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWinsQuery = {
  listWins?:  {
    __typename: "ModelWinConnection",
    items:  Array< {
      __typename: "Win",
      id: string,
      win_text?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWinSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateWinSubscription = {
  onCreateWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWinSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateWinSubscription = {
  onUpdateWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWinSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteWinSubscription = {
  onDeleteWin?:  {
    __typename: "Win",
    id: string,
    win_text?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
