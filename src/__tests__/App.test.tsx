import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

jest.mock('@/pages/main/MainPage', () => {
  const MainPage = () => <div>Main Page</div>;
  return { __esModule: true, default: MainPage };
});

jest.mock('@/pages/login/LoginPage', () => {
  const LoginPage = () => <div>Login Page</div>;
  return { __esModule: true, default: LoginPage };
});

describe('App routing', () => {
  it('renders MainPage for default route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });

  it('renders LoginPage for route "/login"', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
