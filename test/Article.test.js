import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../src/components/Article';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should throw error when the article number is greater than 6', () => {
  expect(() => {
    shallow(
      <Article articleNumber={7} />
    );
  }).toThrow();
});


it('should throw error when the article number is less than 1', () => {
  expect(() => {
    shallow(
      <Article articleNumber={0} />
    );
  }).toThrow();
});
