import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.users.push({
                id: uuidv4(),
                ...payload,
            });
        },
        editUser: (state, { payload }) => {
            const editingIdx = state.users.findIndex(({ id }) => payload.id === id);
            
            if (editingIdx !== -1) {
                state.users = [
                    ...state.users.slice(0, editingIdx),
                    payload,
                    ...state.users.slice(editingIdx + 1),
                    
                ]
            }
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter((user) => user.id !== payload);
        },
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;