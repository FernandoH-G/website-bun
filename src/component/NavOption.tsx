
// External Imports
import { NavLink } from "react-router-dom"
import Typography from "@mui/material/Typography"

type NavOptionProps = {
  href: string
  label: string
}
const NavOption = (props: NavOptionProps) => {
  const {
    href,
    label
  } = props

  const normalStyle = {
    color: "white",
    marginRight: "8px"
  }
  const activeStyle = {
    color: "#00818A",
    marginRight: "8px",
    textShadow: "1px 1px 2px #00818A",
  }

  return (
    <NavLink
      to={href}
      style={({ isActive }) => isActive ? activeStyle : normalStyle}
    >
      <Typography
        variant="button"
        fontSize="1.25rem"
      >
        {label}
      </Typography>
    </NavLink>
  )
}

export default NavOption