import { List, Avatar, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function BlogList(){
  const { items, loading } = useSelector(state => state.blog);

  return (
    <List 
      itemLayout="vertical"
      size="small"
      dataSource={items}
      rowKey={item => item.id}
      locale={{ emptyText: 'There are no items to show..' }}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={<Skeleton.Image />}
              title={<Link to={`/blog/${item.id}`}>{item.title}</Link>}
              description={item.content}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}



export default BlogList;