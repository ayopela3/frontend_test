import axios from 'axios';

const appClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 5000,
  headers: { 'Accept': 'application/json'}
})


const userApi = () => {
  const getUsers = async () => {
    return appClient.get(`/users`)
      .then((results) => results).catch((error) => {
        console.log(error);
        return { data: [] };
      });
    }

  return {
    getUsers,
  }
}

export default userApi;
