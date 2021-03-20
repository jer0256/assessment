import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_API_HOST;

export async function getAllBlog(payload) {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: '/api/blog',
      params: payload
    });

    return response.data || [];
  }
  catch(err) {
    return false;
  }
} 

export async function getBlogById(id) {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: `/api/blog/${id}`
    });

    return response.data;
  }
  catch(err) {
    return false;
  }
} 

export async function createBlog(payload) {
  try {
    const response = await axiosInstance({
      method: 'POST',
      url: `/api/blog`,
      data: payload
    });

    return response.data;
  }
  catch(err) {
    return false;
  }
}