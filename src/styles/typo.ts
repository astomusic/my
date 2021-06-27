import styled from 'styled-components';
import { media } from 'root/styles/style';

type AvailableSize = '10' | '4' | '3' | '2';

interface TextProps {
  size?: AvailableSize;
  weight?: string;
  color?: string;
  padding?: string;
}

const getSize = (target: AvailableSize, isOver?: boolean) => {
  switch (target) {
    case '10':
      return isOver ? '115px' : '10vw';
    case '4':
      return isOver ? '46px' : '4vw';
    case '3':
      return isOver ? '35px' : '3vw';
    case '2':
      return isOver ? '23px' : '2vw';
    default:
      return isOver ? '23px' : '2vw';
  }
}

const Text = styled.div<TextProps>`
  font-size: ${({ size }) => `${getSize(size)}`};
  ${({ weight }) => `font-weight: ${weight}`};
  ${({ color }) => `color: ${color}`};
  ${({ padding }) => `padding: ${padding}`};
  line-height: 1.2;
  ${media.Over`
    font-size: ${({ size }) => `${getSize(size, true)}`};
  `}
`;

export { Text };