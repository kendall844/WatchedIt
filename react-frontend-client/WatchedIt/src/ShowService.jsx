import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

class ShowService {

    getShows() {
        return axios.get(BASE_URL);
    }

    getOneShow(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    getShowsByType(type) {
        return axios.get(`${BASE_URL}/type/${type}`);
    }

    createShow(show) {
        return axios.post(BASE_URL, show);
    }

    deleteShow(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ShowService();