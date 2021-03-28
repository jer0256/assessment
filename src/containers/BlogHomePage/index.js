import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LAYOUT } from 'app-constants/layout';
import { fetchAllItems, resetAllItems } from 'redux/slices/blogSlice';
import { Container } from 'app-style';
import BlogList from './BlogList';
import SearchForm from './SearchForm';
import Pagination from './Pagination';



function BlogHomePage() {
  const dispatch = useDispatch();
  const { allBlogs } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(fetchAllItems());

    console.log('use effect blog home page used')

    return function() {
      dispatch(resetAllItems());
    }
  }, [dispatch]);

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30, bottom: 30 }}>
          <SearchForm />
          <Container margin={{ top: 20 }}>
            <Card>
              <Container justify="flex-end">
                <Pagination />
              </Container>
              <Container margin={{ top: 20 }}>
                <BlogList items={allBlogs.items} />
              </Container>
            </Card>
          </Container>
        </Container>
      </Col>
    </Row>
  );
}


export default BlogHomePage;