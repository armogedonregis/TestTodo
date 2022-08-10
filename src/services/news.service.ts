import axios from 'axios';

// Api https://newsapi.org/v2 /everything?q=keyword&apiKey=f1b174280e8949649df393bc0137d850
// Резервное Api https://newsdata.io/api/1 /news?apikey=pub_10093c2bcd9ce1741bd1058c90526a0b4f204&q=News

const API_URL = 'https://newsdata.io/api/1';

axios.defaults.baseURL = API_URL;

export const NewsService = {
    async getAll() {
        return axios.get('/news?apikey=pub_10093c2bcd9ce1741bd1058c90526a0b4f204&q=News')
    },
}