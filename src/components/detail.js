import { Card, Button } from 'antd';
import PropTypes from 'prop-types';

function BlogDetail({ blog, onBack }) {
  return (
    <Card 
      title={blog.title}
      extra={<Button type="link" onClick={onBack}>Previous</Button>}
    >
      {blog.content}
    </Card>
  );
}

BlogDetail.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })
};


export default BlogDetail;