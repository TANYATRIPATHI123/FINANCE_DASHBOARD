import {Box} from "@mui/material"
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import NavBar from "./scenes/navbar"
import Dashboard from "./scenes/dashboard";
import Predictions from "./scenes/predictions/index.tsx";


function App() {
      const theme = useMemo(() => createTheme(themeSettings), [])
      return <div className = "app">
        <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding = "1rem 2rem 4rem 2rem">
            <NavBar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/predictions" element={<Predictions/>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
        </BrowserRouter>
      </div>
}

export default App;
