import { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Card, Button,  Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getBlogById } from 'api';
import { Error404, Container } from 'components';

const { Meta } = Card;

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({ 
    title: null, 
    content: null,
    date_created: null
  });

  useEffect(() => {
    
    async function getData() {
      const data = await getBlogById(id);
      
      setBlog(data);
    }

    getData();
  }, [id]);

  return blog 
    ? (
        <Container margin={{ top: 30 }}>
          <Card 
            extra={[
              (
                <Link to={`/blog/edit/${id}`} key={1}>
                  <Button type="link">
                    <EditOutlined />
                  </Button>
                </Link>
              ), 
              <Button type="link" key={2}><DeleteOutlined /></Button>
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={blog.title}
              description={moment(blog.date_created).fromNow()}
            />
            {blog.content}
          </Card>
        </Container>
      )
    : <Error404 />
}


export { SingleBlog };