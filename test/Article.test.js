import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../src/components/Article';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});