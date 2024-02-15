import { useTheme} from "@emotion/react";
import { useEffect , useState} from "react";
import {
    Drawer,
    ListItem,
    ListItemText,
    List,
    ListItemButton,
    ListItemIcon,
    Box,
    Typography,
    IconButton,
    Divider

} from "@mui/material";
import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    SettingsOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import Haileab from "../assets/Haileab.png"
const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];
const Sidebar = ({isSideBarOpen,setisSideBarOpen, drawerWidth,isNonMobileDevice, user})=> {
    const theme = useTheme();
    const [isactive, setIsactive] = useState('')
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(()=>{
        setIsactive(pathname.substring(1));
    }, [])
   
     return (
        <Box component="nav">
    {
        isSideBarOpen && (
        <Drawer
        open= {isSideBarOpen}
        variant="persistent"
        anchor="left"
        onClose={()=> setisSideBarOpen(false)}
        sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[200],
                width: drawerWidth,
                boxSizing: 'border-box',
                borderWidth: isNonMobileDevice ? 0 : "2px",
            }
        }}
        >
          <Box
          width="100%"
          >
            <FlexBetween
            m="1.5rem 2rem 2rem 3rem"
            color={theme.palette.secondary.main}
            >
               <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                </Typography> 
                {
                    !isNonMobileDevice && (
                        <IconButton>
                           <  ChevronLeftOutlined onClick={()=> setisSideBarOpen(false)}/>
                        </IconButton>
                    ) 
                   
                }              
            </FlexBetween>
        
         <List>
           {navItems.map(({text, icon})=> {

            const lcText = text.toLowerCase();

            return (
                <ListItem key={text}>
                     <ListItemButton
                     onClick={
                        ()=> {navigate(`/${lcText}`)}}    
                     sx={{
                        backgroundColor: isactive === lcText ? theme.palette.secondary[300] : "transparent",
                     }}
                     >
                    <ListItemIcon
                    sx={{
                        color: isactive === lcText ? theme.palette.primary[600] : theme.palette.secondary[200]
                    }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                    sx={{
                        color: isactive === lcText ? theme.palette.primary[600] : theme.palette.secondary[200]
                    }} 
                    primary={text}/>
                    {
                        isactive === lcText && (
                        <ChevronRightOutlined sx={{
                            color: theme.palette.primary[600]
                        }}/>)
                    }      
                </ListItemButton>
                </ListItem>
               
            )
           })}
         </List>
         </Box>
         <Box
         position="absolute"
         bottom='-30rem'
         width="100%"
         >
          <Divider/>
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
            <SettingsOutlined/>
          </FlexBetween>
         </Box>
        </Drawer>
        )}
        </Box>

    )
}
export default Sidebar;