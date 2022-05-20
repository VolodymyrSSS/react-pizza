import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

import { Routes, Route } from 'react-router-dom';

// // У разі якщо назва "setPizzas" співпадає з назвою actions
// import {setPizzas as setPizzasAction} from './redux/actions/pizzas';
// Якщо хочемо щоб Redux сам робив dispatch і дії були більш контрольовані
import { setPizzas } from './redux/actions/pizzas';

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // this.props.savingPizzas(data.pizzas);
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element= {<Home items={this.props.items} />} />
            <Route path="/cart" element= {<Cart />} />
          </Routes>
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     savingPizzas: items => dispatch(setPizzasAction(items)),
//   };
// };
const mapDispatchToProps =  {
  setPizzas,
};



// першим викликом "соnnect" отримує параметри як: actions та
// state ( іменно: mapStateToProps - повертає якісь дані зі сховища, mapDispatchToProp - повертає якісь actions),
// а другим викликом - Арр підключає до сховища
export default connect(mapStateToProps, mapDispatchToProps)(App);
