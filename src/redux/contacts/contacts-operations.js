import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsApi';
import { toast } from 'react-toastify';
// import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      toast.error('contact delete');
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
