/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWin = /* GraphQL */ `
  mutation CreateWin(
    $input: CreateWinInput!
    $condition: ModelWinConditionInput
  ) {
    createWin(input: $input, condition: $condition) {
      id
      win_text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateWin = /* GraphQL */ `
  mutation UpdateWin(
    $input: UpdateWinInput!
    $condition: ModelWinConditionInput
  ) {
    updateWin(input: $input, condition: $condition) {
      id
      win_text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteWin = /* GraphQL */ `
  mutation DeleteWin(
    $input: DeleteWinInput!
    $condition: ModelWinConditionInput
  ) {
    deleteWin(input: $input, condition: $condition) {
      id
      win_text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
