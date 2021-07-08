/**
 * @jest-environment jsdom
 */
//testing Login Page
import * as React from 'react';
// import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from '../../client/components/loginPage.js';

test('testing input fields in Login Page', () => {
//   const element = document.getElementById('root');
  const { getByLabelText } = render(<LoginPage />);

  getByLabelText('email');
//   getByLabelText('hello');
})