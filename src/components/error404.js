import { Container, Title, Text, SecondaryText } from 'components/style';

function Error404() {
  return (
    <Container margin={{ top: 50 }}>
      <Title>Page Not Found</Title>
      <Container>
        <SecondaryText>
          We couldn't find what you were looking for.
        </SecondaryText>
      </Container>
        <Container top="20px">
          <Text>
            Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
          </Text>
        </Container>
    </Container>
  );
}

export { Error404 };