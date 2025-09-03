import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the SKU item type based on the API response
export interface MappedSKUItem {
  SKUID: string;
  Gender: string;
  Cat: number;
}

// Define the response type for GetMappedSKUDetails
export interface GetMappedSKUDetailsResponse {
  MappedSkuList: MappedSKUItem[];
}

// Create the API slice
export const tryndbuyApi = createApi({
  reducerPath: 'tryndbuyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://t03.tryndbuy.com/api',
    prepareHeaders: (headers) => {
      headers.set('authID', '3c643a25e11144ad');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMappedSKUDetails: builder.query({
      query: () => ({
        url: '/GetMappedSKUDetails',
        method: 'GET',
      }),
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetMappedSKUDetailsQuery } = tryndbuyApi;
