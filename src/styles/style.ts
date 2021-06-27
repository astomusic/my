import { css } from 'styled-components';

export const media = {
  Over: (...args) => css`
    @media (min-width: ${1150 + 1}px) {
      ${css.call(null, ...args)}
    }
  `,
};
