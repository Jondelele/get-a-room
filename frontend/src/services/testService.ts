import axios from './axiosConfigurer';

export const testIndexCall = async () => {
    const response = await axios.get('/');
    console.log(response);
    console.log(response.data);
    return response.data;
};
