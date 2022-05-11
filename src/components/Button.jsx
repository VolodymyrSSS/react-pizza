import React from 'react';
import classNames from 'classnames';

const Button = ({onClick, className, outline, children}) => {
    return (
        <button 
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}
        >
            {children}
        </button>
    );
};

// class Button extends React.Component {
//     render () {
//         // return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
//         return (
//           <button
//             className={classNames('button', {
//                 'button--outline': this.props.outline,
//             })}
//           >
//             {this.props.children}
//           </button>
//         )
//     }
// }

export default Button;
