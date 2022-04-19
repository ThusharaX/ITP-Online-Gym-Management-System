import "./App.css";
import AppRoutes from "./routes/app-routes";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

// UserProvider
import { UserProvider } from "./contexts/UserContext";

function App() {
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<div className="App">
			<div className="App-header">
				<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
					<MantineProvider theme={{ colorScheme }}>
						<ModalsProvider>
							<UserProvider>
								<AppRoutes />
							</UserProvider>
						</ModalsProvider>
					</MantineProvider>
				</ColorSchemeProvider>
			</div>
		</div>
	);
}

export default App;
