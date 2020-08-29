import axios from 'axios';

const axiosQuotes = axios.create({
    baseURL: 'https://collectionofquotes-js7.firebaseio.com/'
})

export default axiosQuotes;