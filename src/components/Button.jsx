import React from 'react';

const Button = ({children, type, onClick}) => {
  return (
    <button type={type} onClick={onClick} className='bg-buttonHover-800 text-white rounded-2xl shadow-md hover: m-5 text-2xl p-4 hover:bg-button-500 hover:text-buttonTextHover-600'>{children}</button>
  )
}

export default Button