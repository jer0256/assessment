import { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Row, Col, Skeleton } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getBlogById } from 'api';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'components';
import { LAYOUT, ROUTE } from 'appconstants';
import { Error404Page } from 'modules/Utilities';
import { setCurrentItem } from 'redux/slices/blogSlice';

const { Meta } = Card;

function BlogSinglePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentItem } = useSelector(state => state.blog);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getBlogById(id);
      
      dispatch(setCurrentItem(data));
      setLoading(false);
    }

    console.log('use effect single page has been triggered');
    getData();
  }, [dispatch, id]);

  return currentItem 
    ? (
        <Row>
          <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
            <Container margin={{ top: 30 }}>
              <Skeleton 
                active 
                paragraph={{ rows: 8 }}
                loading={loading}
              >
                <Card 
                  extra={[
                    (
                      <Link to={ROUTE.BLOG_EDIT_PAGE.replace(':id', id)} key={1}>
                        <Button type="link">
                          <EditOutlined />
                        </Button>
                      </Link>
                    ), 
                    <Button type="link" key={2}><DeleteOutlined /></Button>
                  ]}
                >
                  <Meta
                    avatar={<Skeleton.Image />}
                    title={currentItem.title}
                    description={moment(currentItem.date_created).fromNow()}
                  />
                  <Container margin={{ top: 20 }}>
                    {currentItem.content}
                  </Container>
                </Card>
              </Skeleton>
            </Container>
          </Col>
        </Row>
      )
    : <Error404Page />
}


export default BlogSinglePage;