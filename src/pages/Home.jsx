import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['М\'ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'В коробці'];
const sortClassifications = [
  {name: 'популярності', type: 'popularity'},
  {name: 'ціні', type: 'price'},
  {name: 'алфавіту', type: 'alphabet'} 
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchPizzas());
    }
  }, [dispatch, items.length, category, sortBy]);

  
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index)); 
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup items={sortClassifications}/>
      </div>
      <h2 className="content__title">Наш асортимент</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />) 
          : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

// Home.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object),
// };

export default Home;
