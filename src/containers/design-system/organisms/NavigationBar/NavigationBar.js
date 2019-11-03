import React, { useState } from 'react';
import styled from 'styled-components';
import { arrayOf, shape, string, func } from 'prop-types';

import { Tabs, Menu } from '../../molecules';
import { Box, Tab, Icon, MenuItem } from '../../atoms';

import { ReactComponent as Logo } from '../../assets/svg/logo_sightbox.svg';

import ShareSaveCallout from './ShareSaveCallout';
import MemberName from './MemberName';

const SUPPORT_URL = 'https://support.sightbox.com';

const propTypes = {
  onClickPage: func.isRequired,
  tabs: arrayOf(
    shape({
      path: string,
      title: string,
    }),
  ),
  menuItems: arrayOf(
    shape({
      title: string,
      onClick: func,
    }),
  ),
  currentPath: string,
  memberFirstName: string,
};

const defaultProps = {
  tabs: [],
  menuItems: [],
  currentPath: '',
  memberFirstName: null,
};

const NavigationInner = styled.div(() => ({
  paddingLeft: '18px',
  paddingRight: '18px',
  maxWidth: '1440px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
}));

const SupportButton = styled.a(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '2px',
}));

const renderTabs = tabs =>
  tabs.map(({ title, path }) => (
    <Tab href={path} id={path}>
      {title}
    </Tab>
  ));

const DropdownTarget = styled.button(({ theme, dropdownOpen }) => ({
  cursor: 'pointer',
  border: 'none',
  padding: '8px',
  borderRadius: '2px',
  marginLeft: '5px',
  display: 'flex',
  backgroundColor: dropdownOpen ? theme.colors.hover : 'transparent',
  '&:hover': {
    backgroundColor: theme.colors.hover,
  },
}));

const SettingsButton = styled.button(() => ({
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
}));

const HoverIcon = styled(Icon)(({ theme }) => ({
  '&:hover': {
    '> path': { fill: theme.colors.illustrationBlue },
  },
}));

const NavigationBar = ({
  tabs,
  currentPath,
  onClickPage,
  memberFirstName,
  menuItems,
}) => {
  const [dropdownAnchor, setDropdownAnchor] = useState(null);

  const onClickMenuItem = onClick => e => {
    // Hide the dropdown first
    setDropdownAnchor(null);

    onClick(e);
  };

  const onClickLogo = e => {
    e.preventDefault();

    onClickPage('/');
  };

  const openDropdown = e => {
    setDropdownAnchor(e.currentTarget);
  };

  return (
    <Box mb={[10, 20]} data-testid="navigationBar">
      <Box
        borderBottomColor="gray2"
        borderBottomStyle="solid"
        borderBottomWidth="2px"
      >
        <NavigationInner>
          <Box flex="1">
            <Box display="flex" alignItems="center">
              <Box mr="36px" mt="21px" mb="15px">
                <a role="button" onClick={onClickLogo} href="/">
                  <Logo width="130px" />
                </a>
              </Box>

              <Box display={['none', 'none', 'block']}>
                <Tabs size="large" onChange={onClickPage} active={currentPath}>
                  {renderTabs(tabs)}
                </Tabs>
              </Box>
            </Box>
          </Box>

          <Box flex="1">
            <Box display="flex" justifyContent="flex-end">
              <Box mr="5px" ml="5px">
                <Tabs onChange={onClickPage} active={currentPath}>
                  <Tab
                    id="/my-account/share"
                    href="/my-account/share"
                    ml={0}
                    mr={0}
                    padding="21px 0px"
                  >
                    <ShareSaveCallout>
                      <Box display="flex" alignItems="center" height="100%">
                        <HoverIcon name="GiftBox" />
                      </Box>
                    </ShareSaveCallout>
                  </Tab>
                </Tabs>
              </Box>

              <Box
                mr="5px"
                ml="5px"
                role="button"
                display="flex"
                alignItems="center"
              >
                <SupportButton
                  href={SUPPORT_URL}
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HoverIcon name="QuestionMark" />
                </SupportButton>
              </Box>

              <Box
                ml="5px"
                display={['none', 'flex']}
                alignItems="center"
                fontFamily="sofia"
              >
                <MemberName memberFirstName={memberFirstName} />
                <DropdownTarget
                  type="button"
                  onClick={openDropdown}
                  dropdownOpen={!!dropdownAnchor}
                >
                  <Icon name="ChevronDown" width="14px" height="14px" />
                </DropdownTarget>
              </Box>

              <Box
                display={['flex', 'none']}
                mr="5px"
                ml="5px"
                border="none"
                alignItems="center"
                onClick={openDropdown}
              >
                <SettingsButton type="button" onClick={openDropdown}>
                  <Icon name="Settings" />
                </SettingsButton>
              </Box>
            </Box>
          </Box>
        </NavigationInner>
      </Box>

      <Box
        display={['block', 'block', 'none']}
        borderBottomColor="gray2"
        borderBottomStyle="solid"
        borderBottomWidth="2px"
      >
        <NavigationInner>
          <Box>
            <Tabs size="small" onChange={onClickPage} active={currentPath}>
              {renderTabs(tabs)}
            </Tabs>
          </Box>
        </NavigationInner>
      </Box>

      <Box height="24px" backgroundColor="shadow" />
      <Menu
        anchorEl={dropdownAnchor}
        open={!!dropdownAnchor}
        onClose={() => setDropdownAnchor(null)}
      >
        {menuItems.map(({ title, onClick }) => (
          <MenuItem onClick={onClickMenuItem(onClick)}>{title}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
