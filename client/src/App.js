import {ThemeProvider} from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme} from "@mui/material";
import { useMemo } from "react";
import {useSelector } from "react-redux";
import { themeSettings } from "./theme";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Dashboard from "./scenes/Dashboard/Dashboard";
import Layout from "./scenes/Layout";
import Product from "./scenes/Product/Product";
import Customer from "./scenes/Customer/Customer";
import Transaction from "./scenes/Transaction/Transaction";
import Geography from "./scenes/Geography/Georgaphy";
import Sales from "./scenes/Sales/Sales";
const App= ()=> {
  const  {mode} = useSelector((state)=> state.global)
  const theme = useMemo(()=> createTheme(themeSettings(mode), [mode]))
  return (
    <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
              < CssBaseline/>
              <Routes>
                <Route element={<Layout/>} >
                    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/products" element={<Product/>}/>
                    <Route path="/customers" element={<Customer/>}/>
                    <Route path="/transactions" element={<Transaction/>}/>
                    <Route path="/geography" element={<Geography/>}/>
                    <Route path="/sales" element={<Sales/>}/>
                </Route>         
              </Routes>
        </ThemeProvider>
        </BrowserRouter> 
       
    </div>
    
  );
}

export default App;
