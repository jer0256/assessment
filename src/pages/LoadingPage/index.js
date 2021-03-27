import { Text, Container, LoadingIcon } from 'app-style';
import { CenteredContainer } from './style';

export default function LoadingPage(){
  return (
    <CenteredContainer>
      <Text>Loading...</Text>
      <Container margin={{ top: 20 }}>
        <LoadingIcon />
      </Container>
    </CenteredContainer>
  );
}
