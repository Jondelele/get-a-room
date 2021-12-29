import axios from './axiosConfigurer';

export const testIndexCall = () => {
    return axios.get('/');
};
