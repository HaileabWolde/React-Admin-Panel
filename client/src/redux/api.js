import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Product", "Customer"],
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
        })
    })
})

export const {useGetUserQuery, useGetProductQuery, useGetCustomerQuery} = api