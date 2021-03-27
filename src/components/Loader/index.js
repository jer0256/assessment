import { Container, LoadingIcon } from 'app-style';
import { Row, Col, Card } from 'antd';
import { LAYOUT } from 'app-constants';

function Loader() {
  return (
    <Container margin={{ top: 40 }}>
      <Row>
        <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
          <Card>
            <Container margin={{ top: 50, bottom: 50 }} align="center">
              <LoadingIcon />
            </Container>
          </Card>
        </Col> 
      </Row>
    </Container>
  )
}

export default Loader;