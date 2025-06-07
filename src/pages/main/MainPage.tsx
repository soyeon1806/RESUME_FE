import React from 'react';

import Navbar from '@/pages/main/components/Navbar';
import backgroundImg from '@/assets/background-img.png';

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        // 전체 배경 설정
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover', // 이미지가 화면을 꽉 채우도록
        backgroundPosition: 'center', // 이미지 중앙 정렬
        height: '100vh', // 화면 전체 높이
        padding: '4rem 2rem', // 내부 여백
        boxSizing: 'border-box',
        position: 'relative', //버튼 위치 기준 설정
      }}
    >
      {/* 관리자 로그인 버튼 */}
      <button
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '0.4rem 0.8rem',
          backgroundColor: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        // 클릭 시 로그인 페이지로 이동
        onClick={() => (window.location.href = '/login')}
      >
        관리자 로그인
      </button>

      {/* 메인 콘텐츠 박스 */}
      <div
        style={{
          backgroundColor: '#fefaf5',
          width: '80vw',
          margin: '0 auto',
          borderRadius: '16px',
          overflow: 'hidden',
          minHeight: '85vh',
        }}
      >
        {/* 상단 네비게이션 바 */}
        <Navbar />

        {/* 실제 콘텐츠가 들어갈 자리 */}
        <div style={{ padding: '2rem', textAlign: 'center', color: '#aaa' }}>
          메인 콘텐츠 영역 (작성 중...)
        </div>
      </div>
    </div>
  );
};

export default MainPage;
