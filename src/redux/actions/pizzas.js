import axios from 'axios';

// по суті - метод для отримання та збереження піц в Редакс
export const fetchPizzas = () => dispatch => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
    });
};


// по суті - метод для збереження піц в Редакс
export const setPizzas = items => ({
    type: 'SET_PIZZAS',
    payload: items,
});
