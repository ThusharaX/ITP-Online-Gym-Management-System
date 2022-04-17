import "./App.css";
import AppRoutes from "./routes/app-routes";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

// UserProvider
import { UserProvider } from "./contexts/UserContext";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<MantineProvider>
					<ModalsProvider>
						<UserProvider>
							<AppRoutes />
						</UserProvider>
					</ModalsProvider>
				</MantineProvider>
			</div>
		</div>
	);
}

export default App;
