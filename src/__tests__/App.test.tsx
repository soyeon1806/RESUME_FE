import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

// App 내에서 사용되는 실제 페이지 컴포넌트를 mock 처리함
// - 실제 LoginPage나 MainPage에 의존하지 않고 가짜 컴포넌트를 사용해 테스트 독립성 확보
// - __esModule: true 는 ES 모듈 형식의 default export를 사용할 수 있게 해줌

jest.mock('@/pages/main/MainPage', () => {
  const MainPage = () => <div>Main Page</div>;
  return { __esModule: true, default: MainPage };
});

jest.mock('@/pages/login/LoginPage', () => {
  const LoginPage = () => <div>Login Page</div>;
  return { __esModule: true, default: LoginPage };
});

// 테스트 그룹: App 라우팅 동작에 대한 테스트
describe('App routing', () => {
  // "/" 경로로 접근했을 때 MainPage가 렌더링되는지 테스트
  it('renders MainPage for default route "/"', () => {
    render(
      // MemoryRouter는 가상의 경로 설정이 가능하고, 실제 브라우저 history 없이도 테스트 가능
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    // "Main Page"라는 텍스트가 화면에 렌더링되었는지 확인
    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });

  // "/login" 경로로 접근했을 때 LoginPage가 렌더링되는지 테스트
  it('renders LoginPage for route "/login"', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>,
    );
    // "Login Page"라는 텍스트가 화면에 렌더링되었는지 확인
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
