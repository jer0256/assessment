import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_API_HOST;

const BlogAPI = {
  getAllBlog: async (payload) => {
    return await axiosInstance({
      method: 'GET',
      url: '/api/blog',
      params: payload
    });
  },
  getBlogById: async (id) => {
    return await axiosInstance({
      method: 'GET',
      url: `/api/blog/${id}`
    });
  },
  searchBlog: async (payload) => {
    const { keyword, ...rest } = payload;
  
    return await axiosInstance({
      method: 'GET',
      url: `/api/blog/search/${keyword}`,
      params: { ...rest }
    });
  },
  createBlog: async (payload) => {
    return await axiosInstance({
      method: 'POST',
      url: `/api/blog`,
      data: payload
    });
  },
  updateBlog: async (payload) => {
    return await axiosInstance({
      method: 'PUT',
      url: `/api/blog/${payload.id}`,
      data: payload
    });
  }
};

export default BlogAPI;