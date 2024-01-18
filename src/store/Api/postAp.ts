import { CreateApi, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../../utils/baseUrl";

export const postApi = createApi ({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPostList: builder.query ({
            query: () => ({
                url: "/post",
                method:"GET",
            }),
        }) ,
        getPostListItem: builder.query ({
            query: (postId: string) =>({
                url: '/post?post_id=$(postId)',
                method:"GET"
            })
        })
    }),
});