import { useState } from "react"
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
import {Box, Typography, IconButton, AppBar,  InputBase, Toolbar, Menu, MenuItem} from "@mui/material"
import FlexBetween from "./FlexBetween"
import Haileab from '../assets/Haileab.png'

export const Navbar = ({ isSideBarOpen, setisSideBarOpen, user})=>{
    const dispatch = useDispatch();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = ()=>{
        setAnchorEl(null);
    }
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
        > {/* Left Side Of The Navigation Bar*/}
            <FlexBetween
           >
                <IconButton onClick={()=> setisSideBarOpen((prev)=> !prev)}>
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
            {/*Right Side of The Navigation Bar*/}
            <FlexBetween>
                <IconButton
                onClick={()=> dispatch(setMode())}
                >
                    {
                        theme.palette.mode === 'dark' ? <DarkModeOutlined sx={{fontSize: "25px"}}/> : <LightModeOutlined  sx={{fontSize: "25px"}}/>
                    }
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize: "25px"}}/>
                </IconButton>
            </FlexBetween>
            <FlexBetween>
            <Box
            component="Img"
            alt="ProfilePic"
            src={Haileab}
            height="40px"
            width="40px"
            borderRadius="50%"
            sx={{objectFit: "fit"}}
            />
              <Box>
              <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{color: theme.palette.secondary[100]}}
              >
                {user.name}

              </Typography>
              <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{color: theme.palette.secondary[100]}}
              >
                {user.occupation}

              </Typography>
             
            </Box>
            <IconButton
            sx={{color: theme.palette.secondary[300], fontSize: "25px"}} 
            onClick={handleClick}>
              <ArrowDropDownOutlined/>
              </IconButton>
              <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
              >
                <MenuItem onClick={handleClose}>
                Log Out
                </MenuItem>
              </Menu>
            </FlexBetween>
        </Toolbar>
       </AppBar>
    )
}