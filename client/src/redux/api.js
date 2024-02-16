import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Product", "Customer", "Transaction"],
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
        })
    })
})

export const {useGetUserQuery, useGetProductQuery, useGetCustomerQuery, useGetTransactionQuery} = api