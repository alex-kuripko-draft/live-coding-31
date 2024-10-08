import { configureStore } from '@reduxjs/toolkit';
import users from './user/slice';

const store = configureStore({
    reducer: { users },
});

export default store;