
import axios from 'axios';

const viziappServices = axios.create({
    baseURL: "https://viziapp-megahack.herokuapp.com/viziapp/v1",
});

export default viziappServices;