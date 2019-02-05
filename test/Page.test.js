import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../src/components/Page';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
  ReactDOM.unmountComponentAtNode(div);
});