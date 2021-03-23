import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';


Login.propTypes = {
    handleOnClose: PropTypes.func,
};

function Login({handleOnClose}) {
    const dispatch = useDispatch()
    const { enqueueSnackbar }  = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if(handleOnClose){
                handleOnClose();
            }

        } catch (error) {
            console.log('error', error );
            enqueueSnackbar(error.message ,{ variant: 'error'});
            // enqueueSnackbar('Error!!!!!! Email or Password is incorrect ',{ variant: 'error'});
        }
    };
    
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;