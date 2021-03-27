import style, { css } from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

const Icon = ({ className }) => (<LoadingOutlined className={className} />)

export const primaryTextColor = '#282c34';
export const secondaryTextColor = '#6D6D6D';
export const silverColor = '#c9c9c9';

export const Container = style.div`
  ${props => props.margin && css`
    margin-top: ${props.margin.top || props.margin || 0}px;
    margin-left: ${props.margin.left || props.margin || 0}px;
    margin-right: ${props.margin.right || props.margin || 0}px;
    margin-bottom: ${props.margin.bottom || props.margin || 0}px;
  `}

  ${props => props.align && css`
    text-align: ${props.align};
  `}
`;

export const Title = style.h1`
  color: ${props => props.color || primaryTextColor};
  font-size: calc(1rem + 1vw);
  font-weight: bold;
`;

export const SecondaryTitle = style.h1`
  color: ${props => props.color || primaryTextColor};
  font-size: calc(0.7rem + 1vw);
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: calc(1rem + 1vw);
  }
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
  font-weight: bold;
  color: ${primaryTextColor};
  ${props => props.size && 
    css`font-size: ${props.size}px;`
  }
`;

export const LoadingIcon = style(Icon)`
  font-size: 45px;
  color: ${silverColor};
`;