import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-73bc8.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-73bc8/us-central1/api'   //THE API(cloud function Url)
})

export default instance;