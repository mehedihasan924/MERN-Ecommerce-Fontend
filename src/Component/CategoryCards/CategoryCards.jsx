/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
const CategoryCards = ({item}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <img src={item.image} />
        <div className="card-body">
              <h2 className="card-title">{ item.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between items-center mt-2">
                  <h5 className='font-semibold'> <span>$</span> {item.price}</h5>
            <button className="btn bf-green text-white">Buy Now</button>
            </div>
        </div>
    </div>
  ) 
}

export default CategoryCards