import React from 'react';
import { string, shape, func } from 'prop-types';
import { Auth } from 'aws-amplify';
import { connect, useDispatch } from 'react-redux';
import SignUpForm from './form';
import Logger from '../../components/logging';
import actions from '../App/actions';
import selectors from '../App/selectors';

const logger = new Logger({ logName: 'social-analysis' });

const SignUp = ({ error, history }) => {
  const dispatch = useDispatch();

  const onSignUp = async values => {
    const { email, userPassword, lastName, firstName } = values;
    const validationData = null;

    Auth.signUp({
      username: email,
      password: userPassword,
      attributes: {
        'custom:first_name': firstName,
        'custom:last_name': lastName,
      },
      validationData,
    })
      .then(history.push('/confirm-sign-up'))
      .catch(err => {
        dispatch(actions.setError(err.message));
        logger.log(`${email} Error: ${JSON.stringify(err)}`);
      });
  };
  return <SignUpForm onSubmit={onSignUp} error={error} />;
};

function mapStateToProps(state, ownProps) {
  const selectError = selectors.makeSelectError();
  return { error: selectError(state, ownProps) };
}
const propTypes = {
  error: string,
  history: shape({
    push: func,
  }),
};

const defaultProps = {
  error: null,
  history: null,
};

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default connect(mapStateToProps)(SignUp);
