import { useGetCustomerQuery } from "../../redux/api"
import Header from "../../component/Header"
import { Box } from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import { useTheme } from "@emotion/react"
const Customer = ()=>{
    const {data, isLoading} = useGetCustomerQuery()
    const theme = useTheme()
    const columns = [
        {
            field: "_id",
            headerName: 'ID',
            flex: 1
        },
        {
            field: "name",
            headerName: 'Name',
            flex: 0.5
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "phoneNumber",
            headerName: "PhoneNumber",
            flex: 0.5,
            renderCell: (params)=> {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }

        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.4
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1
        },
        {
            filed: "role",
            headerName: "Role",
            flex: 0.5
        }
    ]
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Customers" subtitile="List of Customers"/>
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
                    width: '100%'
                   }}
                   >
                    <DataGrid
                    loading={isLoading || !data}
                    rows={data || []}
                    getRowId={(row)=> row._id}
                    columns={columns}
                    />
                    </Box>
                ): (
                    <>
                    Loading ...</>
                )
            }
        </Box>
    )
}
export default Customer