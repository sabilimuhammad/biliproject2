import Vue from 'vue';
const PLANETS_BASE_URL = '/planets';

async function getAllPlanets() {
    const response = await Vue.axios({
        url: PLANETS_BASE_URL,
        method: 'GET',
    });
    return response.data;
}
export default{
getAllPlanets,
};