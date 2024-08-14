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
    <div className='flex flex-col h-screen w-full md:px-16 p-4 mt-4'>
      <h1 className='w-full max-w-90 text-5xl font-bold mt-12 self-center text-left'> 合作伙伴 </h1>
      <div className='max-w-90 h-full w-full m-auto py-16 relative group'>
        
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-[60vh] md:h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-10 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={50} />
        </div>
        
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-10 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={50} />
        </div>
        
        {/* Dots Navigation */}
        <div className='flex top-4 justify-center py-1 mt-16'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-4 h-4 mx-6 rounded-full cursor-pointer ${
                currentIndex === slideIndex ? 'bg-diyBlack' : 'border-2 border-diyBlack'
              }`}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
