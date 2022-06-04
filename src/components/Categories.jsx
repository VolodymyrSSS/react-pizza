import React from 'react';
import PropTypes from 'prop-types';

// React.memo - не допускає лишній ререндер, або робить лише поверхневе порівняння - дивиться тільки за змінaми на саме посилання 'items' та "onClickItem", а не на зміни в 'items' та "onClickItem"
const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeCategory === null ? "active" : ''}
          onClick={() => onClickCategory(null)}
        >
            Усі
        </li>
        {items && items.map((name, index) => (
          <li 
            className={activeCategory === index ? "active" : ''}
            key={`${name}_${index}`} 
            onClick={() => onClickCategory(index)}
          >
            {name}
          </li>))
        }
      </ul>
    </div>
  )
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
  onClickCategory: () => {}
}

export default Categories;
