import axios from "axios";

const baseURL = "http://192.168.29.15:8000";
const token = localStorage.getItem("token");

export const apiText = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    authorization: `${token}`,
  },
});
