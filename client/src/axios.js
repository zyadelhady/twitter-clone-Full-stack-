import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-zyad.herokuapp.com/',
  withCredentials: true,
});

export default instance;
