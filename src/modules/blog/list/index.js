import React, { useState, useEffect } from 'react';
import { List, Card, Input, Row, Col, Avatar, Skeleton, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { getAllBlog } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { 
  updateTotalItems, 
  updateItems, 
  updateLoading 
} from 'redux/slices/blog'
import { ERROR_MESSAGE } from 'globals/constant';
import { Container } from 'components/style';
import Pagination from './pagination';

const { Search } = Input;

function ListBlog() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);
  const { items, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    async function getData() {
      dispatch(updateLoading(true));
      const data = await getAllBlog();
      dispatch(updateLoading(false));

      if(data) {
        dispatch(updateItems(data.items));
        dispatch(updateTotalItems(data.total));
      }
      else {
        message.error(ERROR_MESSAGE);
      }
    }

    getData();

    console.log('list use effect has run');
  }, [dispatch]);

  console.log('list index rendered')

  return (
    <Container margin={{ top: 30 }}>
      <Card 
        title={(
          <Row gutter={[12, 12]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Link to="/blog/create">
                <Button type="primary">Create</Button>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Search 
                onSearch={() => {}} 
                onChange={(evt) => setSearch(evt.target.value)}
                placeholder="Search a Blog" 
                value={search}
              />
            </Col>
          </Row>
        )} 
      >
        <Container justify="flex-end">
          <Pagination />
        </Container>
        <Container margin={{ top: 20 }}>
          <List 
            itemLayout="vertical"
            size="small"
            dataSource={items}
            rowKey={item => item.id}
            locale={{ emptyText: 'There are no blogs yet..' }}
            renderItem={(item) => (
              <List.Item>
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<Link to={`/blog/${item.id}`}>{item.title}</Link>}
                    description={item.content}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Container>
      </Card>
    </Container>
  );
}


export { ListBlog };