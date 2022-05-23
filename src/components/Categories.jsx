import React, { useState } from 'react'

// React.memo - не допускає лишній ререндер, або робить лише поверхневе порівняння - дивиться тільки за змінaми на саме посилання 'items' та "onClickItem", а не на зміни в 'items' та "onClickItem"
const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = index => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeItem === null ? "active" : ''}
          onClick={() => onSelectItem(null)}
        >
            Усі
        </li>
        {items && items.map((category, index) => (
          <li 
            className={activeItem === index ? "active" : ''}
            key={`${category}_${index}`} 
            onClick={() => onSelectItem(index)}
          >
            {category}
          </li>))
        }
      </ul>
    </div>
  )
});

export default Categories;
