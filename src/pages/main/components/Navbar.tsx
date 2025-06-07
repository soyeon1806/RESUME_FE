import '@/styles/Navbar.css';

import { useState } from 'react';

const Navbar = () => {
  // 메뉴 열림 & 닫힘 상태를 저장하는 상태
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 햄버거 버튼 (항상 최상단 고정) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* 메뉴 바 */}
      <div className={`navbar-container ${isOpen ? 'open' : ''}`}>
        <div className="menu">
          {/* 메뉴 항목들 */}
          <span>소개</span>
          <span>학업</span>
          <span>프로젝트</span>
          <span>방명록</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
