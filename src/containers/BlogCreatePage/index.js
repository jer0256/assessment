import { Row, Col } from 'antd';
import { Container } from 'app-style';
import { LAYOUT } from 'app-constants/layout';
import BlogForm from 'containers/BlogForm';
import BlogFormResult from 'components/BlogFormResult';
import useBlogCreateHook from './hook';

function BlogCreatePage(){
  const { isCreateSuccess, createBlog } = useBlogCreateHook();

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30 }}>
          { isCreateSuccess
            ? 
              <BlogFormResult 
                title="Create Success"
                subTitle="Creating of blog successful"
              />
            : 
              <BlogForm 
                title="Create Blog" 
                buttonLabel="Create" 
                action={createBlog}
              />
          }
        </Container>
      </Col>
    </Row>
  );
}



export default BlogCreatePage;