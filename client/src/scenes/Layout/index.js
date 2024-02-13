import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { useGetUserQuery } from "../../redux/api";
const Layout = ()=>{
    const isNonMobileDevice = useMediaQuery("(min-width : 600px)")
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    const {userId} = useSelector((state)=> state.global)
    const {data} = useGetUserQuery(userId)

    console.log(data)
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