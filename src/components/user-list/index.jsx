import {Grid, Typography} from '@mui/material';
import UserItem from "./user-item";

const UserList = () => {
    const users = [
        {id: 1, name: 'Alex', age: 25, email: 'alex@gmail.com'},
        {id: 2, name: 'Viktor', age: 30, email: 'viktor@gmail.com'},
    ]

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