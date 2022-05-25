import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // getByText can be used to find all elements in the rendered virtual DOM that have a text node with text content matching the given regular expression
  const { getByText } = render(<App />);
   // to determine whether the text "learn react" appears anywhere in the virtual DOM rendered by the App /> component
  const linkElement = getByText(/learn react/i);
   // Jest's expect function is used to assert that this text exists in the document
  // The method toBeInTheDocument of Jest's expect function is actually provided by another library that sits on top of React Testing Library, jest-dom
  expect(linkElement).toBeInTheDocument();
 
});
