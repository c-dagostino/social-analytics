import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import NavigationBar from './NavigationBar';

const stories = storiesOf('Organisms/NavigationBar', module);

stories.addDecorator(withKnobs);

stories.add('simple', () => {
  const currentPath = text('activePath', '/payments');

  return (
    <NavigationBar
      currentPath={currentPath}
      pages={[
        { title: 'Profile', path: '/profile' },
        { title: 'Payments', path: '/payments' },
      ]}
    />
  );
});
