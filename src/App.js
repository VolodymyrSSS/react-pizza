import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';

import { setPizzas } from './redux/actions/pizzas';

function App () {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element= {<Home items={items} />} />
          <Route path="/cart" element= {<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     savingPizzas: items => dispatch(setPizzasAction(items)),
//   };
// };
// const mapDispatchToProps =  {
//   setPizzas,
// };

// першим викликом "соnnect" отримує параметри як: actions та
// state ( іменно: mapStateToProps - повертає якісь дані зі сховища, mapDispatchToProp - повертає якісь actions),
// а другим викликом - Арр підключає до сховища
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
