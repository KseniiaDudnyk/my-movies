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
import Header from '../../components/header/header.component';
import SimpleDialog from '../../components/simple-dialog/simple-dialog.component';
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    open: false,
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

    if (values.email.length < 5 || values.password < 5) {
      setValues({ ...values, open: true });
    }

    if (values.password !== values.confirmPassword) {
      alert("passwords don't match");
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
      console.log(err);
    }

    console.log(values);
  };

  return (
    <div>
      <Header text='Please Sign In' />

      <div className='sign-in-form'>
        <form className='sign-in-password' noValidate autoComplete='off'>
          <FormControl className='name' variant='outlined' required>
            <InputLabel color='secondary' htmlFor='outlined-adornment-name'>
              Email
            </InputLabel>
            <OutlinedInput
              color='secondary'
              id='outlined-adornment-name'
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
              type={values.showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
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
              labelWidth={150}
            />
          </FormControl>

          <Button
            className='sign-in-btn'
            color='secondary'
            variant='contained'
            onClick={submitForm}
          >
            Sign Up
          </Button>
        </form>

        <div className='sign-in-google'>
          <Button
            onClick={signInWithGoogle}
            className='sign-in-btn'
            color='primary'
            variant='contained'
          >
            {' '}
            Sign In With Google{' '}
          </Button>
        </div>
      </div>

      <SimpleDialog
        open={values.open}
        onClose={() => setValues({ ...values, open: false })}
        message='Please fill the form'
      />
    </div>
  );
};

export default SignIn;
