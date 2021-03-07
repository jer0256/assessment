import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, Card, Typography, Button, Modal, Input, Select, Row, Col } from 'antd';

const { Text } = Typography;
const { Search } = Input;

function BlogList(props){
  const { data, onDelete, onView, onUpdate, onPopulate } = props; 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(-1);
  const [blogs, setBlogs] = useState([]);
  const [sortConfig, setSortConfig] = useState({ category: null, order: null });
  const [keyword, setKeyword] = useState(null);

  function onClickDelete(blog) {
    setSelectedBlog(blog);
    setModalVisible(true);
  }

  function onConfirmDelete() {
    onDelete(selectedBlog.id);
    setModalVisible(false);
  }

  function onChangeSortCategory(category) {
    setSortConfig(sortConfig => { 
      sortList({ category, order: sortConfig.order });

      return { ...sortConfig, category }; 
    });
  }

  function onChangeSortOrder(order) {
    setSortConfig(sortConfig => { 
      sortList({ category: sortConfig.category, order });

      return {...sortConfig, order };
    });
  }

  function onSearch(keyword) {
    const searchedWord = keyword.toUpperCase();

    setBlogs(data.filter(item => {
      const { title, content } = item;

      return title.toUpperCase().includes(searchedWord) 
        || content.toUpperCase().includes(searchedWord);
    }));
  }

  function onKeyupSearch(event) {
    if(event.target.defaultValue === '')
      setBlogs([...data]);
  }

  function onChangeSearch(evt) {
    setKeyword(evt.target.value);
  }

  function sortList({ category, order }) {
    const sortedData = [...blogs];

    if(!category || !order) return;

    if(category === 'title') {
      if(order === 'asc')
        setBlogs(sortedData.sort((a, b) => a.title.localeCompare(b.title)));
      else
        setBlogs(sortedData.sort((a, b) => b.title.localeCompare(a.title)));
    }
    else {
      if(order === 'asc')
        setBlogs(sortedData.sort((a, b) => a.date_created - b.date_created));
      else
        setBlogs(sortedData.sort((a, b) => b.date_created - a.date_created));
    }
  }

  useEffect(() => {
    setBlogs([...data]);

    setSortConfig({ category: null, order: null });
    setKeyword(null);
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

  const ViewAction = ({ id }) => (
    <Button type="link" onClick={() => onView(id)}>
      View
    </Button>
  );

  const UpdateAction = ({ id }) => (
    <Button type="link" onClick={() => onUpdate(id)}>
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
      <Card 
        title={(
          <Row gutter={[12, 12]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Select
                className="action-button"
                placeholder="Sort By"
                onChange={onChangeSortCategory}
                value={sortConfig.category}
              >
                <Select.Option value="title">
                  <Text type="secondary">Title</Text>
                </Select.Option>
                <Select.Option value="date_created">
                  <Text type="secondary">Date Created</Text>
                </Select.Option>
              </Select>
              <Select
                className="action-button"
                placeholder="Sort Order"
                onChange={onChangeSortOrder}
                style={{ marginLeft: 10 }}
                value={sortConfig.order}
              >
                <Select.Option value="asc">
                  <Text type="secondary">Asc</Text>
                </Select.Option>
                <Select.Option value="desc">
                  <Text type="secondary">Desc</Text>
                </Select.Option>
              </Select>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <Search 
                onSearch={onSearch} 
                onKeyUp={onKeyupSearch} 
                onChange={onChangeSearch}
                placeholder="Search a Blog" 
                value={keyword}
              />
            </Col>
          </Row>
        )} 
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
          locale={{ 
            emptyText: (
              <div>
                { data.length === 0 ? `There are no blogs yet.. ` : `No result found.`}
                {
                  data.length === 0 && (
                    <div>
                      <Button 
                        onClick={onPopulate}
                        disabled={data.length >= 50}
                        style={{ marginTop: 10 }}
                      >
                        <Text type="secondary">Populate Dummy Data</Text>
                      </Button>
                    </div>
                  )
                }
              </div> 
            ) 
          }}
          renderItem={(item) => (
            <Card 
              size="small" 
              title={item.title}
              key={item.id}
              style={{ marginTop: 10 }}
              extra={(
                <div>
                  <ViewAction {...item} />
                  <UpdateAction {...item} />
                  <DeleteAction {...item} />
                </div>
              )}
            >
              <Text type="secondary">{item.content}</Text>
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
};

export default BlogList;