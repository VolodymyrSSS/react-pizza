import React from 'react';
import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={[
          'М\'ясні',
          'Вегетаріанські',
          'Гриль',
          'Гострі',
          'В коробці'
          ]} onClickItem={(category) => console.log(category)}
        />
        <SortPopup items={[
          {name: 'популярності', type: 'popularity'},
          {name: 'ціні', type: 'price'},
          {name: 'алфавіту', type: 'alphabet'} 
        ]}/>
      </div>
      <h2 className="content__title">Наш асортимент</h2>
      <div className="content__items">
        {
          // items.map(obj => <PizzaBlock key={obj.id} name={obj.name} imageUrl={obj.imageUrl} />)
          items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Home;
