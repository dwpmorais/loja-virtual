import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://corebiz-test.herokuapp.com/api/v1/products',
});
