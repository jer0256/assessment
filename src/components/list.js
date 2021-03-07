import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, Card, Typography, Button, Modal, Input, Select } from 'antd';

const { Text } = Typography;
const { Search } = Input;

function BlogList(props){
  const { data, onDelete, onView, onUpdate, onPopulate, onClear } = props; 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(-1);
  const [blogs, setBlogs] = useState([]);

  function onClickDelete(blog) {
    console.log(blog)
    setSelectedBlog(blog);
    setModalVisible(true);
  }

  function onConfirmDelete() {
    onDelete(selectedBlog.id);
    setModalVisible(false);
  }

  function onSort(category) {
    const sortedData = data.sort((a, b) => a[category] - b[category]);

    console.log(sortedData);

    setBlogs(sortedData);
  }

  function onSearch(keyword) {
    const searchedWord = keyword.toUpperCase();

    setBlogs(data.filter(item => {
      const { title, content } = item;

      return title.toUpperCase().includes(searchedWord) 
        || content.toUpperCase().includes(searchedWord);
    }));
  }

  useEffect(() => {
    setBlogs(data);

    console.log('list use effect has run');
  }, [data]);

  const DeleteAction = (blog) => (
    <Button 
      type="link" 
      style={{ color: '#F81D22' }}
      onClick={() => onClickDelete(blog)}
    >
      Delete
    </Button>
  );

  const ViewAction = ({ blog }) => (
    <Button type="link" onClick={() => onView(blog.id)}>
      View
    </Button>
  );

  const UpdateAction = ({ blog }) => (
    <Button type="link" onClick={() => onUpdate(blog.id)}>
      Edit 
    </Button>
  );


  return (
    
    <div>
      <Modal
        visible={modalVisible}
        onOk={onConfirmDelete}
        onCancel={() => setModalVisible(false)}
        okText="Yes"
        cancelText="No"
      >
        Do you want to delete <b>{selectedBlog.title}</b>?
      </Modal>
      <div style={{ marginBottom: 10 }}>
        <Button 
          className="action-button"
          onClick={onPopulate}
          disabled={data.length >= 50}
        >
          Populate
        </Button>
        <Button
          className="action-button"
          onClick={onClear}
          style={{ marginLeft: 10 }}
        >
          Clear
        </Button>
      </div>
      <Card 
        title={(
          <div>
            <Select
              className="action-button"
              placeholder="Sort By"
              onChange={onSort}
            >
              <Select.Option value="title">Title</Select.Option>
              <Select.Option value="date_created">Date Created</Select.Option>
            </Select>
          </div>
        )} 
        extra={<Search onSearch={onSearch} placeholder="Search a Blog" />}
      >
        <List 
          itemLayout="vertical"
          size="small"
          dataSource={blogs}
          pagination={{ 
            pageSize: 3, 
            showSizeChanger: false, 
            hideOnSinglePage: true 
          }}
          locale={{ emptyText: 'There are no blogs yet..' }}
          renderItem={(item) => (
            <Card 
              size="small" 
              title={item.title}
              key={item.id}
              style={{ marginTop: 10 }}
              extra={(
                <div>
                  <ViewAction blog={item} />
                  <UpdateAction blog={item} />
                  <DeleteAction blog={item} />
                </div>
              )}
            >
              <Text>{item.content} | {item.id}</Text>
              <div style={{ marginTop: 20 }}>
                <Text type="secondary">{moment(item.date_created).fromNow()}</Text>
              </div>
            </Card>
          )}
        />
      </Card>
    </div>
  );
}

BlogList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    date_created: PropTypes.instanceOf(Date)
  })),
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onPopulate: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default BlogList;