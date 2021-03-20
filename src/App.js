import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { Title, Error404 } from 'components';
import { ListBlog, SingleBlog, FormBlog } from 'modules/blog';

import './App.css';

const { Header, Content } = Layout;

const colLayout = {
  xs: { offset: 1, span: 22 },
  sm: { offset: 1, span: 22 },
  md: { offset: 1, span: 16 },
  lg: { offset: 1, span: 12 },
  xl: { offset: 1, span: 12 },
};

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Link to="/blog">
            <Title color="#FFFFFF">BLOGGerist</Title>
          </Link>
        </Header>
        <Content>
          <Row>
            <Col {...colLayout}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/blog" />
                </Route>
                <Route exact path="/blog">
                  {process.env.REACT_APP_API_HOST}
                  <ListBlog />
                </Route>
                <Route exact path="/blog/create">
                  <FormBlog action="create" />
                </Route>
                <Route exact path="/blog/:id">
                  <SingleBlog />
                </Route>
                <Route exact path="/blog/edit/:id">
                  <FormBlog action="update" />
                </Route>
                <Route path="/invalid">
                  <Error404 />
                </Route>
                <Route path="*">
                  <Error404 />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Router>
  );
}


export default App;
