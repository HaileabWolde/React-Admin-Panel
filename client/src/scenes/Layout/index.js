import React, {useState} from "react";
import { UseSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Navbar } from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
const Layout = ()=>{
    const isNonMobileDevice = useMediaQuery("(min-width : 600px)")
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    return (
        <Box width="100%" height="100%" display={isNonMobileDevice ? 'flex' : 'block'}>
                
                <Sidebar
                isSideBarOpen={isSideBarOpen}
                setisSideBarOpen = {setisSideBarOpen}
                drawerWidth="250px"
                isNonMobileDevice={isNonMobileDevice}
                />
                
                <Box>
                    {/*
                    so box is like A div element which in it's default will put it in a block
                    */}
               
                <Navbar
                isSideBarOpen = {isSideBarOpen}
                setisSideBarOpen = {setisSideBarOpen}
                />
                <Outlet/>
                </Box>
               
            
        </Box>
    )
}
export default Layout;