import {Button, Grid, Typography} from '@mui/material';
import UserItem from "./user-item";
import {selectUsers} from "../../redux/selectors";
import {useDispatch, useSelector} from "react-redux";
import UserFormModal from "../user-form-modal";
import {useState} from "react";
import {addUser, deleteUser, editUser} from "../../redux/user/slice";

const UserList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const handleOpenModal = (user = null) => {
        setEditingUser(user);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setEditingUser(null);
        setOpenModal(false);
    };

    const handleSubmitUserForm = (user) => {
        dispatch((user.id ? editUser : addUser)(user));
    };

    const handleDeleteUser = (user) => {
        dispatch(deleteUser(user.id));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">User List</Typography>
            </Grid>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    onEditClick={() => handleOpenModal(user)}
                    onDeleteClick={() => handleDeleteUser(user)}
                />
            ))}
            <Grid item xs={12}>
                <Button variant="contained" onClick={() => handleOpenModal()}>
                    Add new
                </Button>
            </Grid>
            <UserFormModal
                open={openModal}
                onClose={handleCloseModal}
                editingUser={editingUser}
                onSubmit={handleSubmitUserForm}
            />
        </Grid>
    );
};

export default UserList;