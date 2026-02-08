
import { GET_REPO_COMMITS } from "@util/query"
import { parseDate } from "@/util/helpers"

// External Imports
import { CircularProgress, Divider, Typography } from '@mui/material'
import { OpenInNew } from '@mui/icons-material';
import { useQuery } from '@apollo/client'

type RepoCardProps = {
  name: string
  owner: string
  updatedStr: string
  description: string | null
  url: string
}
const RepoCard = (props: RepoCardProps) => {
  const {
    name,
    owner,
    updatedStr,
    description,
    url
  } = props

  const { loading, error, data } = useQuery(GET_REPO_COMMITS, {
    variables: { name: name, owner: owner },
  })

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
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <div
          style={{
            display: "inline-block"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline"
            }}
          >
            <Typography
              fontSize="2.5rem"
              marginRight="0.25rem"
              className="repo-name-style"
            >
              {name}
            </Typography>
            <OpenInNew
              // htmlColor="white"
              className="repo-name-style"
            />
          </div>
        </div>
      </a>
      <div
        style={{
          minHeight: "7rem"
        }}
      >
        {
          description === null
            ?
            <Typography
              fontSize="1.5rem"
            >
              No Description.
            </Typography>
            :
            <Typography
              fontSize="1.5rem"
            >
              {description}
            </Typography>
        }
      </div>
      <Divider
        variant="middle"
        style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          borderColor: "white"
        }}
      />
      {
        commits.map((edge, idx) => {
          return (
            <div
              key={idx}
            >
              <a
                href={edge.node.url}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  style={{
                    display: "inline-block"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      marginRight="0.25rem"
                      className="commit-date-style"
                    >
                      {parseDate(edge.node.committedDate)}
                    </Typography>
                    <OpenInNew
                      className="commit-date-style"
                      fontSize="small"
                    />
                  </div>
                </div>
              </a>
              <Typography
                gutterBottom
              >
                {edge.node.message}
              </Typography>
            </div>
          )
        })
      }
    </div >
  )
}

export default RepoCard