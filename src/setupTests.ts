import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from 'util';

// 💡 브라우저 환경에서는 자동으로 제공되지만, Jest는 기본적으로 Node 환경이기 때문에
// 테스트 중 TextEncoder/TextDecoder를 사용하는 경우 에러가 날 수 있음.
// 따라서 global 객체에 명시적으로 할당해줌.
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
