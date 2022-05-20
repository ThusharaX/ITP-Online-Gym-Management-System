import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import Cards from "../../components/cards/Cards";
import LightDarkButton from "../../components/lightDarkButton/LightDarkButton";

function TrainerPackages() {
	// const [colorScheme, setColorScheme] =
	// 	useLocalStorage <
	// 	ColorScheme >
	// 	{
	// 		key: "mantine-color-scheme",
	// 		defaultValue: "light",
	// 		getInitialValueInEffect: true,
	// 	};

	// const toggleColorScheme = (value?: ColorScheme) =>
	// 	setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	// useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<div className="App">
			{/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{ colorScheme }}>
					<Paper padding="md" radius={0} style={{ minHeight: "100vh" }}> */}

			<Cards />
			{/* <LightDarkButton /> */}
			{/* </Paper>
				</MantineProvider>
			</ColorSchemeProvider> */}
		</div>
	);
}

export default TrainerPackages;
