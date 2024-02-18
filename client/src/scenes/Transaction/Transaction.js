import { useState } from "react";
import { useGetTransactionQuery } from "../../redux/api";
import {Box, Typography} from "@mui/material"
import Header from "../../component/Header";
import { DataGrid} from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import CustomToolbar from "../../component/CustomToolbar";
const Transaction = ()=>{
  const theme = useTheme()
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  }); 
  const { page, pageSize } = paginationModel;
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("")
    const {data, isLoading} = useGetTransactionQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
   console.log(page, pageSize, sort)

    const columns = [
        {
            field: "_id",
            headerName: 'ID',
            flex: 1
        },
        {
            field: "userId",
            headerName: 'userID',
            flex: 0.5
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            renderCell: (params)=> {
                return params.value.length;
            }

        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 0.4,
            renderCell: (params)=> `$${Number(params.value).toFixed(2)}`
        },
    ]
    return (
        <Box m="1.5rem 2.5rem">
            <Header
            title="Transactions" subtitile="List of Transactions"
            />
            {
                data && !isLoading ? (
                    <Box
                    mt="40px"
                    sx={{
                     "& .MuiDataGrid-root": {
                         border: "none"
                     },
                     "& .MuiDataGrid-cell":{
                         borderBottom: "none"
                     },
                     "& .MuiDataGrid-columnHeadersInner":{
                         backgroundColor: theme.palette.background.alt,
                         color: theme.palette.secondary[100],
                     },
                     "& .MuiDataGrid-virtualScroller":{
                         backgroundColor: theme.palette.primary.light
                     },
                     "& .MuiDataGrid-footerContainer":{
                         backgroundColor: theme.palette.background.alt,
                         color: theme.palette.secondary[100],
                         borderTop: "none"
                     },
                     height: "75vh",
                    }}
                    >
                        <DataGrid
                           rows={(data && data.transactions) || []}
                           getRowId={(row)=> row._id}
                           columns={columns}
                           rowCount={(data && data.total) || 0}
                           pagination
                           paginationModel={paginationModel}
                           paginationMode="server"
                           sortingMode="server"
                           onPaginationModelChange={setPaginationModel}
                           onSortModelChange={(newSortModel)=> setSort(...newSortModel)}
                           slots={{
                            toolbar: CustomToolbar
                           }}
                           slotProps={{
                            toolbar: { searchInput, setSearchInput, setSearch}
                           }}
                        />
                    </Box>
                ): 
                (
                <Box>
                    <Typography variant="h2">Loading ...</Typography>
                </Box>
                )}
        </Box>
    )
}
export default Transaction;