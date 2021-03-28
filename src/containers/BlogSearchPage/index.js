import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from 'redux/slices/blogSlice';
import { useLocation } from 'react-router-dom';
import { LAYOUT } from 'app-constants/layout';
import { Container } from 'app-style';
import Loader from 'components/Loading';
import NoResult from './EmptyResult';
import BlogList from '../BlogHomePage/BlogList';

function BlogSearchPage(){
  const dispatch = useDispatch();
  const location = useLocation();
  const { searchedBlogs } = useSelector(state => state.blog);
  const { loader } = useSelector(state => state.ui);
  const loading = loader.actions.includes(searchedBlogs.type);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    dispatch(searchItems({
      keyword: query.get('q'), 
      items: searchedBlogs.itemPerPage,
      page: 1
    }));

    console.log('BlogSearchPage useeffect has triggered');
  }, [dispatch, location.search, searchedBlogs.itemPerPage])

  if(loading)
    return <Loader />

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 40 }}>
          <Card>
            { searchedBlogs.items.length > 0
              ? <BlogList items={searchedBlogs.items} />
              : <NoResult />
            }
          </Card>
        </Container>
      </Col> 
    </Row>
  );
}

export default BlogSearchPage;