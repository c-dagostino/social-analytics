import * as yup from 'yup';
import { withFormik } from 'formik';
import * as validators from '../utils/validators';

const mapPropsToValues = () => {
  const newValues = {
    email: '',
    userPassword: '',
    confirmUserPassword: '',
    firstName: '',
    lastName: '',
    error: null,
  };

  return newValues;
};

const validationSchema = () =>
  yup.lazy(() => {
    return yup.object().shape({
      firstName: validators.firstName,
      lastName: validators.lastName,
      userPassword: validators.password,
      confirmUserPassword: validators.confirmPassword,
      email: validators.signInEmail,
    });
  });

const displayName = 'SignInForm';
const validateOnBlur = true;
const validateOnChange = true;

const formikConfig = {
  mapPropsToValues,
  validationSchema,
  displayName,
  validateOnBlur,
  validateOnChange,
};

const useFormHook = form =>
  withFormik({
    ...formikConfig,
    handleSubmit: (values, { props: { onSubmit } }) => {
      onSubmit(values);
    },
  })(form);

export default useFormHook;
