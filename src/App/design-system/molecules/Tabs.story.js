import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tabs from './Tabs';
import Tab from '../atoms/Tab';

const stories = storiesOf('Molecules/Tabs', module);

stories.addDecorator(withKnobs);

stories.add('simple', () => {
  const active = number('active', 0);
  const onChange = action('tabChange');

  return (
    <Tabs active={active} onChange={onChange}>
      <Tab>First tab</Tab>
      <Tab>Second tab</Tab>
    </Tabs>
  );
});
