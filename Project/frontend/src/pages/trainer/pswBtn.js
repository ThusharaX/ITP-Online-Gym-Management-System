import { useState } from "react";
import { CheckIcon, Cross1Icon } from "@modulz/radix-icons";
import { PasswordInput, Progress, Text, Popover, Box } from "@mantine/core";

function PasswordRequirement({ meets, label }) {
	return (
		<Text color={meets ? "teal" : "red"} sx={{ display: "flex", alignItems: "center" }} mt={7} size="sm">
			{meets ? <CheckIcon /> : <Cross1Icon />} <Box ml={10}>{label}</Box>
		</Text>
	);
}

const requirements = [
	// { re: /[0-9]/, label: "Includes number" },
	// { re: /[a-z]/, label: "Includes lowercase letter" },
	// { re: /[A-Z]/, label: "Includes uppercase letter" },
	// { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
	let multiplier = password.length > 5 ? 0 : 1;

	requirements.forEach((requirement) => {
		if (!requirement.re.test(password)) {
			multiplier += 1;
		}
	});

	return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordStrength() {
	const [popoverOpened, setPopoverOpened] = useState(false);
	const [value, setValue] = useState("");
	const checks = requirements.map((requirement, index) => (
		<PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
	));

	const strength = getStrength(value);
	const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

	return (
		<Popover
			style={{ width: "45%" }}
			opened={popoverOpened}
			position="bottom"
			placement="start"
			withArrow
			styles={{ popover: { width: "100%" } }}
			trapFocus={false}
			transition="pop-top-left"
			onFocusCapture={() => setPopoverOpened(true)}
			onBlurCapture={() => setPopoverOpened(false)}
			target={
				<PasswordInput
					required
					label="Password"
					placeholder="Your password"
					// description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
					value={value}
					onChange={(event) => setValue(event.currentTarget.value)}
				/>
			}
		>
			<Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
			<PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
			{checks}
		</Popover>
	);
}
