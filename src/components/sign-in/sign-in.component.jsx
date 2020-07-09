import React from 'react';

import './sign-in.styles.scss';

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
import { auth } from '../../firebase/firebase.utils';
import SimpleDialog from '../../components/simple-dialog/simple-dialog.component';
import Header from '../header/header.component';

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    open: false,
    message: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      setValues({ name: '', password: '', ...values });
    } catch (err) {
      setValues({ ...values, open: true, message: err.message });
    }
  };
  return (
    <div>
      <Header text='Sign In with Email or Google' />

      <form className='sign-in-email-password'>
        <FormControl className='email' variant='outlined' required>
          <InputLabel color='secondary' htmlFor='outlined-adornment-email'>
            Email
          </InputLabel>
          <OutlinedInput
            color='secondary'
            id='outlined-adornment-email-sign-in'
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
            id='outlined-adornment-password-sign-in'
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

        <Button
          className='sign-in-btn'
          color='secondary'
          variant='contained'
          onClick={submitForm}
        >
          Sign In With Email and Password
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

export default SignIn;
