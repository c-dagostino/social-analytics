import React from 'react';
import Auth from 'aws-amplify';
import { Box } from '../../design-system/atoms'
import Form from './Form';


const onSubmit = () => {
    const { username, password } = this.state;
    const validationData = null;
    Auth.signIn({
      username, // Required, the username
      password, // Optional, the password
      validationData // Optional, a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
    })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

const SignIn = () => {
    return (<Box>
        <h1>Social Analysis</h1>
        <Form onSubmit={onSubmit} />
    </Box>);
};

export default SignIn;
