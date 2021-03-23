import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField({name , form , label , disabled}) {
    const { errors } = form;

    const hasErrors = errors[name];
    // console.log(errors[name] , formState.touched[name]);
    return (
        <Controller
        control={form.control}
        name={name}
        as={TextField}

        variant="outlined"
        margin="normal"
        label={label}
        disabled={disabled}

        error={!!hasErrors}
        
        helperText={errors[name]?.message}
        fullWidth
        />
    );
}

export default InputField;