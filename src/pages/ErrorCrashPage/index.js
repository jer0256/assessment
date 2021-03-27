import { Row, Col } from 'antd';
import { Container, Title, SecondaryText } from 'app-style';
import { LAYOUT } from 'app-constants/layout';

export default function ErrorCrashPage() {
  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 50 }}>
          <Title>Page Crashed</Title>
          <Container>
            <SecondaryText>
              The page has experienced unexpected error.
            </SecondaryText>
          </Container>
        </Container>
      </Col>
    </Row>
  );
}
