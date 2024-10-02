import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {id: 1, name: 'Alex', age: 25, email: 'alex@gmail.com'},
        {id: 2, name: 'Viktor', age: 30, email: 'viktor@gmail.com'},
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});
export default userSlice.reducer;