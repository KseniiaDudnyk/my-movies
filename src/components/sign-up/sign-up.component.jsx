import React, { useState } from 'react';

import './sign-up.styles.scss';

import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SimpleDialog from '../../components/simple-dialog/simple-dialog.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Header from '../header/header.component';

const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    open: false,
    message: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (values.email.length < 5 || values.password < 5) {
      setValues({
        ...values,
        open: true,
        message: 'Invalid password or Email',
      });
    }

    if (values.password !== values.confirmPassword) {
      setValues({ ...values, open: true, message: "passwords don't match" });

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await createUserProfileDocument(user);

      setValues({ name: '', password: '', ...values });
    } catch (err) {
      setValues({ ...values, open: true, message: err.message });
    }
  };

  return (
    <div>
      <Header text=' Sing Up With Email' />

      <form className='sign-up-email-password' noValidate autoComplete='off'>
        <FormControl className='email' variant='outlined' required>
          <InputLabel color='secondary' htmlFor='outlined-adornment-email'>
            Email
          </InputLabel>
          <OutlinedInput
            color='secondary'
            id='outlined-adornment-email'
            value={values.email}
            onChange={handleChange('email')}
            labelWidth={50}
          />
        </FormControl>

        <FormControl className='password' variant='outlined' required>
          <InputLabel color='secondary' htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            color='secondary'
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={80}
          />
        </FormControl>

        <FormControl className='password' variant='outlined' required>
          <InputLabel color='secondary' htmlFor='outlined-adornment-password'>
            Confirm Password
          </InputLabel>
          <OutlinedInput
            color='secondary'
            id='outlined-adornment-confirm-password'
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showConfirmPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={150}
          />
        </FormControl>

        <Button
          className='sign-up-btn'
          color='secondary'
          variant='contained'
          onClick={submitForm}
        >
          Sign Up
        </Button>
      </form>

      <SimpleDialog
        open={values.open}
        onClose={() => setValues({ ...values, open: false, message: '' })}
        message={values.message}
      />
    </div>
  );
};

export default SignUp;
