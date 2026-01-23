
// External Imports
import { Typography } from '@mui/material'

type RepoCardProps = {
  name: string
  updatedStr: string
  description: string | null
  url: string
}
const RepoCard = (props: RepoCardProps) => {
  const {
    name,
    updatedStr,
    description,
    url
  } = props

  return (
    <div
      className="repo-card"
    >
      <Typography
        fontSize="2rem"
      >
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
      </Typography>
      <Typography
        fontSize="1.5rem"
        fontStyle="italic"
      >
        Updated: {updatedStr}
      </Typography>
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
  )
}

export default RepoCard