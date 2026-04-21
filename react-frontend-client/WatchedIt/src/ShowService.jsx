import axios from 'axios';

const SHOWS_API_BASE_URL = import.meta.env.VITE_API_URL;

class ShowService {
    getShows(){
        return axios.get(SHOWS_API_BASE_URL + "/");
    }

    getOneShow() {
        return axios.get(`${SHOWS_API_BASE_URL}/${id}`);
    }

    createShow(){
        return axios.post(SHOWS_API_BASE_URL + "/", show)
    }

    getShowByType(){
        return axios.get(`${SHOWS_API_BASE_URL}/type/${type}`);
    }
}

export default new ShowService();