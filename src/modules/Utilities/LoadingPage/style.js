import style from 'styled-components';

export const CenteredContainer = style.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  height: calc(100vh - 150px)
`;