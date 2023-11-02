import axios from "axios";

const baseUrl = window.__RUNTIME_CONFIG__.REACT_APP_BASE_API_URL;

const instance= axios.create({
    baseURL: {baseUrl}
})

export default instance;