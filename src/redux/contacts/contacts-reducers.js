import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
};

const items = createReducer(initialState.contacts.items, {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(initialState.contacts.loading, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer(initialState.contacts.filter, {
  [changeFilter]: (_state, { payload }) => payload,
});

const error = createReducer(initialState.contacts.error, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
