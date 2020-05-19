  
import axios from "axios";

const http = {
  get: function(url) {
    return axios.get(url);
  },
  post: function(url) {
    return axios.post(url);
  }
};

export default http;