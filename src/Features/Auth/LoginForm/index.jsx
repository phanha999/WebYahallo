import React from 'react';
import PropTypes from 'prop-types';
import {  Button , makeStyles } from '@material-ui/core';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../Form Control/InputField';
import PasswordField from '../../../Form Control/PasswordField';




LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({

}))

function LoginForm({onSubmit}) {
    const classes = useStyles();

    const schema = yup.object().shape({ 
        identifier: yup.string()
        .required('Please enter your Email')
        .email('Your email is invalid'),
        password: yup.string()
        .required('Please enter your Password')
        .min(6, 'Your need to enter a minimum of 6 characters '),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',  
            //...
        },
        resolver: yupResolver(schema),
    })
    const handleSubmit = async (value) => {
        if(onSubmit) { 
           await onSubmit(value);
        }
    }
    return (
        <div>
        <div className="auth_form">
          <div className="auth_form-container">
            <div className="auth_form-header">
              <h3 className="auth_form-heading">Đăng nhập</h3>
            </div>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
  
                <InputField className={classes.btn} name="identifier"  label="Email của bạn" form={form} />
   
            
                <PasswordField name="password"  label="Mật khẩu của bạn" form={form} />
          
             
              <Button type="submit"  color="primary" variant="contained" fullWidth size='large'>
                    Đăng nhập
                </Button>
            </form>

        </div>
      </div>
      </div>
      
    );
}

export default LoginForm;