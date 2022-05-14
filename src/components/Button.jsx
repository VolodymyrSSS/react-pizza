import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    outline: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
}

Button.defaultProps = {
    children: {},
}

export default Button;
