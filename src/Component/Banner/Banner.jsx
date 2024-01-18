import React from 'react'

const Banner = () => {
  return (
      <div className='max-w-screen-2xl container mx-auto lg:px-24 px-4
      bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% '>
          <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
              {/* text */}
              <div className='md:w-1/2'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable Food</h2>
              </div>
              <div className=''> </div>
        </div>
      </div>
  )
}

export default Banner