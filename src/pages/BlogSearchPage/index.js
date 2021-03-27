import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from 'redux/slices/blogSlice';
import { useLocation } from 'react-router-dom';
import { LAYOUT } from 'app-constants';
import { Container } from 'app-style';
import Loader from 'components/Loader';
import NoResult from './NoResult';
import BlogList from '../BlogHomePage/BlogList';

function BlogSearchPage(){
  const dispatch = useDispatch();
  const location = useLocation();
  const { searchedItems } = useSelector(state => state.blog);
  const { loader } = useSelector(state => state.ui);
  const loading = loader.actions.includes(searchItems.type);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    dispatch(searchItems({
      keyword: query.get('q'), 
      items: searchedItems.itemPerPage,
      page: 1
    }));

    console.log('BlogSearchPage useeffect has triggered');
  }, [dispatch, location.search, searchedItems.itemPerPage])

  if(loading)
    return <Loader />

  return (
    <Row>
      <Col {...LAYOUT.DEFAULT_PAGE_WIDTH}>
        <Container margin={{ top: 40 }}>
          <Card>
            { searchedItems.items.length > 0
              ? <BlogList items={searchedItems.items} />
              : <NoResult />
            }
          </Card>
        </Container>
      </Col> 
    </Row>
  );
}

export default BlogSearchPage;