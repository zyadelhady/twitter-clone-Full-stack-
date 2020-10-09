import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-zyad.herokuapp.com/api/v1/',
  withCredentials: true,
});

// const instance = axios.create({
//   baseURL: 'http://localhost:4000/api/v1/',
//   withCredentials: true,
// });

export default instance;
