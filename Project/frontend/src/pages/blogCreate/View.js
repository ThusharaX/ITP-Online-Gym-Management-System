import React, { useContext } from "react";

import BlogContext from "../../contexts/BlogContext";
import { createStyles, Card, Image, ActionIcon, Group, Text, Avatar, Badge } from "@mantine/core";
import { Heart, Bookmark, Share } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	footer: {
		padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
		marginTop: theme.spacing.md,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},
}));

const View = () => {
	const { classes, theme } = useStyles();
	const { blog } = useContext(BlogContext);
	return (
		<div>
			<Card withBorder p="lg" radius="md" className={classes.card} style={{ maxWidth: 500 }}>
				<Card.Section mb="sm">
					<Image
						src="https://images.pexels.com/photos/3917335/pexels-photo-3917335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt={blog.title}
						height={250}
					/>
				</Card.Section>

				<Badge>Personal Trainer</Badge>

				<Text weight={700} className={classes.title} mt="xs">
					{blog.title}
				</Text>

				<Group mt="lg">
					<Avatar
						src="https://images.pexels.com/photos/5799855/pexels-photo-5799855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						radius="sm"
					/>
					<div>
						<Text weight={500}>{blog.trname}</Text>
						<Text size="xs" color="dimmed">
							{blog.description}
						</Text>
					</div>
				</Group>

				<Card.Section className={classes.footer}>
					<Group position="apart">
						<Text size="xs" color="dimmed">
							{classes.footer}
						</Text>
						<Group spacing={0}>
							<ActionIcon>
								<Heart size={18} color={theme.colors.red[6]} />
							</ActionIcon>
							<ActionIcon>
								<Bookmark size={18} color={theme.colors.yellow[6]} />
							</ActionIcon>
							<ActionIcon>
								<Share size={16} color={theme.colors.blue[6]} />
							</ActionIcon>
						</Group>
					</Group>
				</Card.Section>
			</Card>
		</div>
	);
};

export default View;
