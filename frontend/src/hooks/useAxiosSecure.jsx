const { default: axios } = require("axios");


 export const useAxiosSecure = axios.create({
    baseURL: "http://localhost:5000"
 })
