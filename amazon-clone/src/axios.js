import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-73bc8/us-central1/api'   //THE API(cloud function Url)
})

export default instance;