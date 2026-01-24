// It's easier to down size a png if it's big to begin with.
// Doesn't lose quality, at least to my eyes.

// Me
import NavOption from "@component/NavOption";
import MyPig from "@images/my-pig.png"

// External Imports
import { Link, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

const Navigation = () => {
	const location = useLocation().pathname

	function getPageMessage(location: string) {
		switch (location) {
			case "/":
				return {
					title: "Projects",
					subtitle: "Projects fetched from Github using their GQL API."
				}
			case "/about":
				return {
					title: "Fernando H-G",
					subtitle: "Software Developer."
				}
			case "/videos":
				return {
					title: "Videos",
					subtitle: "Recent uploads."
				}
			default:
				return {
					title: "N/A",
					subtitle: "N/A"
				}
		}
	}

	const pageMessage = getPageMessage(location)

	return (
		<section
			style={{
				display: "flex",
				marginBottom: "2rem",
				padding: "1rem 1rem",
				backgroundColor: "#343a40",
				boxShadow: "0px 2px 4px"
			}}
		>
			<Grid
				container
				alignItems={"center"}
			>

				<Grid
					item
					xs={12}
					sm={4}
				>
					<div
						style={{
							display: "flex"
						}}
					>
						<Link
							to="/"
						>
							<img
								src={MyPig}
								alt="FH-G logo"
								className="img-logo"
							/>
						</Link>
						<div
							className="nav-items"
						>
							<NavOption
								href="/"
								label="Home"
							/>
							<NavOption
								href="/about"
								label="About"
							/>
							{/* <NavOption
								href="/videos"
								label="Videos"
							/> */}
						</div>
					</div>
				</Grid>

				{/* Title and Subtitle placed inside right of Navigation. */}
				<Grid
					item
					xs={12}
					sm={8}
				>
					<div
						className="nav-title"
					>
						<Typography
							variant="h2"
						>
							{pageMessage.title}
						</Typography>
						<Typography
							style={{
								color: "white"
							}}
							fontSize="1.5rem"
						>
							{pageMessage.subtitle}
						</Typography>
					</div>
				</Grid>

			</Grid>
		</section>
	)
}

export default Navigation