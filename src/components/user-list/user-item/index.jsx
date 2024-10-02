import {Button, Typography, Paper, Grid, Box, styled} from '@mui/material';

const UserCard = styled(Paper)({
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between'
});

const UserItem = ({user, onEditClick, onDeleteClick}) => {
    return (
        <Grid item xs={12}>
            <UserCard>
                <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body1">Age: {user.age}</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Button variant="contained" onClick={onEditClick}>
                        Edit
                    </Button>
                    <Button variant="contained" color="error" onClick={onDeleteClick}>
                        Delete
                    </Button>
                </Box>
            </UserCard>
        </Grid>
    );
};

export default UserItem;