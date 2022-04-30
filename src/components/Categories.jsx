import React from 'react'

function Categories({ items, onClickItem }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Усі</li>
        {items.map((category, index) => (
          <li key={`${category}_${index}`} onClick={() => onClickItem(category)}>
              {category}
          </li>))
        }

        {/* <li>М'ясні</li>
        <li>Вегетаріанські</li>
        <li>Гриль</li>
        <li>Гострі</li>
        <li>В коробці</li> */}
      </ul>
    </div>
  )
}

export default Categories;
