import React from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    // using axios
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      console.log('Axios' - data);
      setPizzas(data.pizzas);
    });

    // using fetch
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => {
    //      console.log('Fetch' - resp);
    //      return resp.json()
    //    })
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element= {<Home items={pizzas} />} />
          <Route path="/cart" element= {<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
