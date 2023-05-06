import axios from "axios";
// import { setupCache } from "axios-cache-interceptor";

let url = process.env.REACT_APP_LOCAL_URL;
if (process.env.REACT_APP_ENV === "prod") {
  url = process.env.REACT_APP_PROD_URL;
}
const local: any = localStorage.getItem("token") || null;

const token = local ? local : null;
const headers = token ? { Authorization: `Bearer ${token}` } : {};

const Axios = axios.create({
  baseURL: url,
  headers,
});

const https = Axios;

export default https;
