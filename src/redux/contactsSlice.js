import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61f3b58010f0f7001768c5ac.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
