import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import clinic_CFP from '../assets/clinic_CFP.jpg';
import clinic_NewEngland from '../assets/clinic_NewEngland.jpg';
import clinic_NewEngland2 from '../assets/clinic_NewEngland2.jpg';
import clinic_LA from '../assets/clinic_LA.jpg';
import clinic_HRC from '../assets/clinic_HRC_Encino.jpg';
import clinic_NV from '../assets/clinic_NV.jpg';
import clinic_MD from '../assets/clinic_MD.png';

const Partners = () => {
  const slides = [
    { url: clinic_MD },
    { url: clinic_CFP },
    { url: clinic_NewEngland },
    { url: clinic_LA },
    { url: clinic_NewEngland2 },
    { url: clinic_HRC },
    { url: clinic_NV },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='flex flex-col w-full md:px-16 p-4 mt-4'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl pl-4 font-bold py-0 sm:mt-12'>
        合作伙伴
      </h1>
      <div className='max-w-full h-[50vh] md:h-[60vh] lg:h-[70vh] w-full m-auto py-8 relative group'>
        
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-4 md:p-10 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} className="w-8 h-8 md:w-12 md:h-12" />
        </div>
        
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-4 md:p-10 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} className="w-8 h-8 md:w-12 md:h-12" />
        </div>
        
        {/* Dots Navigation */}
        <div className='flex top-4 justify-center py-4 mt-4'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 md:w-4 md:h-4 mx-2 md:mx-6 rounded-full cursor-pointer ${
                currentIndex === slideIndex ? 'bg-diyBlack' : 'border-2 border-diyBlack'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
