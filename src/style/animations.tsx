import { keyframes } from '@emotion/react';

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default smoothAppear;
