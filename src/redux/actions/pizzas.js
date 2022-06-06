import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
});

// по суті - метод для отримання та збереження піц в Редакс
export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false));

    axios.get(
        `http://localhost:3001/pizzas?${
            category !== null ? `category=${category}`: ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
      )
      .then(({ data }) => {dispatch(setPizzas(data));
    });
};


// по суті - метод для збереження піц в Редакс
export const setPizzas = items => ({
    type: 'SET_PIZZAS',
    payload: items,
});
