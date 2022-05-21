import React, { useContext } from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { PhoneCall, At } from "tabler-icons-react";

import UserContext from "../../contexts/UserContext";

const useStyles = createStyles((theme) => ({
	icon: {
		color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
	},

	name: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));

const Profile = () => {
	const { user, isLoading } = useContext(UserContext);

	const { classes } = useStyles();

	return (
		<div className>
			<h1 style={{ textAlign: "center" }}>Profile</h1>

			<Group noWrap>
				<Avatar src={user.avatar} size={94} radius="md" />
				<div>
					<Text size="xs" sx={{ textTransform: "uppercase" }} weight={700} color="dimmed">
						{user.permissionLevel}
					</Text>

					<Text size="lg" weight={500} className={classes.name}>
						{user.firstName + " " + user.lastName}
					</Text>

					<Group noWrap spacing={10} mt={3}>
						<At size={16} className={classes.icon} />
						<Text size="xs" color="dimmed">
							{user.email}
						</Text>
					</Group>

					<Group noWrap spacing={10} mt={5}>
						<PhoneCall size={16} className={classes.icon} />
						<Text size="xs" color="dimmed">
							{user.phoneNumber}
						</Text>
					</Group>
				</div>
			</Group>
		</div>
	);
};

export default Profile;
