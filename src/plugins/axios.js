import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosPlugin = {
    install(Vue){
        const axiosInstance = axios.create({
            baseURL: 'https://swapi.co/api',
            // withCredentials: true,
        });
        Vue.use(VueAxios, axiosInstance);
    }
};

export default axiosPlugin;