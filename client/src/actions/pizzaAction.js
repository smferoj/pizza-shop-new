import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
    dispatch({type: 'GET_PIZZA_REQUEST'});
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas');
        dispatch({ type: 'GET_PIZZA_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err});
    }
};