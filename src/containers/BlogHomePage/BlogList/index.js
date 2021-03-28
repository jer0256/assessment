import { List, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container, LoadingIcon } from 'app-style';
import { useSelector } from 'react-redux';
import { fetchAllItemsPagination, fetchAllItems } from 'redux/slices/blogSlice';

function BlogList({ items }){
  const { loader } = useSelector(state => state.ui);
  const initloading = loader.actions.includes(fetchAllItems.type);
  const paginationloading = loader.actions.includes(fetchAllItemsPagination.type);

  if(items.length === 0 && !initloading)
    return null;

  if(items.length === 0 && initloading)
    return (
      <Container align="center">
        <LoadingIcon />
      </Container>
    );

  return (
    <List 
      itemLayout="vertical"
      size="small"
      dataSource={items}
      rowKey={item => item.id}
      renderItem={(item) => (
        <List.Item>
          <Container margin={{ top: 30 }}>
            <Skeleton title={false} loading={paginationloading} active>
              <List.Item.Meta
                title={<Link to={`/blog/${item.id}`}>{item.title}</Link>}
                description={moment(item.date_created).fromNow()}
              />
              {item.content}
            </Skeleton>
          </Container>
        </List.Item>
      )}
    />
  );
}

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired
  })).isRequired
};

export default BlogList;