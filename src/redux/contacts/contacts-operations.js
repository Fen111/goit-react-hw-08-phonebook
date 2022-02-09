import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsApi';
import axios from 'axios';

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
      alert('Contact added');
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
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const changeContactName = createAsyncThunk(
  'contacts/changeContactName',
  async ({ id, value }) => {
    const { data } = await axios.patch(`/contacts/${id}`, { name: value });

    return data;
  },
);
export const changeContactNumber = createAsyncThunk(
  'contacts/changeContactNumber',
  async ({ id, value }) => {
    const { data } = await axios.patch(`/contacts/${id}`, { number: value });
    return data;
  },
);
