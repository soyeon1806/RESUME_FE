// 경로 관련 유틸 가져오기
// ESM 환경에서는 __filename, __dirname 이 기본적으로 없으니까 직접 만들어주기
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// React 관련 기능을 Vite에 연결해주는 플러그인
import react from '@vitejs/plugin-react';

// Vite의 설정을 정의하는 함수
import { defineConfig } from 'vite';

// __ dirname을 ESM 방식에서도 사용할 수 있도록 직접 정의해주기
const __filename = fileURLToPath(import.meta.url); // 현재 파일의 전체 경로
const __dirname = dirname(__filename); // 현재 파일이 위치한 디렉토리 경로

// Vite 설정
export default defineConfig({
  // 사용할 플러그인 목록
  plugins: [react()],

  // import 경로 관련 설정
  resolve: {
    alias: {
      // @은 'src' 폴더로 매핑되도록 설정
      '@': path.resolve(__dirname, './src'),
    },
  },
});
