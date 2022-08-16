import { GET_TIME } from '../types/timeTypes';
// import { timeAPI } from '../config/endPoint'

const axios = require('axios').default;

export const getTimeAC = (payload) => ({ type: GET_TIME, payload }); 

const getTimeAPI = async () => {
    return await axios('http://localhost:3030/api');
    // return await axios(timeAPI());  // если сервер API пропускает cors, тогда можно кидать запрос с фронта. Я же кидал запрос с своего бэка.
};

export const timeThunk = () => async (dispatch) => {
    const data = await getTimeAPI();
    dispatch(getTimeAC(data.data));
};