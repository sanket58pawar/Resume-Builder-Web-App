import React from 'react';
import { render } from '@testing-library/react';
import ResumeApp from './ResumeApp';

test('renders learn react link', () => {
  const { getByText } = render(<ResumeApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
