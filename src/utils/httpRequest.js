import axios from "axios";

const httpRequest = axios.create({
  // baseURL: "https://api01.f8team.dev/api",
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 30000,
});

httpRequest.interceptors.response.use((response) => {
  return response.data;
});

export default httpRequest;
