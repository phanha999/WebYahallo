import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import { useSnackbar } from 'notistack';


Register.propTypes = {
    handleOnClose: PropTypes.func,
};

function Register({handleOnClose}) {
    const dispatch = useDispatch()
    const { enqueueSnackbar }  = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            if(handleOnClose){
                handleOnClose();
            }

            console.log('success', user );
            enqueueSnackbar('Successfully!',{ variant: 'success'});
        } catch (error) {
            console.log('error', error );
            // enqueueSnackbar(error.message ,{ variant: 'error'});
            enqueueSnackbar('Error!!!!!! Email is already in use',{ variant: 'error'});
        }
    };
    
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;