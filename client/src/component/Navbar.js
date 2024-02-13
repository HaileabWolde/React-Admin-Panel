import { setMode } from "../redux/Mode/ModeSlice"
import {useDispatch } from "react-redux"
import { useTheme } from "@emotion/react"
import {
LightModeOutlined,
DarkModeOutlined,
Menu as MenuIcon,
Search,
SettingsOutlined,
ArrowDropDownOutlined
} from "@mui/icons-material"
import FlexBetween from "./FlexBetween"
import Haileab from '../assets/Haileab.png'
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material"
export const Navbar = ()=>{
    const dispatch = useDispatch();
    const theme = useTheme()
    return (
       <AppBar
       sx={{
        position: "static",
        background:"none",
        boxShadow: "none",
        justifyContent: "space-between"
        }}
       >
        <Toolbar
        sx={{
         justifyContent: "space-between",
         
        }}
        >
            <FlexBetween
           >
                <IconButton onClick={()=> console.log('open Sidebar nigga')}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
                >
                    <InputBase
                    placeholder="Search"
                    />
                    <IconButton
                    >
                        <Search/>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
       </AppBar>
    )
}