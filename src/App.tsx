import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';

const App = () => {
  // 마우스 클릭 상태를 저장할 ref (렌더링과 무관한 상태 추적용)
  const isMouseDown = useRef(false);

  useEffect(() => {
    // 마우스를 누르면 드래그 시작 상태로 설정
    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    // 마우스를 떼면 드래그 상태 해제 및 커서 스타일 제거
    const handleMouseUp = () => {
      isMouseDown.current = false;
      document.body.classList.remove('text-selecting');
    };

    // 마우스 이동 중 텍스트가 선택되었는지 확인하여 스타일 적용
    const handleMouseMove = () => {
      if (!isMouseDown.current) return;

      const selectedText = window.getSelection()?.toString() ?? '';
      if (selectedText.trim().length > 0) {
        // 글자가 선택되고 있다면 test-selecting CSS 클래스를 추가
        document.body.classList.add('text-selecting');
      } else {
        // 선택 중인 글자가 없다면 클래스 제거
        document.body.classList.remove('text-selecting');
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트 언마운트 시 이벤트 정리 (메모리 누수 방지)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // 최초 1회만 실행

  return (
    // 라우팅 설정: 현재 URL에 따라 페이지를 보여줌
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
