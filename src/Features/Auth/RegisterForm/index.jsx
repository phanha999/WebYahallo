import React from 'react';
import PropTypes from 'prop-types';
import {  Button , makeStyles } from '@material-ui/core';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../Form Control/InputField';
import PasswordField from '../../../Form Control/PasswordField';




RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({

}))

function RegisterForm({onSubmit}) {
    const classes = useStyles();

    const schema = yup.object().shape({ 
        fullName: yup.string()
        .required('Please enter your full name')   
        .test('Errors' , (value) => {
            return value.split(' ').length >= 2 ;
        }),
        email: yup.string()
        .required('Please enter your Email')
        .email('Your email is invalid'),
        password: yup.string()
        .required('Please enter your Password')
        .min(6, 'Your need to enter a minimum of 6 characters '),
        retypePassword: yup.string()
        .required('Please enter your Retype Password')
        .oneOf([yup.ref('password')], 'Password is not match')
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
              <h3 className="auth_form-heading">Đăng ký</h3>
            </div>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
             
                <InputField name="fullName"  label="Tên của bạn" form={form}/>
         
            
                <InputField name="email"  label="Email của bạn" form={form} />
      
          
                <PasswordField name="password"  label="Mật khẩu của bạn" form={form} />
    
        
                <PasswordField name="retypePassword"  label="Xác nhận mật khẩu" form={form} />
   
              <Button className={classes.btn} type="submit"  color="primary" variant="contained" fullWidth size='large'>
                    Đăng ký tài khoản
                </Button>
                
            </form>

        </div>
      </div>
      </div>
      
    );
}

export default RegisterForm;