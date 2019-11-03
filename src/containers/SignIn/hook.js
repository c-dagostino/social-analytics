
import { Auth } from 'aws-amplify';
import * as yup from 'yup';
import { withFormik } from 'formik'; 
import * as validators from '../utils/validators';

const handleSubmit = (values) => {
      const { email, password } = values;
      const validationData = null;
      Auth.signIn({
        username: email, // Required, the username
        password, // Optional, the password
        validationData // Optional, a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
      })
        .then(user => console.log(user))
        .catch(err => console.log(err));
};

const mapPropsToValues = () => {
  const newValues = {
    email: '',
    password: '',
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
  handleSubmit,
  displayName,
  validateOnBlur,
  validateOnChange,
};

const Form = (form) => {
  return withFormik(formikConfig)(form);
};

export default Form;

