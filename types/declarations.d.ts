// CSS를 모듈처럼 사용할 수 있도록 TypeScript에게 알려줌
declare module '*.css' {
  // { 클래스 명: 해당 클래스명 문자열} 형태의 객체로 반환된다고 정의
  const content: { [className: string]: string };

  // 모듈을 default 형태로 export함
  export default content;
}

// .png 파일을 import 할 수 있도록 설정
declare module '*.png' {
  // png 파일을 import 하면 문자열(src 경로)로 반환된다고 명시
  const src: string;

  // 해당 경로 문자열을 기본값으로 export
  export default src;
}

// JPG 파일도 동일하게 처리
declare module '*.jpg' {
  const src: string;
  export default src;
}

// JPEG 파일도 동일하게 처리
declare module '*.jpeg' {
  const src: string;
  export default src;
}

// SVG 파일도 문자열로 인식
declare module '*.svg' {
  const src: string;
  export default src;
}
