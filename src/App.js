import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Error404Page from 'components/Error404';
import ErrorCrashPage from 'containers/ErrorCrashPage';
import { Layout } from 'antd';
import { Title } from 'app-style';
import { ROUTE } from 'app-constants/route';
import ErrorHandler from 'components/ErrorHandler';

import './App.css';

const BlogHomePage = React.lazy(() => import('containers/BlogHomePage'));
const BlogSinglePage = React.lazy(() => import('containers/BlogSinglePage'));
const BlogEditPage = React.lazy(() => import('containers/BlogEditPage'));
const BlogCreatePage = React.lazy(() => import('containers/BlogCreatePage'));
const BlogSearchPage = React.lazy(() => import('containers/BlogSearchPage'));

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout-container">
        <Header>
          <Link to={ROUTE.BLOG_HOME_PAGE}>
            <Title color="#FFFFFF">BLOGGerist</Title>
          </Link>
        </Header>
        <Content>
          <ErrorHandler>
            <React.Suspense fallback={null}>
              <Switch>
                <Route exact path={ROUTE.HOME}>
                  <Redirect to={ROUTE.BLOG_HOME_PAGE} />
                </Route>
                <Route exact path={ROUTE.BLOG_CREATE_PAGE} component={BlogCreatePage} />
                <Route exact path={ROUTE.BLOG_EDIT_PAGE} component={BlogEditPage} />
                <Route exact path={ROUTE.BLOG_SEARCH_PAGE} component={BlogSearchPage} /> 
                <Route exact path={ROUTE.BLOG_SINGLE_PAGE} component={BlogSinglePage} /> 
                <Route exact path={ROUTE.BLOG_HOME_PAGE} component={BlogHomePage} /> 
                <Route exact path={ROUTE.ERROR} component={ErrorCrashPage} />
                <Route path="*" component={Error404Page} />
              </Switch>
            </React.Suspense>
          </ErrorHandler>
        </Content>
      </Layout>
    </Router>
  );
}


export default App;
