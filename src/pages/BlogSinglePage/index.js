import { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Row, Col, Skeleton } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'app-style';
import { LAYOUT, ROUTE } from 'app-constants';
import Loader from 'components/Loader';
import Error404Page from 'pages/Error404Page';
import { fetchSingleItem, resetSingleItem } from 'redux/slices/blogSlice';

const { Meta } = Card;

function BlogSinglePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleItem } = useSelector(state => state.blog);
  const { loader } = useSelector(state => state.ui);
  const loading = loader.actions.includes(fetchSingleItem.type);

  useEffect(() => {
    dispatch(fetchSingleItem(id));

    return function() {
      dispatch(resetSingleItem());
    }
  }, [dispatch, id]);
 

  if(loading)
    return <Loader />

  if(!singleItem) 
    return <Error404Page />;

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30 }}>
          <Skeleton 
            active 
            paragraph={{ rows: 8 }}
            loading={loading}
          >
            <Card>
              <Meta
                title={(
                  <div>
                    {singleItem.title}
                    <Link to={ROUTE.BLOG_EDIT_PAGE.replace(':id', id)} key={1}>
                    <Button type="link">
                      <EditOutlined />
                    </Button>
                    </Link>
                  </div>
                )}
                description={moment(singleItem.date_created).fromNow()}
              />
              <Container margin={{ top: 20 }}>
                {singleItem.content}
              </Container>
            </Card>
          </Skeleton>
        </Container>
      </Col>
    </Row>
  )
}


export default BlogSinglePage;