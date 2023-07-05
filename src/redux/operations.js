// Використовуй функцію createAsyncThunk для оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. 
// Обробку екшенів та зміну даних у стані Redux зроби за допомогою createSlice.

// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

// https://64a45e5ac3b509573b57718f.mockapi.io/contacts/ 

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a45e5ac3b509573b57718f.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

