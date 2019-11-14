import { shape, string, bool } from "prop-types";
import useFormHook from "./formHook";
import { FLD, COPY } from "../constants";
import { FormikInput } from "../../design-system/molecules";

const propTypes = {
  isSubmitting: bool,
  error: string,
  values: shape({
    email: string,
    password: string
  })
};

const defaultProps = {
  isSubmitting: false,
  error: "",
  values: {
    email: "",
    password: ""
  }
};

const showHideError = error => (
  <Box mt="20px" display="flex" justifyContent="center">
    <Error fontSize="16px" lineHeight="22px" key={error}>
      {error}
    </Error>
  </Box>
);

const SignInForm = ({ isSubmitting, error, handleSubmit }) => {
  return (
    <Form
      noValidate
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Box maxContentWidth mx={[0, "Auto"]} mb={[0, "100px"]}>
        <Box mt={[48, 70]} textAlign="center">
          <Headline>{COPY.SIGNIN_HEADING}</Headline>
        </Box>
        <Box display="block" flexWrap="wrap" alignItems="baseline">
          <Box
            flex={["60%", "40%"]}
            mb={[18, 32]}
            borderRight="12px solid transparent"
          >
            <Field
              name="email"
              placeholder="john.doe@example.com"
              label={FLD.FLD_LBL_EMAIL}
              component={FormikInput}
            />
          </Box>

          <Box
            flex={["60%", "40%"]}
            mb={[18, 32]}
            borderRight="12px solid transparent"
            display="block"
          >
            <Field
              name="password"
              placeholder="password"
              label={FLD.FLD_LBL_PASSWORD}
              type="password"
              component={FormikInput}
            />
          </Box>
          <Box>
            {COPY.SIGNIN_NOT_A_MEMBER}{" "}
            <a href="/sign-up" title={COPY.SIGNIN_SIGNUP_NOW}>
              {COPY.SIGNIN_SIGNUP_NOW}
            </a>{" "}
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
                {FLD.BTN_SUBMIT}
              </Field>
            </Box>
            {showHideError(error)}
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;

export default useFormHook(SignInForm);
