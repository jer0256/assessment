import { Row, Col } from 'antd';
import { Container } from 'app-style';
import { LAYOUT } from 'app-constants';
import BlogForm from 'components/BlogForm';
import BlogFormResult from 'components/BlogFormResult';
import useBlogEditHook from './hook';

function BlogEditPage(){
  const { isUpdateSuccess, updateBlog } = useBlogEditHook();

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30 }}>
          { isUpdateSuccess
            ? 
              <BlogFormResult 
                title="Update Success"
                subTitle="Updating of blog successful"
              />
            : 
              <BlogForm 
                title="Update Blog" 
                buttonLabel="Update" 
                action={updateBlog}
              />
          }
        </Container>
      </Col>
    </Row>
  );
}



export default BlogEditPage;