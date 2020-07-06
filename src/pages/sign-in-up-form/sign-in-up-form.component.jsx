import React from 'react';

import './sign-in-up-form.styles.scss';

import { Button } from '@material-ui/core';
import Header from '../../components/header/header.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInUpForm = () => (
  <div>
    <Header text='Please Sign In Or Sign Up' />

    <div className='sign-up-in-form'>
      <SignUp className='sign-up' />

      <div className='sign-in'>
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
  </div>
);

export default SignInUpForm;
