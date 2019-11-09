import React from 'react';
import { func, string } from 'prop-types';

import { Link } from 'react-router-dom';

const propTypes = {
  onClose: func.isRequired,
  marketingBaseUrl: string,
  supportBaseUrl: string,
  onClickLogout: func.isRequired,
};

const defaultProps = {
  marketingBaseUrl: 'https://members.sightbox.com',
  supportBaseUrl: 'https://support.sightbox.com',
};

const Menu = ({ onClose, onClickLogout, marketingBaseUrl, supportBaseUrl }) => (
  <div id="sbdata-header17-mobile-menu">
    <a
      href={`${marketingBaseUrl}/how-do-i-get-eye-exam-and-contact-lenses`}
      className="sbdata-header17-mobile-menu-item"
      data-event="Header Mobile - Our Services"
    >
      Our Service
    </a>

    <a
      href={`${marketingBaseUrl}/reviews-about-sightbox-vision-care-for-contact-lens-wearers/`}
      className="sbdata-header17-mobile-menu-item"
      data-event="Header Mobile - Our Members"
    >
      Our Members
    </a>

    <a
      href={supportBaseUrl}
      className="sbdata-header17-mobile-menu-item"
      data-event="Header Mobile - Questions"
    >
      Questions
    </a>

    <div
      href="/"
      className="sbdata-header17-mobile-menu-item-member-header"
      data-event="Header Mobile - My Account"
    >
      My Account
    </div>

    <Link
      to="/my-account/plans"
      onClick={onClose}
      className="sbdata-header17-mobile-menu-item-member"
      data-event="Header Mobile - My Plans"
    >
      My Plans
    </Link>
    <Link
      to="/my-account/billing"
      onClick={onClose}
      className="sbdata-header17-mobile-menu-item-member"
      data-event="Header Mobile - Account and Billing"
    >
      Account &amp; Billing
    </Link>

    <Link
      to="/my-account/share"
      onClick={onClose}
      className="sbdata-header17-mobile-menu-item-member"
      data-event="Header Mobile - Share and Save"
    >
      Share &amp; Save
    </Link>

    <div id="sbdata-header17-mobile-menu-loginbutton">
      <a
        id="sbdata-header17-mobile-menu-logout-link"
        onClick={onClickLogout}
        href="/sign-out"
      >
        <span id="sbdata-header17-mobile-menu-logout-link-text">LOG OUT</span>
        <div className="clear-both" />
      </a>
    </div>
  </div>
);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
