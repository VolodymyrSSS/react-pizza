import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categories = ['М\'ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'В коробці'];
const sortingClassifications = [
  {name: 'популярності', type: 'popularity'},
  {name: 'ціні', type: 'price'},
  {name: 'алфавіту', type: 'alphabet'} 
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index)); 
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          items={categories}
          onClickItem={onSelectCategory}
        />
        <SortPopup items={sortingClassifications}/>
      </div>
      <h2 className="content__title">Наш асортимент</h2>
      <div className="content__items">
        {
          // items.map(obj => <PizzaBlock key={obj.id} name={obj.name} imageUrl={obj.imageUrl} />)
          items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};


export default Home;
