import { useState } from 'react';
import {  Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { Container } from 'app-style';
import { ROUTE } from 'app-constants';

const { Search } = Input;

function SearchForm() {
  const history = useHistory();
  const [keyword, setKeyword] = useState(null);

  async function onSearch(value) {
    history.push(`${ROUTE.BLOG_SEARCH_PAGE}?q=${keyword}`)
  }

  return (
    <Container>
      <Search 
        onSearch={onSearch} 
        onChange={(evt) => setKeyword(evt.target.value)}
        placeholder="Search a Blog" 
        value={keyword}
      />
    </Container>
  );
}

export default SearchForm;