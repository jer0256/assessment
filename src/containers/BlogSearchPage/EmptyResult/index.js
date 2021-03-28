import { Container, SecondaryTitle, SecondaryText } from 'app-style';
import { NoResultIcon } from '../style';

function EmptyResult(){
  return (
    <Container align="center" margin={50}>
      <Container>
        <SecondaryTitle size={22}>Search No Result</SecondaryTitle> 
      </Container>
      <Container>
        <SecondaryText>We're sorry. We cannot find any matches for your search term. </SecondaryText>
      </Container>
      <Container margin={{ top: 40 }}>
        <NoResultIcon />
      </Container>
    </Container>
  );
}

export default EmptyResult;