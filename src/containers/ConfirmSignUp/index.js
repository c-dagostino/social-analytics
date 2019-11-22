import React from 'react';
import { string, shape, func } from 'prop-types';
import { Auth } from 'aws-amplify';
import { connect, useDispatch } from 'react-redux';
import Logger from '../../components/logging';
import actions from '../App/actions';
import selectors from '../App/selectors';
import ConfirmSignUpForm from './form';

const logger = new Logger({ logName: 'social-analysis' });

const ConfirmSignUp = ({ error, history }) => {
  const dispatch = useDispatch();
  const onConfirmSignUp = async values => {
    const { email, code } = values;
    Auth.confirmSignUp(email, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then(history.push('/sign-in'))
      .catch(err => {
        dispatch(actions.setError(err.message));
        logger.log(`${email} Error: ${JSON.stringify(err)}`);
      });
  };

  return <ConfirmSignUpForm onSubmit={onConfirmSignUp} error={error} />;
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

ConfirmSignUp.propTypes = propTypes;
ConfirmSignUp.defaultProps = defaultProps;

export default connect(mapStateToProps)(ConfirmSignUp);
