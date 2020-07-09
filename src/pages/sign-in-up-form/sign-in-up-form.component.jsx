import React from 'react';

import './sign-in-up-form.styles.scss';

import { Button } from '@material-ui/core';
import Header from '../../components/header/header.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInUpForm = () => (
  <div>
    <Header text='Sign In Or Sign Up' />

    <div className='sign-up-in-form'>
      <div className='sign-in'>
        <SignUp className='sign-up' />
      </div>

      <div className='sign-in'>
        <SignIn />
        <Button
          onClick={signInWithGoogle}
          className='sign-in-btn-google'
          color='primary'
          variant='contained'
        >
          {' '}
          Sign In With Google{' '}
        </Button>
      </div>
    </div>
  </div>
);

export default SignInUpForm;
