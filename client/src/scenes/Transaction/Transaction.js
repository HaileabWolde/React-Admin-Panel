import { useState } from "react";
import { useGetTransactionQuery } from "../../redux/api";
const Transaction = ()=>{
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [sort, setSort] = useState({})
    const [search, setSearch] = useState('')
    const {data, isLoading} = useGetTransactionQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
    console.log(data)
    return (
        <div>
            <h1>Transaction</h1>
        </div>
    )
}
export default Transaction;