import React from "react";
import { Accordion } from "@mantine/core";

function FAQ() {
	return (
		<div
			align="center"
			// set background color gradient
			style={{
				background: "linear-gradient(to right,#36d1dc , #5b86e5)",
				opacity: "0.9",
			}}
		>
			<h1 align="center">Frequently Ask Questions </h1>

			<Accordion iconSize={80}>
				<Accordion.Item label="“Do I Need to Work Out Every Day?”">
					No, you do not need to work out every day. In fact, in most cases, I would recommend at least 1-2 days of
					total rest a week. However, just because you have a rest or recovery day scheduled into your calendar, doesn’t
					necessarily mean you aren’t active at all on these days. Light, regular movement such as walking your dog
					around the block, or taking time for stretching or foam rolling are great recovery techniques to help increase
					blood flow and reduce tension in tight muscles. Participating in regular rest days and practicing a
					well-balanced recovery routine can help you reduce your risk for injury and promote the longevity of your
					fitness routine.
				</Accordion.Item>

				<Accordion.Item label="“How Can I Increase Lean Muscle Mass?”">
					Adding heavy strength training into your routine is just one way to increase lean muscle mass. But there are
					many ways to increase strong lean muscle tone in your body. Any form of resistance that your muscles must
					fight against that is greater than what they normally experience, can help stimulate the muscle growth
					process. Completing exercises with your body weight or resistance bands are also effective ways of training to
					build strength. Start with what you feel most comfortable with and continue building from there. As your
					exercises or the weight, you’re using start to feel too easy, increase your weight or choose more challenging
					exercises to continue challenging your muscles and see results.
				</Accordion.Item>

				<Accordion.Item label="“How Often Should I Rest?”">
					Your rest will depend on your workout schedule. Like I said previously, I recommend 1 or 2 full days of rest
					in your schedule. This isn’t only great for giving your body time to recover from your workouts, it also can
					be a great time for self-care to promote mental health.
				</Accordion.Item>

				<Accordion.Item label="“Is working out in the morning better for you?”">
					You should exercise at a time that suits you and your body. There’s no evidence to suggest that an early
					morning workout is better for you, but some people are just more efficient at this time. You’ll get results
					regardless of the time of day, as long as it works for you.
				</Accordion.Item>

				<Accordion.Item label="“When should I stretch and how often?”">
					Start with some dynamic stretching (active muscular stretching such as walking lunges or jogging with high
					knees) before a workout. Then, do static stretches such as a standing thigh stretch or side lunge for
					post-workout recovery, focusing on the muscles you’ve worked. This will decrease your risk of injury, improve
					blood flow and circulation, increase your range of motion and improve muscle function. You can never stretch
					too much!
				</Accordion.Item>

				<Accordion.Item label="“How Important Is Nutrition”">
					How important is nutrition if someone works out consistently? You cannot out train a bad diet.
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
export default FAQ;
