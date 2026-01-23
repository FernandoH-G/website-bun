import { useState } from 'react'

// Internal
import { type VideoInfoItem } from '../types/types';

// External Imports
import { Typography } from '@mui/material';
import { DateTime } from 'luxon';
import YouTube from 'react-youtube';

type VideoCardProps = {
  item: VideoInfoItem
}
const VideoCard = (props: VideoCardProps) => {
  const {
    item
  } = props

  const [clicked, setClicked] = useState(false)

  const dateTime = DateTime.fromISO(item.publishedAtISO)
  const dateStr = dateTime.toLocaleString(DateTime.DATE_MED)

  console.log("video container")

  return (
    <div
      className='video-card'
    >
      {
        clicked
          ?
          <YouTube
            videoId={item.videoId}
            opts={{
              width: "100%",
              height: "250px"
            }}
          />
          :
          <img
            src={item.thumbnailUrl}
            alt='Video Thumbnail'
            width="100%"
            height="250px"
            onClick={() => {
              setClicked(prevValue => !prevValue)
            }}
          />
      }

      <div
        className='video-card-info'
      >
        <Typography
          fontWeight="bold"
          fontSize="1.5rem"
        >
          {item.title}
        </Typography>
        <Typography>
          {dateStr}
        </Typography>
        <Typography>
          {item.hashtags}
        </Typography>
      </div>
    </div>
  )
}

export default VideoCard