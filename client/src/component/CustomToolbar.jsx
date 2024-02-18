import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
}from '@mui/x-data-grid';
import {Search} from "@mui/icons-material"
import FlexBetween from './FlexBetween';
import { IconButton, InputAdornment, TextField } from '@mui/material';
const CustomToolbar = ({searchInput, setSearchInput, setSearch})=> {
   return (
    <FlexBetween width="100%">
    <FlexBetween>
         <GridToolbarContainer>
         <GridToolbarColumnsButton />
         <GridToolbarFilterButton />
         <GridToolbarDensitySelector />
         <GridToolbarExport />
         </GridToolbarContainer>
     </FlexBetween>
     <TextField
     label="Search... "
     sx={{ mb: "0.5rem"}}
     value={searchInput}
     onChange={(e)=> setSearchInput(e.target.value)}
     InputProps={{
        endAdornment: (
            <InputAdornment position='end'>
                <IconButton
                onClick={()=>{
                    setSearch(searchInput)
                    setSearchInput("")
                }}
                >
                    <Search/>
                </IconButton>
            </InputAdornment>
        )
     }}
     />
 </FlexBetween>
   ) 
}
export default CustomToolbar