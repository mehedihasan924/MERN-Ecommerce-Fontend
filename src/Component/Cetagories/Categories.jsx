import React from 'react'
import image1 from "./../../assets/category/img1.png"
import image2 from "./../../assets/category/img2.png"
import image3 from "./../../assets/category/img3.png"
import image4 from "./../../assets/category/img4.png"

const categoriesItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: image1
  },
    {
    id: 2,
    title: "Break Fast",
    des: "(12 break fast)",
    image: image2
  },
     {
    id:3,
    title: "Dessert",
    des: "(12 dessert)",
    image: image3
  },
     {
    id:4,
    title: "Browse All",
    des: "(120 Items)",
    image: image4
  }    
]
const Categories = () => {
  return (
      <div className='max-w-screen-2xl container mx-auto lg:px-24 py-16'>
          <div className='text-center'>
              <p className='text-red text-lg font-semibold uppercase tracking-wide'>Customer Favoritse </p>
              <h2 className=' text-xl md:text-5xl  font-bold my-2 md:leanding-snug leading-snug'>  Popular Categories</h2>
            </div>
            {/* Categories Cart */}
              <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
              {
                categoriesItems.map((item, i) => 
                  <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all' >
                      <div className='flex w-full items-center justyfy-center'>
                        <img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full  w-28 h-28'/>
                    </div>
                    <div className='mt-5 space-y-1'>
                      <h5>{item.title}</h5>
                      <p>{item.des}</p>
                    </div>
                  </div>
                )
                  }
              </div>
     </div>
  )
}

export default Categories