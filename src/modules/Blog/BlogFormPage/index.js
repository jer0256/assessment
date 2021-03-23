import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setCurrentAction, 
  setCreateSuccess,
  setUpdateSuccess
} from 'redux/slices/blogSlice';
import { Row, Col } from 'antd';
import { Container } from 'components';
import { LAYOUT } from 'appconstants';
import BogDetail from './BlogDetail';
import Result from './Result';

function BlogFormPage({ type }){
  const dispatch = useDispatch();
  const { updateSuccess } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(setCurrentAction(type));

    console.log('Blog Form Page index useffect has triggered', type)
  }, [dispatch, type]);

  useEffect(() => {
    return function cleanup() {
      console.log('Blog Form Page clean up has triggered. COMPONENT UNMOUNTED');

      dispatch(setCreateSuccess(false));
      dispatch(setUpdateSuccess(false));
    }
  }, [dispatch])

  console.log('BlogForm has rendered')

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 30 }}>
          {
            updateSuccess 
            ? <Result type={type} />
            : <BogDetail type={type} />
          }
        </Container>
      </Col>
    </Row>
  );
}

BlogFormPage.propTypes = {
  type: PropTypes.string.isRequired
};


export default BlogFormPage;