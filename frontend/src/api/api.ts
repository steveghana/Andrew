import axios from "axios";

//----------------------------------------
//Create an Instance of axios
//----------------------------------------

export const fetchData = axios.create({
  baseURL: "http://localhost:5000",
});
