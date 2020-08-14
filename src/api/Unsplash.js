import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rhNZ8nlRBBdFjsIPgxKxjNE_QLSd6q3m0MPLbRmYD8Y'
    }
});