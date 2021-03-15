import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.API_HOST;

export async function getAllBlog() {
  try {
    const blogs = await axiosInstance({
      method: 'GET',
      url: '/'
    });

    return blogs;
  }
  catch(err) {
    return false;
  }
} 

