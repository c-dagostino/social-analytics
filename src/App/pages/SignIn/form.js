import React from 'react';
import { shape, func, bool, string } from 'prop-types';
import { Box, Button } from '../../design-system/atoms'
import { Headline } from '../../design-system/molecules'
import { withFormik,  Field } from 'formik';

const propTypes = {
  values: shape({
    email: string,
    password: string,
  }).isRequired,
  touched: shape({
    email: bool,
    password: bool,
  }).isRequired,
  errors: shape({
    email: string,
    password: bool,
  }).isRequired,
  handleChange: func.isRequired,
  handleBlur: func.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
};

const SignInForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
      <Box maxContentWidth mx={[200, 'auto']} mb={[0, '100px']}>
        <Box mt={[48, 70]} textAlign="center">
          <Headline>Sign In</Headline>
        </Box>
        <Box display="block" flexWrap="wrap" alignItems="baseline">
          <Box
            flex={['100%', '100%']}
            mb={[18, 32]}
            borderRight="12px solid transparent"
          >
            <Field
              name="email"
              placeholder="john.doe@example.com"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <Box>{errors.email}</Box>}
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <Box>{errors.password}</Box>}
          </Box>
          <Box>
          <Button type="submit" disabled={isSubmitting}>
        Sign In
      </Button>
      </Box>
</Box>
</Box>
</form>
);

SignInForm.propTypes = propTypes;

const SignInFormWithFormik = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },

  displayName: 'LoginForm',
})(SignInForm);

export default SignInFormWithFormik;
