import style from 'styled-components';
import { WarningOutlined } from '@ant-design/icons';

const Icon = ({ className }) => (<WarningOutlined className={className} />)

export const ModalContent = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 180px;
`;

export const WarningIcon = style(Icon)`
  font-size: 40px;
  color: #faad14;
`;