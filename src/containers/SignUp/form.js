import React from 'react';
import { shape, string, bool } from 'prop-types';
import useFormHook from './formHook';
import { FormikInput } from '../../design-system/molecules';
import { FLD, COPY } from '../constants';

const propTypes = {
  isSubmitting: bool,
  error: string,
  values: shape({
    email: string,
    password: string,
    verifyPassword: string,
  }),
};

const defaultProps = {
  isSubmitting: false,
  error: '',
  values: {
    email: '',
    password: '',
    verifyPassword: '',
  },
};

const showHideError = error => (
  <Box mt="20px" display="flex" justifyContent="center">
    <Error fontSize="16px" lineHeight="22px" key={error}>
      {error}
    </Error>
  </Box>
);

const SignUpForm = ({ isSubmitting, error, handleSubmit }) => (
  <Form
    noValidate
    onSubmit={e => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <Box maxContentWidth mx={[0, 'Auto']} mb={[0, '100px']}>
      <Box mt={[48, 70]} textAlign="center">
        <Headline>{COPY.SIGNUP_HEADING}</Headline>
      </Box>

      <Box display="block" flexWrap="wrap" alignItems="baseline">
        <Box
          flex={['60%', '40%']}
          mb={[18, 32]}
          borderRight="12px solid transparent"
        >
          <Field
            name="firstName"
            placeholder={FLD.FLD_PLH_FNAME}
            label={FLD.FLD_LBL_FNAME}
            component={FormikInput}
          />
        </Box>
        <Box
          flex={['60%', '40%']}
          mb={[18, 32]}
          borderRight="12px solid transparent"
        >
          <Field
            name="lastName"
            placeholder={FLD.FLD_PLH_LNAME}
            label={FLD.FLD_LBL_LNAME}
            component={FormikInput}
          />
        </Box>
        <Box
          flex={['60%', '40%']}
          mb={[18, 32]}
          borderRight="12px solid transparent"
        >
          <Field
            name="email"
            placeholder={FLD.FLD_PLH_EMAIL}
            label={FLD.FLD_LBL_EMAIL}
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
            name="userPassword"
            placeholder={FLD.FLD_PLH_PASSWORD}
            label={FLD.FLD_LBL_PASSWORD}
            type="password"
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
            name="confirmUserPassword"
            placeholder={FLD.FLD_PLH_CONFIRM_PASSWORD}
            label={FLD.FLD_LBL_CONFIRM_PASSWORD}
            type="password"
            component={FormikInput}
          />
        </Box>
        <Box>
          <Box display="flex" justifyContent="center">
            <Field
              component={props => (
                <FormikSubmitButton
                  disabled={isSubmitting}
                  errorMessage={'error'}
                  {...props}
                />
              )}
              name="submit"
            >
              {FLD.BTN_SUBMIT}
            </Field>
          </Box>
          {showHideError(error)}
        </Box>
      </Box>
    </Box>
  </Form>
);

SignUpForm.propTypes = propTypes;
SignUpForm.defaultProps = defaultProps;

export default useFormHook(SignUpForm);
