import { useState } from "react";

import { GET_REPO_COMMITS } from "@util/query"
import RepoCommits from "@/components/RepoCommits"
import RepoHeader from "@/components/RepoHeader"

// External Imports
import {
  CircularProgress,
  Divider,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import type { RepoInfo } from "@/types/site-types";
import { useQuery } from '@apollo/client'

type RepoCardProps = {
  repoInfo: RepoInfo
}
const RepoCard = (props: RepoCardProps) => {
  const { repoInfo } = props

  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  const { loading, error, data } = useQuery(GET_REPO_COMMITS, {
    variables: { name: repoInfo.name, owner: repoInfo.owner },
  })

  const [flipped, setFlipped] = useState(false)

  if (error) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typography>
          Error when loading Github API.
        </Typography>
      </main>
    )
  }

  if (loading) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            gutterBottom
          >
            Commits
          </Typography>
          <CircularProgress
            style={{
              color: "white"
            }}
          />
        </div>
      </main>
    )
  }

  const commits = data.repository.defaultBranchRef.target.history.edges as {
    node: {
      committedDate: string,
      message: string,
      url: string
    }
  }[]

  return (
    <div
      className="repo-card"
    >
      {
        desktopView === true
          ?
          <>
            <RepoHeader
              repoInfo={repoInfo}
            />
            <Divider
              variant="middle"
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                borderColor: "white"
              }}
            />
            <RepoCommits
              commits={commits}
            />
          </>
          :
          flipped === true
            ?
            <div>
              <RepoCommits
                commits={commits}
              />
              <button
                onClick={() => {
                  setFlipped(prevValue => !prevValue)
                }}
                style={{
                  marginTop: "0.5rem",
                  alignSelf: "center"
                }}
              >
                Repo
              </button>
            </div>
            :
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <RepoHeader
                repoInfo={repoInfo}
              />
              <button
                onClick={() => {
                  setFlipped(prevValue => !prevValue)
                }}
                style={{
                  marginTop: "0.5rem",
                  alignSelf: "center"
                }}
              >
                View Commits
              </button>
            </div>
      }
    </div >
  )
}

export default RepoCard