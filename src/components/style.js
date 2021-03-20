import style, { css } from 'styled-components';

const primaryTextColor = '#282c34';
const secondaryTextColor = '#6D6D6D';

export const Container = style.div`
  ${props => props.margin && css`
    margin-top: ${props.margin.top || 0}px;
    margin-left: ${props.margin.left || 0}px;
    margin-right: ${props.margin.right || 0}px;
    margin-bottom: ${props.margin.bottom || 0}px;
  `}

  ${props => props.justify && css`
    display: flex;
    justify-content: ${props.justify}
  `}
`;

export const Title = style.h1`
  color: ${props => props.color || primaryTextColor};
  font-size: calc(1rem + 1vw);
  font-weight: bold;
`;

export const Text = style.span`
  color: ${primaryTextColor};
  ${props => props.size && 
    css`font-size: ${props.size}`
  }
`;

export const SecondaryText = style.span`
  color: ${secondaryTextColor};
  ${props => props.size && 
    css`font-size: ${props.size};`
  }
`;

export const BoldText = style.span`
  color: ${primaryTextColor};
  ${props => props.size && 
    css`font-size: ${props.size};`
  }
`;