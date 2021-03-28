import PropTypes from 'prop-types';
import { Result, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'app-constants/route';

function BlogFormResult({ title, subTitle }) {
  const history = useHistory();

  return(
    <Card>
      <Result
        status="success"
        title={title}
        subTitle={subTitle}
        extra={(
          <Button type="primary" onClick={() => history.push(ROUTE.BLOG_HOME_PAGE)}>
            Go to Homepage
          </Button>
        )}
      />
    </Card>
  );
}

BlogFormResult.propTypes = {
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.string.isRequired
};

export default BlogFormResult;