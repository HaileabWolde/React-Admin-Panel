import {ThemeProvider} from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme} from "@mui/material";
import { useMemo } from "react";
import {useSelector } from "react-redux";
import { themeSettings } from "./theme";
const App= ()=> {
  const  {mode} = useSelector((state)=> state.global)
  const theme = useMemo(()=> createTheme(themeSettings(mode), [mode]))
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
      < CssBaseline/>
    </ThemeProvider>
    </div>
    
  );
}

export default App;
