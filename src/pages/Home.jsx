import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['М\'ясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'В коробці'];
const sortClassifications = [
  { name: 'популярності', type: 'popularity', order:'desc' },
  { name: 'ціні', type: 'price', order:'desc' },
  { name: 'алфавіту', type: 'name', order:'asc' }
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, items.length, sortBy, category]);

  
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index)); 
  }, [dispatch]);
  
  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type)); 
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortClassifications}
          onClickSortType={onSelectSortType}
        />
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
