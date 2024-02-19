import { useState } from "react";
import Header from "../../component/Header";
import  OverviewChart from "../../component/Stats";
import {FormControl, MenuItem, InputLabel, Box, Select} from "@mui/material"

const Sales = ()=>{

    const [view, setView] = useState("units")
    console.log(view)
    return (
        <Box m="1.5rem 2.5rem">
            <Header
            title="Sales"
            subtitile="Overview of Overall Sales"
            />
            <Box height="75vh">
                <FormControl sx={{mt: "1rem"}}>
                    <InputLabel>View</InputLabel>
                    <Select 
                    value={view} 
                    label="view" 
                    onChange={(e)=> setView(e.target.value)}>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="units">Units</MenuItem>
                    </Select>
                </FormControl>
                <OverviewChart
                    view={view}
                />
            </Box>
           
        </Box>
    )    
}

export default Sales;