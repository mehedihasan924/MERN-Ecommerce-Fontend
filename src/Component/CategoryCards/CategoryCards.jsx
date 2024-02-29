/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
const CategoryCards = ({item}) => {
  const [isHeartFillted, seIstHeartFillted] = useState(false);

    const handleHeartClick = () => {
         seIstHeartFillted(!isHeartFillted);
    }
  return (
    <div className='flex gap-10'>
        <div className="card w-96 bg-base-100 shadow-xl relative mx-5 my-5">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartstar rounded-tr-3xl  rounded-bl-3xl bg-green ${isHeartFillted ? "text-rose-500": "text-white" 
            }`}  onClick={handleHeartClick}>
               <FaHeart className='h-5 w-5 cursor-pointer'/>
            </div>
          <Link to={`/menu/${item._id}`}>
              <figure>
                  <img src={item.image} alt=''
                      className='hover:scale-105 transition-all duration-200 md:h-72 mt-2'
                  />
              </figure>
          </Link>
        <div className="card-body">
               <Link to={`/menu/${item._id}`}> <h2 className="card-title">{item.name}</h2></Link>
            <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between items-center mt-2">
                  <h5 className='font-semibold'> <span className='text-sm text-red'>$</span> {item.price}</h5>
            <button className="btn bg-green text-white">Buy Now</button>
            </div>
        </div>
      </div>
    </div>
     
  ) 
}

export default CategoryCards