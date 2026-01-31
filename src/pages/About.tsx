
import ImageCarousel from "@/components/ImageCarousel";

// External Imports
import Typography from '@mui/material/Typography';


function About() {

	return (
		<main
			className="center-container"
		>
			<section
				className="center-width"
			>
				<Typography
					variant="h3"
					gutterBottom
				>
					Bio
				</Typography>
				<div
					className="me-section"
				>
					<ImageCarousel />
					<div
						style={{
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Typography
							paragraph
						>
							My name is Fernando Herrera-Gomez. I was born in Fresno, CA. My folks
							moved a lot to follow their seasonal work. Eventually we settled in
							Bakersfield CA. Going into
							<a href="https://www.csub.edu/"> California State University Bakersfield </a>
							, I had it as my goal to eventually become a lawyer. In order to
							fulfill this goal, I studied and eventually graduated as the
							outstanding graduate in Philosophy for 2014.
						</Typography>

						<Typography
							paragraph
						>
							I met good classmates and even better professors. One classmate
							turned me on to a
							<a href="https://law.ucla.edu/life-ucla-law/diversity-inclusion/outreach"> UCLA Law Fellows </a>
							program where I applied to and eventually was a part of. Soon after
							the program, a professor helped me land an internship in a law firm
							in Bakersfield. Attending this internship was a pivotal part of my
							life.
						</Typography>

						<Typography
							paragraph
						>
							After some time with the internship, I started to have doubts as to
							my motivation to become a lawyer. After much introspection, I
							decided to no longer pursue a career in Law. Cut to 2016, I saw
							myself attending CSUB once more, but this time, as a computer science
							student! I knew that after my first year, programming was what I
							wanted to devote my life to.
						</Typography>

					</div>
				</div>

				<Typography
					variant="h3"
					gutterBottom
				>
					The Big Move
				</Typography>

				<Typography
					paragraph
				>
					In June of 2024, I made the move to Chicago, Illinois. The main
					motivations for moving was the price of rent, public transportation
					and infrastructure, and the ability to live in one of the biggest
					cities in the US. Months later, the move to the big city has turned
					out to be the right move!
				</Typography>

				<Typography
					variant="h3"
					gutterBottom
				>
					Interests
				</Typography>

				<Typography paragraph>
					My last semester of University consisted of me going to classes, then
					immediatly going
					<strong className="flair-text"> bouldering </strong>
					in the universitie's recreation center. It was physically and
					mentally challenging and exhausting, but I loved every minute.
				</Typography>

				<Typography paragraph>
					I have commuted to school and home via bus and
					<strong className="flair-text"> cycling </strong>
					for 4 years. Be it
					rain or shine, I rode my bike as part of the commute to my university.
					It was a very fun and healthy time.
				</Typography>

				<Typography
					paragraph
				>
					Even after the big move, my love for biking and bouldering has not
					waned. In fact, it has grown even more still! If I'm not taking
					the bus or L, I'm on my bike pedalling to wherever I need to go for
					the day (most of the time that being my local bouldering gym).
				</Typography>
			</section>
		</main>
	);
}

export default About;
