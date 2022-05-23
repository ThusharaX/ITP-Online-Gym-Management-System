import React from "react";
import { createStyles, Title, Container, Accordion, ThemeIcon, Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { useNavigate, Link } from "react-router-dom";

// import QuestionList from "./QuestionList";
// import AddQuestion from "./AddQuestion";

// // QuestionProvider
// import { QuestionProvider } from "../../contexts/QuestionContext";

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef("control");

	return {
		wrapper: {
			paddingTop: theme.spacing.xl * 2,
			minHeight: 820,
			backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
				theme.colors[theme.primaryColor][4]
			} 100%)`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "top left",
			position: "relative",
		},

		title: {
			color: theme.white,
			fontSize: 52,
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			marginBottom: theme.spacing.xl * 1.5,
		},

		item: {
			marginTop: theme.spacing.xl,
			backgroundColor: theme.white,
			borderBottom: 0,
			borderRadius: theme.radius.md,
			boxShadow: theme.shadows.lg,
		},

		control: {
			fontSize: theme.fontSizes.lg,
			padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
			color: theme.black,

			"&:hover": {
				backgroundColor: "transparent",
			},
		},

		content: {
			paddingLeft: theme.spacing.xl,
			lineHeight: 1.6,
			color: theme.black,
		},

		icon: {
			ref: icon,
			marginLeft: theme.spacing.md,
		},

		gradient: {
			backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
				theme.colors[theme.primaryColor][5]
			} 100%)`,
		},

		itemOpened: {
			[`& .${icon}`]: {
				// transform: "rotate(45deg)",
			},
		},

		button: {
			display: "block",
			marginTop: theme.spacing.md,

			"@media (max-width: 755px)": {
				display: "block",
				width: "100%",
			},
		},
	};
});

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function FAQQ() {
	const { classes, cx } = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container size="sm">
				<Title align="center" className={classes.title}>
					Frequently Asked Questions
				</Title>

				{/* Ask new question */}
				{/* <div className={classes.button}>
					<Link style={{ textDecoration: "none", color: "#fff" }} to="/question/add">
						<Button color="gray" size="lg">
							<Plus className={classes.icon} />
							Ask a new question
						</Button>
					</Link>
				</div> */}

				<Accordion
					iconPosition="right"
					initialItem={0}
					classNames={{
						item: classes.item,
						itemOpened: classes.itemOpened,
						control: classes.control,
						icon: classes.icon,
						contentInner: classes.content,
					}}
					icon={
						<ThemeIcon radius="xl" className={classes.gradient} size={32}>
							<Plus size={18} />
						</ThemeIcon>
					}
				>
					<Accordion.Item label="Do I Need to Work Out Every Day?">
						No, you do not need to work out every day. In fact, in most cases, I would recommend at least 1-2 days of
						total rest a week. However, just because you have a rest or recovery day scheduled into your calendar,
						doesn’t necessarily mean you aren’t active at all on these days. Light, regular movement such as walking
						your dog around the block, or taking time for stretching or foam rolling are great recovery techniques to
						help increase blood flow and reduce tension in tight muscles. Participating in regular rest days and
						practicing a well-balanced recovery routine can help you reduce your risk for injury and promote the
						longevity of your fitness routine.
						<Button className={cx(classes.gradient, classes.button)}>
							<Link style={{ textDecoration: "none", color: "#fff" }} to="/workout">
								Check Our New Workouts
							</Link>
						</Button>
					</Accordion.Item>
					<Accordion.Item label="How Can I Increase Lean Muscle Mass?">
						Adding heavy strength training into your routine is just one way to increase lean muscle mass. But there are
						many ways to increase strong lean muscle tone in your body. Any form of resistance that your muscles must
						fight against that is greater than what they normally experience, can help stimulate the muscle growth
						process. Completing exercises with your body weight or resistance bands are also effective ways of training
						to build strength. Start with what you feel most comfortable with and continue building from there. As your
						exercises or the weight, you’re using start to feel too easy, increase your weight or choose more
						challenging exercises to continue challenging your muscles and see results.
					</Accordion.Item>
					<Accordion.Item label="How Often Should I Rest?">
						Your rest will depend on your workout schedule. Like I said previously, I recommend 1 or 2 full days of rest
						in your schedule. This isn’t only great for giving your body time to recover from your workouts, it also can
						be a great time for self-care to promote mental health.
					</Accordion.Item>
					<Accordion.Item label="Is working out in the morning better for you?">
						You should exercise at a time that suits you and your body. There’s no evidence to suggest that an early
						morning workout is better for you, but some people are just more efficient at this time. You’ll get results
						regardless of the time of day, as long as it works for you.
					</Accordion.Item>
					<Accordion.Item label="When should I stretch and how often?">
						Start with some dynamic stretching (active muscular stretching such as walking lunges or jogging with high
						knees) before a workout. Then, do static stretches such as a standing thigh stretch or side lunge for
						post-workout recovery, focusing on the muscles you’ve worked. This will decrease your risk of injury,
						improve blood flow and circulation, increase your range of motion and improve muscle function. You can never
						stretch too much!
						<Button className={cx(classes.gradient, classes.button)}>Subscribe to newsletter</Button>
					</Accordion.Item>
					<Accordion.Item label="How Important Is Nutrition?">
						How important is nutrition if someone works out consistently? You cannot out train a bad diet.
					</Accordion.Item>
				</Accordion>
				<br />
				<br />

				{/* <QuestionProvider> */}
				{/* Question list */}
				{/* <QuestionList /> */}

				{/* Add new Question */}
				{/* <AddQuestion /> */}
				{/* </QuestionProvider> */}
			</Container>
		</div>
	);
}
