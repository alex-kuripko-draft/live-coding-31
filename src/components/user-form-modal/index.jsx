import {
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent, Box,
} from '@mui/material';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required').min(1, 'Age must be greater than 0'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const initValues = {
    name: '',
    age: '',
    email: '',
}

const UserFormModal = ({open, onClose, editingUser, onSubmit}) => {

    const handleSubmit = (values, {resetForm}) => {
        onSubmit(values);
        resetForm();
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                {editingUser ? 'Edit User' : 'Add User'}
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={editingUser || initValues}
                    validationSchema={UserSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({errors, touched, handleChange, values}) => (
                        <Form>
                            <Field
                                as={TextField}
                                fullWidth
                                margin="normal"
                                name="name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                margin="normal"
                                name="age"
                                label="Age"
                                type="number"
                                value={values.age}
                                onChange={handleChange}
                                error={touched.age && Boolean(errors.age)}
                                helperText={touched.age && errors.age}
                            />
                            <Field
                                as={TextField}
                                fullWidth
                                margin="normal"
                                name="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <Box display="flex" gap={2}>
                                <Button
                                    variant="contained"
                                    color="inherit"
                                    onClick={onClose}
                                    fullWidth
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                >
                                    {editingUser ? 'Save Changes' : 'Add User'}
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default UserFormModal;