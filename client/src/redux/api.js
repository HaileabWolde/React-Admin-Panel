import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Product", "Customer", "Transaction", "Geography", "Sales"],
    endpoints:(build)=> ({
        getUser: build.query({
            query: (id)=> `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProduct: build.query({
            query: ()=> '/client/getProduct',
            providesTags: ["Product"]
        }),
        getCustomer: build.query({
            query: ()=> '/client/getUser',
            providesTags: ["Customer"]
        }),
        getTransaction: build.query({
            query: ({page, pageSize, sort, search})=>({
                url: "client/getTransaction",
                method: "GET",
                params: { page, pageSize, sort, search},
        }),
        providesTags: ["Transaction"]
        }),
        getGeography: build.query({
            query: ()=> "/client/getGeography",
            providesTags: ["Geography"]
        }),
        getStat: build.query({
            query: ()=> "/sales/getOverallStat",
            providesTags: ["Sales"]
        })
    })
})

export const {useGetUserQuery, useGetProductQuery, useGetCustomerQuery, 
    useGetTransactionQuery, useGetGeographyQuery, useGetStatQuery} = api