import React from 'react'

// External Imports
import { Typography } from '@mui/material'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

type ToggleInputProps = {
  label: string
  options: string[]
  option: string
  handleOptionChange: (
    event: React.MouseEvent<HTMLElement>,
    option: string | null
  ) => void
}
const ToggleGroupInput = (props: ToggleInputProps) => {
  const {
    label,
    options,
    option,
    handleOptionChange
  } = props

  // const [sortType, setSortType] = useState(option);

  // function handleSortType(
  //   event: React.MouseEvent<HTMLElement>,
  //   newOption: string,
  // ) {
  //   setSortType(newOption);
  // }

  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "2rem"
      }}
    >
      <Typography
        marginRight="0.5rem"
      >
        {label}:
      </Typography>
      <ToggleButtonGroup
        value={option}
        color="flair"
        exclusive
        onChange={handleOptionChange}
        aria-label="Set type"
      >
        {
          options.map((option, idx) => {
            return (
              <ToggleButton
                key={idx}
                value={option}
                aria-label={option}
              >
                <Typography>
                  {option}
                </Typography>
              </ToggleButton>
            )
          })
        }
      </ToggleButtonGroup>
    </article>
  )
}

export default ToggleGroupInput