import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../src/components/Page';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should throw error when the page does not have heading', () => {
  expect(() => {
    shallow(
      <Page heading={''} />
    );
  }).toThrow();
});

it('should throw error when the page does not have title', () => {
  expect(() => {
    shallow(
      <Page title={''} />
    );
  }).toThrow();
});
