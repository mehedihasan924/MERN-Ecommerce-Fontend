/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryCards from '../CategoryCards/CategoryCards';

const Specialdishes = () => {
  
  const [recipes, setRecipes] = useState([]);

  const slider = React.useRef(null)

  useEffect(() => {
    fetch("../public/menu.json")
    .then(res => res.json())
      .then(data => {
        const specials = data.filter((item) => item.category==="popular")
        setRecipes(specials)
      })
  }, [])
  
    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    gap:5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <div className='max-w-screen-2xl lg:px-24 container my-20'>
          <div className='text-left'>
              <p className='text-red text-lg font-semibold uppercase tracking-wide'>special Dishes </p>
              <h2 className='text-4xl md:text-5xl md:w-[520px] font-bold my-2 md:leanding-snug leading-snug'> Standout Dishes  From Our Menu</h2>
          </div>
        {/* Slider React Slick */}
         <Slider {...settings}>
        {
          recipes.map((item, i) => (
            <CategoryCards key={i}
             item={item}> 

            </CategoryCards>))
         }
        </Slider>

      </div>
  )
}

export default Specialdishes