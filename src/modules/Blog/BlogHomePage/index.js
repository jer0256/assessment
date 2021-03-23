import React, { useEffect } from 'react';
import { Card, Row, Col, message } from 'antd';
import { getAllBlog } from 'api';
import { useDispatch } from 'react-redux';
import { ERROR_MESSAGE, LAYOUT } from 'appconstants';
import { setItems } from 'redux/slices/blogSlice';
import { Container } from 'components/style';
import SearchForm from './SearchForm';
import Pagination from './Pagination';
import BlogList from './BlogList';


function BlogHomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await getAllBlog();

      if(data) {
        dispatch(setItems({
          items: data.items,
          itemTotal: data.total
        }));
      }
      else {
        message.error(ERROR_MESSAGE);
      }
    }

    getData();
  }, [dispatch]);

  console.log('component rendered')

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30, bottom: 30 }}>
          <Card title={<SearchForm />}>
            <Container justify="flex-end">
              <Pagination />
            </Container>
            <Container margin={{ top: 20 }}>
              <BlogList />
            </Container>
          </Card>
        </Container>
      </Col>
    </Row>
  );
}


export default BlogHomePage;