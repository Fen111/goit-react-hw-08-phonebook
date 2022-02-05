import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const filter = createReducer(initialState.contacts.filter, {
  [actions.changeFilter]: (_state, { payload }) => payload,
});
