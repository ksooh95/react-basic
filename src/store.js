//redux 통
import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

const cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {
        addCount(state, action) {
            let number = state.findIndex((a) => {
                return a.id === action.payload;
            });
            state[number].count++;
        },
        addItem(state, action) {
            state.push(action.payload);
        },
    },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
