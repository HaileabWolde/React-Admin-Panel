import React, {useState} from "react";
import { UseSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Navbar } from "../../component/Navbar";

const Layout = ()=>{
    return (
        <Box width="100%" height="100%">
            <Box>
                <Navbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}
export default Layout;