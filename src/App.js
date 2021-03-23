import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Error404Page, LoadingPage } from 'modules/Utilities';
import { Layout } from 'antd';
import { Title } from 'components';
import { ROUTE } from 'appconstants/route';

import './App.css';

const BlogHomePage = React.lazy(() => import('modules/Blog/BlogHomePage'));
const BlogSinglePage = React.lazy(() => import('modules/Blog/BlogSinglePage'));
const BlogFormPage = React.lazy(() => import('modules/Blog/BlogFormPage'));

const { Header, Content } = Layout;

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
          <React.Suspense fallback={<LoadingPage />}>
            <Switch>
              <Route exact path={ROUTE.HOME}>
                <Redirect to={ROUTE.BLOG_HOME_PAGE} />
              </Route>
              <Route exact path={ROUTE.BLOG_HOME_PAGE} component={BlogHomePage} /> 
              <Route exact path={ROUTE.BLOG_SINGLE_PAGE} component={BlogSinglePage} /> 
              <Route exact path={ROUTE.BLOG_CREATE_PAGE} component={() => <BlogFormPage type="CREATE_BLOG" />} />
              <Route exact path={ROUTE.BLOG_EDIT_PAGE} component={() => <BlogFormPage type="EDIT_BLOG" />} />
              <Route path="*" component={Error404Page} />
            </Switch>
          </React.Suspense>
        </Content>
      </Layout>
    </Router>
  );
}


export default App;
