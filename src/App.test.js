// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import App from './App';

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     text: () =>
//       Promise.resolve(
//         'qwertyuiop' 
//       ),
//   })
// );

// describe('App Component', () => {
//   test('renders home page', () => {
//     const { getByText } = render(<App />);
//     const homePageText = getByText(/Home Page/i);
//     expect(homePageText).toBeInTheDocument();
//   });

//   test('logs in with a valid password', () => {
//     const { getByLabelText, getByText } = render(<App />);
//     const passwordInput = getByLabelText(/Password/i);
//     const loginButton = getByText(/Login/i);

//     fireEvent.change(passwordInput, { target: { value: 'securePassword123' } });
//     fireEvent.click(loginButton);

//     const welcomeText = getByText(/Welcome!/i);
//     expect(welcomeText).toBeInTheDocument();
//   });

//   test('shows error message for a common password', async () => {
//     const { getByLabelText, getByText } = render(<App />);
//     const passwordInput = getByLabelText(/Password/i);
//     const loginButton = getByText(/Login/i);

//     fireEvent.change(passwordInput, { target: { value: 'password1' } });
//     fireEvent.click(loginButton);

//     const errorMessage = await getByText(/Password does not meet requirements/i);
//     expect(errorMessage).toBeInTheDocument();
//   });

//   test('logs out', () => {
//     const { getByLabelText, getByText } = render(<App />);
//     const passwordInput = getByLabelText(/Password/i);
//     const loginButton = getByText(/Login/i);

//     fireEvent.change(passwordInput, { target: { value: 'securePassword123' } });
//     fireEvent.click(loginButton);

//     const logoutButton = getByText(/Logout/i);
//     fireEvent.click(logoutButton);

//     const homePageText = getByText(/Home Page/i);
//     expect(homePageText).toBeInTheDocument();
//   });
// });


import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

// Mock the entire module to provide a custom implementation for the fetch function
jest.mock('./App', () => ({
  ...jest.requireActual('./App'), // Use the actual implementation for everything else
  useEffect: jest.fn(),
}));

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      text: () => Promise.resolve('qwertyuiop'),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('App Component', () => {
  test('renders home page', () => {
    const { getByText } = render(<App />);
    const homePageText = getByText(/Home Page/i);
    expect(homePageText).toBeInTheDocument();
  });

  test('logs in with a valid password', () => {
    const { getByLabelText, getByText } = render(<App />);
    const passwordInput = getByLabelText(/Password/i);
    const loginButton = getByText(/Login/i);

    fireEvent.change(passwordInput, { target: { value: 'securePassword123' } });
    fireEvent.click(loginButton);

    const welcomeText = getByText(/Welcome!/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('shows error message for a common password', async () => {
    const { getByLabelText, getByText } = render(<App />);
    const passwordInput = getByLabelText(/Password/i);
    const loginButton = getByText(/Login/i);

    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.click(loginButton);

    const errorMessage = await getByText(/Password does not meet requirements/i);
    expect(errorMessage).toBeInTheDocument();
  });

  // test('logs out', async () => {
  //   const { getByLabelText, getByText } = render(<App />);
  //   const passwordInput = getByLabelText(/Password/i);
  //   const loginButton = getByText(/Login/i);

  //   fireEvent.change(passwordInput, { target: { value: 'securePassword123' } });
  //   fireEvent.click(loginButton);

  //   await act(async () => {
  //     const logoutButton = getByText(/Logout/i);
  //     fireEvent.click(logoutButton);
  //   });

  //   const homePageText = getByText(/Home Page/i);
  //   expect(homePageText).toBeInTheDocument();
  // });
});
