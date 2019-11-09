import React from 'react';
import { func, string } from 'prop-types';

const propTypes = {
  className: string,
  onClickLogout: func,
  onClickMyAccount: func,
};

const defaultProps = {
  className: '',
  onClickLogout: () => {},
  onClickMyAccount: () => {},
};

const Logo = () => (
  <div id="sbdata-header17-desktop-top-logo">
    <a
      data-event="Clicked Header Logo"
      href="//sightbox.com"
      rel="external"
      className="ui-link"
    >
      Site Analysis
    </a>
  </div>
);

const Account = ({ onClickLogout, onClickMyAccount }) => (
  <div id="sbdata-header17-desktop-top-login">
    <a
      className="sbdata-header17-desktop-top-logout-links-inactive ui-link"
      data-event="Header - My Account"
      href="/my-account"
      rel="external"
      onClick={onClickMyAccount}
    >
      MY ACCOUNT
    </a>{' '}
    <span className="sbdata-header17-desktop-top-nav-divider">|</span>{' '}
    <a
      className="sbdata-header17-desktop-top-logout-links-inactive ui-link"
      onClick={onClickLogout}
      href="/sign-out"
    >
      LOG OUT
    </a>
  </div>
);

Account.propTypes = {
  onClickLogout: func.isRequired,
  onClickMyAccount: func.isRequired,
};

const Navigation = () => (
  <div id="sbdata-header17-desktop-bottom">
    <a
      className="sbdata-header17-desktop-bottom-links-inactive ui-link"
      data-event="Header - Our Service"
      href="//sightbox.com/how-do-i-get-eye-exam-and-contact-lenses"
      rel="external"
      // onclick="loadPageOverlay();"
    >
      Our Service
    </a>
    <a
      className="sbdata-header17-desktop-bottom-links-inactive ui-link"
      data-event="Header - Our Members"
      href="//sightbox.com/reviews-about-sightbox-vision-care-for-contact-lens-wearers"
      rel="external"
      // onclick="loadPageOverlay();"
    >
      Our Members
    </a>
    <a
      className="sbdata-header17-desktop-bottom-links-inactive ui-link"
      data-event="Header - Questions"
      href="//support.sightbox.com"
      rel="external"
      // onclick="loadPageOverlay();"
    >
      Questions
    </a>
  </div>
);

const Desktop = ({ onClickLogout, onClickMyAccount, className }) => (
  <div className={className} id="sbdata-header17-desktop">
    <div id="sbdata-header17-desktop-top">
      <div id="sbdata-header17-desktop-top-leftspacer" />
      <Logo />
      <Account
        onClickLogout={onClickLogout}
        onClickMyAccount={onClickMyAccount}
      />
    </div>
    <div id="sbdata-header17-desktop-middle" />
    <Navigation />
  </div>
);

Desktop.propTypes = propTypes;
Desktop.defaultProps = defaultProps;

export default Desktop;
