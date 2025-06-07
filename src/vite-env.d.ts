// TypeScript가 .png 파일을 import 할 수 있도록 설정
declare module '*.png' {
  // png 파일을 import 하면 문자열(src 경로)로 반환된다고 명시
  const src: string;

  // 해당 경로 문자열을 기본값으로 export
  export default src;
}
