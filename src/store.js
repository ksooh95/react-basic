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
            state.count += action;
        },
    },
});

export let { addCount } = user.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
