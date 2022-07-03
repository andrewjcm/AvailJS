import './App.css';
import {useState, useMemo, createContext, useContext} from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Display from './Components/Display/Display';
import Form from './Components/Form/Form';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';
import { CssBaseline } from '@mui/material';
const ColorModeContext = createContext({ toggleColorMode: () => {} });

function AvailJS() {

  const [formData, setFormData] = useState('');
  const [showForm, setShowForm] = useState(true);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const displayFormData = (formData) => {
    setFormData(formData);
    setShowForm(false);
  }

  const clearData = () => {
    setFormData("");
    setShowForm(true);
  }

  return (
    <main className='App'>
      <ThemeToggle sx={{mb: 5}} onClick={colorMode.toggleColorMode} theme={theme}/>
      {
      showForm
          ? <div data-testid="app-form">
              <Form passFormData={displayFormData}/>
          </div>
          : <div data-testid="app-display">
              <Display data={formData} clear={clearData}/>
          </div>
      }
    </main>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AvailJS />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
