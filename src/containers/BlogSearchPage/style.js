import style from 'styled-components';
import { silverColor } from 'app-style';
import { FileSearchOutlined } from '@ant-design/icons';

const Icon = ({ className }) => (<FileSearchOutlined className={className} />)

export const NoResultIcon = style(Icon)`
  font-size: calc(5rem + 1vw);
  color: ${silverColor}
`;