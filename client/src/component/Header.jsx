import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const Header = ({title, subtitile})=>{
    const theme = useTheme()

    return (
        <Box>
            <Typography 
            variant="h2"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{ mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography 
            variant="h6"
            color={theme.palette.secondary[300]}
            fontWeight="bold"
            sx={{ mb: "5px"}}
            >
                {subtitile}
            </Typography>
        </Box>
    )
}
export default Header