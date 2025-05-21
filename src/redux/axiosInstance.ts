import axios from "axios";

const instance = axios.create({
    baseURL: "https://clothes-marketplace.runasp.net",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;