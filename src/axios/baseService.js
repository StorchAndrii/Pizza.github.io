import axios from "axios";

const baseService = axios.create({
  baseURL: "https://6296422575c34f1f3b2c77ec.mockapi.io",
});

export default baseService;
