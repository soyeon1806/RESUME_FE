import '@/styles/index.css';
import '@/styles/LoginPage.css';

import React, { useState } from 'react';

import LoadingAnimation from '@/pages/main/components/Loading';
import LoginForm from '@/pages/login/components/LoginForm';

// 함수형 컴포넌트 타입 정의 (React.FC)
const LoginPage: React.FC = () => {
  // 로딩 중 여부를 판단하는 상태값
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="login-page">
      {/* 로딩 중일 때는 애니메이션을 보여주고, 아니면 로그인 폼을 표시 */}
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <LoginForm setIsLoading={setIsLoading} />
      )}
    </div>
  );
};

export default LoginPage;
