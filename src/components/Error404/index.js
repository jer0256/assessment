import { Row, Col } from 'antd';
import { Container, Title, Text, SecondaryText } from 'app-style';
import { LAYOUT } from 'app-constants/layout';

export default function Error404Page() {
  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 50 }}>
          <Title>Page Not Found</Title>
          <Container>
            <SecondaryText>
              We couldn't find what you were looking for.
            </SecondaryText>
          </Container>
          <Container margin={{ top: 20 }}>
            <Text>
              Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
            </Text>
          </Container>
        </Container>
      </Col>
    </Row>
  );
}
