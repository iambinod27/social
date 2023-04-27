import axios from "axios";
import { Navigate } from "react-router-dom";

const socialAxios = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

export default socialAxios;
