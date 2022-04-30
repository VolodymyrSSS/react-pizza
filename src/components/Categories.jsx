import React from 'react'

// function Categories({ items, onClickItem }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Усі</li>
//         {items.map((category, index) => (
//           <li key={`${category}_${index}`} onClick={() => onClickItem(category)}>
//               {category}
//           </li>))
//         }
//       </ul>
//     </div>
//   )
// }

class Categories extends React.Component {
    render () {
      const {items, onClickItem} = this.props;
      
      return (
        <div className="categories">
          <ul>
            <li className="active">Усі</li>
            {items.map((category, index) => (
              <li key={`${category}_${index}`} onClick={() => onClickItem(category)}>
                {category}
              </li>))
            }
          </ul>
        </div>
      );
    }
}

export default Categories;
