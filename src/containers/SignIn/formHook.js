import * as yup from 'yup';
import { withFormik } from 'formik'; 
import * as validators from '../utils/validators';

const mapPropsToValues = () => {
  const newValues = {
    email: '',
    code: '',
    error: null,
  };

  return newValues;
};

const validationSchema = () =>
  yup.lazy(values => {
    return yup.object().shape({
      password: validators.signInPassword,
      code: validators.signUpCode,
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

const useFormHook = (form) => withFormik({...formikConfig,
    handleSubmit: (values, { props: { onSubmit } }) => {
      onSubmit(values);
    },
  })(form);

export default useFormHook;

