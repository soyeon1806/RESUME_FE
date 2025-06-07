// CSS를 모듈처럼 사용할 수 있도록 TypeScript에게 알려줌

// 모든 .css 파일에 대해 적용
declare module '*.css' {
  // { 클래스 명: 해당 클래스명 문자열} 형태의 객체로 반환된다고 정의
  const content: { [className: string]: string };

  // 모듈을 default 형태로 export함
  export default content;
}
