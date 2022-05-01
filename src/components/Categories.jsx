import React, { useState } from 'react'

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = index => setActiveItem(index);

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
}

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         });
//     }

//     render () {
//       const {items } = this.props;

//       return (
//         <div className="categories">
//           <ul>
//             <li 
//              className={this.state.activeItem === null ? "active" : ''}
//              onClick={() => this.onSelectItem(null)}
//             >
//               Усі
//             </li>
//             {items && items.map((category, index) => (
//                 <li 
//                   className={this.state.activeItem === index ? "active" : ''}
//                   key={`${category}_${index}`}
//                   onClick={() => this.onSelectItem(index)}
//                 > 
//                   {category}
//                 </li>
//               ))
//             }
//           </ul>
//         </div>
//       );
//     }
// }

export default Categories;
