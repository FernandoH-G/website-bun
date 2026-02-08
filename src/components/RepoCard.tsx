
import { GET_REPO_COMMITS } from "@util/query"
import { parseDate } from "@/util/helpers"

// External Imports
import { Divider, Typography } from '@mui/material'
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
        <Typography>
          Loading Commits...
        </Typography>
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
      <Typography
        fontSize="2.5rem"
      >
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
      </Typography>
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
          // borderColor: "#8db8bb"
        }}
      />
      {
        commits.map((edge, idx) => {
          return (
            <div
              key={idx}
            >
              <Typography>
                <a
                  href={edge.node.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {parseDate(edge.node.committedDate)}
                </a>
              </Typography>
              <Typography
                gutterBottom
              >
                {edge.node.message}
              </Typography>
            </div>
          )
        })
      }
    </div>
  )
}

export default RepoCard