import axios from "axios";
export const api = axios.create({
    baseURL: 'https://api-projeto-fluxo-caixa-production.up.railway.app'
    // baseURL: process.env.REACT_APP_API_URL
})
