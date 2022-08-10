import axios from 'axios';

const API_URL = 'https://newsapi.org/v2';

axios.defaults.baseURL = API_URL;

export const NewsService = {
    async getAll() {
        return axios.get('/everything?q=keyword&apiKey=f1b174280e8949649df393bc0137d850')
    },
}