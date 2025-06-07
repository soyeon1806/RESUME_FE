import '@/styles/LoginForm.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import profileImg from '@/assets/profile-img.png';

// 컴포넌트가 받을 props 타입 정의
type LoginFormProps = {
  // 부모 컴포넌트에서 전달받은 로딩 상태 변경 함수
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// 함수형 컴포넌트 정의
const LoginForm: React.FC<LoginFormProps> = ({ setIsLoading }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 hook 사용

  // 로그인 버튼 클릭 시 실행될 함수
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 막기
    setIsLoading(true); // 로딩 애니메이션 활성화

    // 2초 후 메인 페이지로 이동
    setTimeout(() => {
      navigate('/main'); // SPA 방식으로 이동 (새로고침 없음)
    }, 2000);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      {/* 관리자 프로필 이미지 */}
      <img src={profileImg} alt="프로필" className="profile-img" />

      {/* 로그인 타이틀 */}
      <h2>관리자 로그인</h2>

      {/* 아이디 입력 필드 */}
      <input type="text" placeholder="아이디" className="login-input" />

      {/* 비밀번호 입력 필드 */}
      <input type="password" placeholder="비밀번호" className="login-input" />

      {/* 로그인 버튼 */}
      <button type="submit" className="login-button">
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
