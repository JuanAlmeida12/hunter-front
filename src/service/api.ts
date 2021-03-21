import axios, { AxiosResponse } from 'axios';
import Candidate from '../model/candidate';

const URL = 'http://localhost:3333/api';

export const getCandidates = (query: string): Promise<AxiosResponse<Candidate[]>> => {
    return axios.get<Candidate[]>(`${URL}/candidate?${query}`);
};

export const getCities = (): Promise<AxiosResponse<string[]>> => {
    return axios.get<string[]>(`${URL}/candidate/cities`);
};

export const getExp = (): Promise<AxiosResponse<string[]>> => {
    return axios.get<string[]>(`${URL}/candidate/experiencies`);
};
