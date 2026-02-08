import { parseDate } from "@/util/helpers"

// External Imports
import { OpenInNew } from '@mui/icons-material';
import Typography from "@mui/material/Typography"

type CommitsProps = {
  commits: {
    node: {
      committedDate: string
      message: string
      url: string
    }
  }[]
}
const RepoCommits = (props: CommitsProps) => {
  const { commits } = props

  return commits.map((edge, idx) => {
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

export default RepoCommits