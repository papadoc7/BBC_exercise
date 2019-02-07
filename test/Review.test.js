import React from 'react';
import ReactDOM from 'react-dom';
import Review from '../src/components/Review';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Review />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should throw error when the review does not return message', () => {
  expect(() => {
    shallow(
      <Review response={''} />
    );
  }).toThrow();
});
