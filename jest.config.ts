import type { Config } from 'jest';

// Jest 설정 객체 정의 (TypeScript 타입을 명시적으로 지정)
const config: Config = {
  // TypeScript용 프리셋 (ts-jest를 사용해서 TS 파일도 테스트 가능하게 함)
  preset: 'ts-jest',

  // 테스트 환경: jsdom → 브라우저 환경을 시뮬레이션 (DOM 사용 가능)
  testEnvironment: 'jsdom',

  // 인식할 파일 확장자 목록
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // 테스트 파일 패턴: __tests__ 폴더 안의 .test.tsx 또는 .spec.tsx 파일
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],

  // 어떤 파일을 어떤 트랜스파일러로 변환할지 지정
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // ts/tsx 파일은 ts-jest로 변환
  },

  // 테스트 실행 전에 실행할 설정 파일 (예: jest-dom 설정 등)
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // 모듈 import 경로 alias 및 CSS 관련 무시 설정
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // @/components → src/components 로 매핑
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // 스타일 import 무시 (모의 객체로 대체)
  },
};

export default config;
