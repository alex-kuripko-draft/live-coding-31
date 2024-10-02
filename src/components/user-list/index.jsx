import {Button, Grid, Typography} from '@mui/material';
import UserItem from "./user-item";
import {selectUsers} from "../../redux/selectors";
import {useSelector} from "react-redux";
import UserFormModal from "../user-form-modal";
import {useState} from "react";

const UserList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const users = useSelector(selectUsers);
    
    const handleOpenModal = (user = null) => {
        setEditingUser(user);
        setOpenModal(true);
    };
    
    const handleCloseModal = () => {
        setEditingUser(null);
        setOpenModal(false);
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
                onSubmit={console.log}
            />
        </Grid>
    );
};

export default UserList;