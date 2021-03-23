import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText } from '@material-ui/core';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField({name , form , label , disabled}) {
    const { errors } = form;

    const hasErrors = !!errors[name];
    // console.log(errors[name] , formState.touched[name]);

    const [ showPassword , setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(x => !x)
    };

    return (
        <div>
            <FormControl error={hasErrors} fullWidth margin="normal" variant="outlined" >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    control={form.control}
                    name={name}
                    as={OutlinedInput}
                    id={name}
                    label={label}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    disabled={disabled}
                />
                <FormHelperText >{errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;