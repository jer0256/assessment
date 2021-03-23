import { useState } from 'react';
import { Row, Col, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from 'redux/slices/blogSlice';
import { Link } from 'react-router-dom';
import { searchBlog } from 'api';

const { Search } = Input;

function SearchForm() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState(null);
  const { itemPerPage } = useSelector(state => state.blog);

  async function onSearch(value) {
    const data = await searchBlog({ 
      keyword, 
      items: itemPerPage,
      page: 1
    });

    dispatch(searchItems({
      items: data.items,
      itemTotal: data.total,
      keyword 
    }));
  }

  return (
    <Row gutter={[12, 12]}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        {/* <Link to="/blog/create">
          <Button type="primary">Create</Button>
        </Link> */}
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Search 
          onSearch={onSearch} 
          onChange={(evt) => setKeyword(evt.target.value)}
          placeholder="Search a Blog" 
          value={keyword}
        />
      </Col>
    </Row>
  );
}

export default SearchForm;