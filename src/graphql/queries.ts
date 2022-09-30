/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWin = /* GraphQL */ `
  query GetWin($id: ID!) {
    getWin(id: $id) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWins = /* GraphQL */ `
  query SyncWins(
    $filter: ModelWinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        win_text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
