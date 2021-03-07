import { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import BlogForm from './components/form';
import BlogList from './components/list';
import BlogDetail from './components/detail';

import './App.css';
import moment from 'moment';

const { Header, Footer, Content } = Layout;

let blogID = 1000;

function App() {
  const [activeDir, setActiveDir] = useState('home');
  const [blogs, setBlogs] = useState([]);
  const [blogView, setBlogView] = useState(null);
  const [blogEdit, setBlogEdit] = useState(null);

  function createBlog(blog) {
    setBlogs([...blogs, { 
      ...blog, 
      id: blogID++, 
      date_created: moment().toDate() 
    }]);
  }

  function deleteBlog(id) {
    setBlogs(blogs => blogs.filter(blog => blog.id !== id));
    setBlogEdit(null);
  }

  function viewBlog(id) {
    setBlogView(blogs.find(blog => blog.id === id));
    setActiveDir('blogdetail');
  }

  function updateBlog(blog) {
    setBlogs(blogs => blogs.map(i => i.id === blog.id ? blog : i));
    setBlogEdit(null);
  }

  function prepareUpdateBlog(id) {
    setBlogEdit(blogs.find(blog => blog.id === id));
  }

  function clearUpdateBlog() {
    setBlogEdit(null);
  }

  function populateDummyData() {
    const data = [];
    const date_created = moment().toDate();

    for(let i = 1; i <= 100; i++)
      data.push({ 
        id: i, 
        title: `Blog title number ${i}`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        date_created
      });

    setBlogs(blogs => blogs.concat(data));
  }

  const HomePage = () => (
    <Row gutter={12}>
      <Col span={10} offset={1}>
        <BlogForm 
          onCreate={createBlog}
          onUpdate={updateBlog}
          onCancelUpdate={clearUpdateBlog}
          blog={blogEdit}
          activeDir={activeDir}
        />
      </Col>
      <Col span={10} offset={1}>
        <BlogList 
          data={blogs} 
          onDelete={deleteBlog}
          onView={viewBlog}
          onUpdate={prepareUpdateBlog}
          onPopulate={populateDummyData}
          onClear={() => setBlogs([])}
        />
      </Col>
    </Row>
  );

  const BlogPage = () => (
    <Row gutter={12}>
      <Col span={10} offset={1}>
        <BlogDetail 
          blog={blogView} 
          onBack={() => setActiveDir('home')}
        />
      </Col>
    </Row>
  );

  return (
    <Layout>
      <Header>Create a Blog</Header>
      <Content>
        <div style={{ marginTop: 20 }}>
          { 
            activeDir === 'home' 
            ? <HomePage />
            : <BlogPage />
          }
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
