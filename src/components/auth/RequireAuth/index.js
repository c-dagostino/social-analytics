import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function RequireAuth(ComposedComponent) {
  class Authentication extends React.Component {
    static propTypes = {
      locale: PropTypes.string
    };
    state = {
      userIsAuthenticated: false
    };

     
    static defaultProps = {
      locale: 'en',
      user: null
    };

    render() {
      const token = localStorage.getItem(
        'CognitoIdentityServiceProvider.17s9fcn6n7dtqkn4mqn7r7ll17.26f0e6c4-e2cd-4742-9659-2c34514c2b95.accessToken'
      );
      const { locale } = this.props;

      
      if (!token) {
        return (
          <Redirect
            push
            to={{
              pathname: '/sign-in',
              state: {
                referrer: `${window.location.pathname}${
                  window.location.search
                }`,
                locale,
              }
            }}
          />
        );
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    // locale: state.getIn(['i18n', 'locale'])
  });

  const withConnect = connect(mapStateToProps);

  return compose(withConnect)(Authentication);
}
