/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryCards from '../CategoryCards/CategoryCards';

const simpleNextArroe = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red"}}
      onClick={onClick}
    >
      Next
    </div>
  );
};
const simplePrevArrow = (props) => {
   const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green"}}
      onClick={onClick}
    >
       Back
    </div>
  );
}


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
      ],
      nextArrow: <simpleNextArroe></simpleNextArroe>,
      prevArrow:<simplePrevArrow></simplePrevArrow>
    
  };
  return (
      <div className='max-w-screen-2xl lg:px-24 container my-20'>
          <div className='text-left'>
              <p className='text-red text-lg font-semibold uppercase tracking-wide'>special Dishes </p>
              <h2 className='text-4xl md:text-5xl md:w-[520px] font-bold my-2 md:leanding-snug leading-snug'> Standout Dishes  From Our Menu</h2>
      </div>
      <div>
        <button onClick={()=>slider?.current?.slickPrev()} className='bnt p-2 rounded-full ml-5'> Prev</button>
          <button onClick={()=>slider?.current?.slickPrev()}>Next</button>
      </div>
        {/* Slider React Slick */}
         <Slider ref={slider} {...settings}>
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