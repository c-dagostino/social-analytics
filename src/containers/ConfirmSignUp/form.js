import React from 'react';
import { shape, string, bool } from 'prop-types';
import useFormHook from './formHook'
import { Box, Error,  } from '../../design-system/atoms'
import { Headline, FormikInput, FormikSubmitButton } from '../../design-system/molecules'
import { Field, Form } from 'formik';



const propTypes = {
  isSubmitting: bool,
  error: string,
  values: shape({
    email: string,
    code: string,
  }),
};

const defaultProps = {
  isSubmitting: false,
  error: '',
  values: {
    email: '',
    code: '',
  },
};

const showHideError = error => (
    <Box mt="20px" display="flex" justifyContent="center">
      <Error fontSize="16px" lineHeight="22px" key={error}>
        {error}
      </Error>
    </Box>
  );

const ConfirmSignUpForm = ({isSubmitting, error, handleSubmit}) => {
 return (
  <Form noValidate onSubmit={e => {
    e.preventDefault();
    handleSubmit();
  }}>
      <Box maxContentWidth mx={[0, 'Auto']} mb={[0, '100px']}>
        <Box mt={[48, 70]} textAlign="center">
          <Headline>Verify Sign Up</Headline>
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
              name="code"
              placeholder="enter code"
              label="code"
              type="code"
              component={FormikInput}
            />
          </Box>
         
          <Box>
          <Box display="flex" justifyContent="center">
          <Field
            component={props => (
              <FormikSubmitButton
                disabled={isSubmitting}
                errorMessage={"error"}
                {...props}
              />
            )}
            name="submit"
          >
            Submit
          </Field>
        </Box>
        {showHideError(error)}
      </Box>
</Box>
</Box>
</Form>
)};

ConfirmSignUpForm.propTypes = propTypes;
ConfirmSignUpForm.defaultProps = defaultProps;

export default useFormHook(ConfirmSignUpForm)
