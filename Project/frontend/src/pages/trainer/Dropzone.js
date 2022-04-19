import React, { useRef } from "react";
import { Text, Group, Button, createStyles, useMantineTheme } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { CloudUpload } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		marginBottom: 50,
	},

	dropzone: {
		borderWidth: 1,
		paddingBottom: 30,
	},

	icon: {
		color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
	},

	control: {
		position: "absolute",
		width: 200,
		left: "calc(50% - 100px)",
		bottom: -20,
	},
}));

function getActiveColor(status, theme) {
	// prettier-ignore
	return status.accepted ? theme.colors[theme.primaryColor][6] : status.rejected? theme.colors.red[6]: theme.colorScheme === "dark"? theme.colors.dark[0]: theme.black;
}

export function DropzoneButton() {
	const theme = useMantineTheme();
	const { classes } = useStyles();
	const openRef = useRef(false);
	// const openRef = useRef<() => void>();

	return (
		<div className={classes.wrapper}>
			<Dropzone
				openRef={openRef}
				onDrop={() => {}}
				className={classes.dropzone}
				radius="md"
				accept={IMAGE_MIME_TYPE}
				maxSize={30 * 1024 ** 2}
			>
				{(status) => (
					<div style={{ pointerEvents: "none" }}>
						<Group position="center">
							<CloudUpload size={40} color={getActiveColor(status, theme)} />
						</Group>
						<Text align="center" weight={700} size="lg" mt="xs" sx={{ color: getActiveColor(status, theme) }}>
							{status.accepted ? "Drop image here" : status.rejected ? "Image file less than 30mb" : "Upload Image"}
						</Text>
						<Text align="center" size="sm" mt="xs" color="dimmed">
							Drag&apos;n&apos;drop image here to upload. We can accept only <i>image</i> files that are less than 30mb
							in size.
						</Text>
					</div>
				)}
			</Dropzone>

			<Button color={"gray"} className={classes.control} size="md" radius="xl" onClick={() => openRef.current()}>
				Select files
			</Button>
		</div>
	);
}
