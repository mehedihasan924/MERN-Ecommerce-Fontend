import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Categories from '../../Component/Cetagories/Categories'
import Specialdishes from '../../Component/SpecialDishes/Specialdishes'
import Testimonial from '../../Component/Tetimonials/Testimonial'


const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Specialdishes />
      <Testimonial />
    </div>
  )
}

export default Home