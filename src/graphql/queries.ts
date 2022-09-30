/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWin = /* GraphQL */ `
  query GetWin($id: ID!) {
    getWin(id: $id) {
      id
      win_text
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listWins = /* GraphQL */ `
  query ListWins(
    $filter: ModelWinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        win_text
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
