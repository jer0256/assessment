import { LoadingOutlined } from '@ant-design/icons';
import { Text, Container } from 'components/style';
import { CenteredContainer } from './style';

export function LoadingPage(){
  return (
    <CenteredContainer>
      <Text>Loading...</Text>
      <Container margin={{ top: 20 }}>
        <LoadingOutlined style={{ fontSize: 50 }}/>
      </Container>
    </CenteredContainer>
  );
}
