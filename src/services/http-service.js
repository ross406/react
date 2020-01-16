import 'whatwg-fetch';

const proxy = require('http-proxy-middleware');

class HttpService {
  getProducts = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log(response.json());
    });
  };
}

export default HttpService;
