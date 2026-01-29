import type { RepoInfo } from "@/types/site-types"

// External Imports
import { OpenInNew } from '@mui/icons-material';
import Typography from "@mui/material/Typography"

type RepoHeaderProps = {
  repoInfo: RepoInfo
}
const RepoHeader = (props: RepoHeaderProps) => {
  const { repoInfo } = props

  return (
    <>
      <a
        href={repoInfo.url}
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
              {repoInfo.name}
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
          repoInfo.description === null
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
              {repoInfo.description}
            </Typography>
        }
      </div>
    </>
  )

}

export default RepoHeader