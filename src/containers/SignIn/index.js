import React from 'react';
import { shape, string } from 'prop-types';
import { default as useSignIn } from './hook';
import { Box } from '../design-system/atoms'
import { Headline, FormikInput, FormikSubmitButton } from '../design-system/molecules'
import { Field, Form } from 'formik';


const propTypes = {
  values: shape({
    email: string,
    password: string,
  }),
};

const defaultProps = {
  values: {
    email: '',
    password: '',
  },
};

const SignIn = () => {
 return (
 <Form noValidate>
      <Box maxContentWidth mx={[0, 'Auto']} mb={[0, '100px']}>
        <Box mt={[48, 70]} textAlign="center">
          <Headline>Sign In</Headline>
        </Box>
        <Box display="block" flexWrap="wrap" alignItems="baseline">
          <Box
            flex={['60%', '40%']}
            mb={[18, 32]}
            borderRight="12px solid transparent"
          >
            <Field
              name="email"
              placeholder="john.doe@example.com"
              label="Email"
              component={FormikInput}
            />
          </Box>
          
          <Box
            flex={['60%', '40%']}
            mb={[18, 32]}
            borderRight="12px solid transparent"
            display="block"
          >
            <Field
              name="password"
              placeholder="password"
              label="password"
              type="password"
              component={FormikInput}
            />
          </Box>
          <Box>
          <Box display="flex" justifyContent="center">
          <Field
            component={props => (
              <FormikSubmitButton
                errorMessage={"error"}
                {...props}
              />
            )}
            name="submit"
          >
            Submit
          </Field>
        </Box>
      </Box>
</Box>
</Box>
</Form>
)};

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;


export default useSignIn(SignIn);
