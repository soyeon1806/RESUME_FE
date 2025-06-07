import React, { useEffect, useState } from 'react';
import '@/styles/Loading.css';

const LoadingAnimation: React.FC = () => {
  // 로딩 중인지 여부를 관리하는 상태
  const [isLoading, setIsLoading] = useState(true);

  //현재 강조할 글자의 인덱스를 관리하는 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 표시할 글자 배열
  const letters = ['s', 'o', 'y', 'e', 'o', 'n'];

  // 로딩 애니메이션 효과를 위한 useEffect
  useEffect(() => {
    // 로딩이 완료됐으면 애니메이션 중단
    if (!isLoading) return;

    // 일정 시간 간격으로 activeIndex를 증가시킴
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev + 1 >= letters.length) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300); // 잠깐 멈췄다가 로딩 종료
        }
        return prev + 1;
      });
    }, 300); // 0.3초 마다 글자 하나씩 강조

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [isLoading]);

  // 로딩이 끝나면 메인 콘텐츠 표시
  if (!isLoading) {
    return (
      <div>
        <h1>Main Content 🎉</h1>
      </div>
    );
  }

  // 로딩 중일 때 표시할 애니메이션 UI
  return (
    <div className="loading-container">
      {/* dot이 글자 위에서 움직이며 강조 위치를 시각적으로 표시 */}
      <div className="dot" style={{ left: `${activeIndex * 2}em` }} />

      {/* 글자들을 나열하고, 현재 인덱스인 글자에만 active 클래스 부여 */}
      <div className="letters">
        {letters.map((char, index) => (
          <span
            key={index}
            className={`letter ${index === activeIndex ? 'active' : ''}`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
