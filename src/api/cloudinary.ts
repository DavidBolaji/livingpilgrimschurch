import axios from "axios";

let url = process.env.REACT_APP_CLOUDINARY_URL;

const Cloudinary = axios.create({
  baseURL: url,
});

export default Cloudinary;
