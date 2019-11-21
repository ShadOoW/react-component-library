import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { ExampleButton } from '../src/ExampleButton/button';

const stories = storiesOf('Button', module);

stories.add(
  'with text',
  (() => (
    <ExampleButton
      text={text('text', 'Hello')}
    />
  )),
);

stories.add(
  'with emoji',
  (() => (
    <ExampleButton
      text={text('text', '👻 👽 🤖 💩!')}
    />
  )),
);
