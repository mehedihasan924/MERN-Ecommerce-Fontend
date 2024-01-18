import React from 'react'
import Banner_img from './../../assets/banner.png'
import food_1 from './../../assets/b-food1.png'
const Banner = () => {
  return (
      <div className='max-w-screen-2xl container mx-auto lg:px-24 px-4
      bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% '>
          <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
              {/* text */}
              <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-green'>Food </span></h2>
                <p className='text-xl text-[#4A4A4A]'>Where Each  plate Weaves a Story of culinary Mastery and Passionate Cerftsmanship</p>
                <button className='btn bg-green px-8  py-3 font semibold text-white rounded-full'> Order Now</button>
              </div>
            <div className='md:w-1/2'>
                <img src={Banner_img} alt="" />
                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                      {/* Text- Div */}
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                      <img src={food_1} alt="" className='rounded-2xl' />           
                      <div className='space-y-1'>
                        <h5 className='font-medium mb-1'>Spicy noodles</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        </div>
                        <p className='text-red'> $18.00</p>
                      </div>            
                    </div>
                    {/* Text- Div */}
                    <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                      <img src={food_1} alt="" className='rounded-2xl' />
                    
                      <div className='space-y-1'>
                        <h5 className='font-medium mb-1'>Spicy noodles</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        </div>
                        <p className='text-red'> $18.00</p>
                      </div>            
                    </div>  
                </div>                   
            </div>
        </div>  
      </div>
  )
}

export default Banner