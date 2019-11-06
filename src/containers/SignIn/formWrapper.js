import * as yup from 'yup';
import { withFormik } from 'formik'; 
import * as validators from '../utils/validators';
import SignInForm from './form';

const mapPropsToValues = () => {
  const newValues = {
    email: '',
    password: '',
    error: null,
  };

  return newValues;
};

const validationSchema = () =>
  yup.lazy(values => {
    return yup.object().shape({
      password: validators.signInPassword,
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

const Form = withFormik({...formikConfig,
    handleSubmit: (values, { props: { onSubmit } }) => {
      onSubmit(values);
    },
  })(SignInForm);

export default Form;

