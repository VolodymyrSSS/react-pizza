import React from 'react'

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
        <SortPopup items={['популярності', 'ціні', 'алфавіту']}/>
      </div>
      <h2 className="content__title">Всі види піци</h2>
      <div className="content__items">
        {
          // items.map(obj => <PizzaBlock key={obj.id} name={obj.name} imageUrl={obj.imageUrl} />)
          items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

export default Home;
