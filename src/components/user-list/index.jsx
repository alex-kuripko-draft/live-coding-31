import {Grid, Typography} from '@mui/material';
import UserItem from "./user-item";
import {selectUsers} from "../../redux/selectors";
import {useSelector} from "react-redux";

const UserList = () => {
    const users = useSelector(selectUsers);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">User List</Typography>
            </Grid>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </Grid>
    );
};

export default UserList;