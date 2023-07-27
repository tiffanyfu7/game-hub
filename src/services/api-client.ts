import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '60550618544f40e2a834f0f1d789e6f4'
    }
})