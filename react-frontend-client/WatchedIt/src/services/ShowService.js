import axios from "axios";

const BASE = "http://localhost:3000/api/shows";

const config = {
    withCredentials: true
};

class ShowService {
    getShows() {
        return axios.get(BASE, config);
    }

    createShow(data) {
        return axios.post(BASE, data, config);
    }

    deleteShow(id) {
        return axios.delete(`${BASE}/${id}`, config);
    }
}

export default new ShowService();