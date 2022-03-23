import './App.css';
import AppRoutes from './routes/app-routes';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

function App() {

  return (
    <div className="App">
      <div className='App-header'>
        <MantineProvider>
          <ModalsProvider>
            <AppRoutes />
          </ModalsProvider>
        </MantineProvider>
      </div>
    </div>
  );
}

export default App;