
import { type PinnedRepoEdge } from "@site-types/site-types";
import { GET_PINNED_REPOS } from "@util/query"
import RepoCard from "@components/RepoCard";

// External Imports
import { CircularProgress, Grid } from "@mui/material";
import { DateTime } from "luxon";
import { useQuery } from '@apollo/client'
import Typography from '@mui/material/Typography';

function Home() {

	const { data, loading, error } = useQuery(GET_PINNED_REPOS);

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
						Pinned Repos
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

	function getDateStr(iso: string) {
		const dT = DateTime.fromISO(iso)
		return dT.toLocaleString(DateTime.DATETIME_MED)
	}

	// Look to Jumbo component in js version of Website for spread props example.
	return data
		?
		<main
			className="center-container"
		>
			<section
				className="center-width"
			>
				<Grid
					container
					spacing={2}
				>
					{
						data.user.pinnedItems.edges.map((edge: PinnedRepoEdge) => {
							return (
								<Grid
									key={edge.node.name}
									item
									xs={12}
									sm={6}
								>
									<RepoCard
										name={edge.node.name}
										owner={edge.node.owner.login}
										updatedStr={getDateStr(edge.node.pushedAt)}
										description={edge.node.description}
										url={edge.node.url}
									/>
								</Grid>
							)
						})
					}
				</Grid>
			</section>
		</main>
		:
		<Typography>
			No Data.
		</Typography>
}

export default Home;