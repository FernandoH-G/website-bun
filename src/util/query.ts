import { gql } from '@apollo/client'

export const GET_PINNED_REPOS = gql`
query GetPinnedRepos {
  user(login: "FernandoH-G") {
    pinnedItems(first: 4) {
      edges {
        node {
          ... on Gist {
            name
          }
          ... on Repository {
            owner {
              login
            }
            name
            description
            url
            openGraphImageUrl
            pushedAt
          }
        }
      }
    }
  }
  rateLimit {
    cost
    remaining
    resetAt
  }
}
`;

export const GET_REPO_COMMITS = gql`
query GetRepoCommits($name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 3) {
            edges {
              node {
                committedDate
                message
                url
              }
            }
          }
        }
      }
    }
  }
}
`;