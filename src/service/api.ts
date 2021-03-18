import axios from 'axios';

const URL = 'http://localhost:3333/api';

export const getCandidates = (query: string): Promise<any> => {
    return axios.get(`${URL}/candidate?${query}`);
};

export const getCities = () => {
    return axios.get(`${URL}/candidate/cities`);
};

export const getExp = () => {
    return axios.get(`${URL}/candidate/experiencies`);
};
