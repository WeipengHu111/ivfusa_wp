import React, { useState, useEffect } from 'react';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import CFP from '../assets/CFP1.png';
import HRC1 from '../assets/HRC1.png';
import HRC2 from '../assets/HRC2.png';
import Japan1 from '../assets/japan1.png';
import taiwan1 from '../assets/taiwan1.png';
import taiwan2 from '../assets/taiwan2.png';

const Doctors = () => {
  const data = [
    {
      id: 1,
      drName: 'CFP',
      drIntro: 'Dr.Guy Ringler',
      img: CFP,
    },
    {
      id: 2,
      drName: 'HRC',
      drIntro: 'Dr.Jane Frederick',
      img: HRC1,
    },
    {
      id: 3,
      drName: 'HRC',
      drIntro: 'Dr.Robert Boostanfar',
      img: HRC2,
    },
    {
      id: 4,
      drName: '日本诊所',
      drIntro: '齐藤将也 医生',
      img: Japan1,
    },
    {
      id: 5,
      drName: '台湾诊所',
      drIntro: '陈芊彣 副院长',
      img: taiwan1,
    },
    {
      id: 6,
      drName: '台湾诊所',
      drIntro: '张甫行医生',
      img: taiwan2,
    },
  ];

  const [buttonSize, setButtonSize] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setButtonSize(30);
      } else if (window.innerWidth < 768) {
        setButtonSize(30);
      } else {
        setButtonSize(40);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const drSlideLeft = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft - doctor.clientWidth * 0.8;
  };

  const drSlideRight = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft + doctor.clientWidth * 0.8;
  };

  return (
    <div className='relative flex flex-col md:pl-4 justify-center w-full pt-4 md:pt-20'>
      <div className='relative flex w-full justify-center items-center'>
        <div id='doctor' className='w-full pl-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <div 
              key={item.id}
              className="bg-cover bg-center relative h-[40vw] w-[40vw] md:h-[30vw] md:w-[30vw] lg:h-[40vw] lg:w-[40vw] max-h-[350px] max-w-[350px] m-5 inline-block hover:scale-105 ease-in-out duration-300 rounded-xl"
              style={{ backgroundImage: `url(${item.img})` }}
              alt='/'
            >
              <div className="absolute inset-0 flex flex-col items-center justify-end p-2 font-bold text-white rounded-xl bg-black bg-opacity-50">
                <h1 className='text-xs sm:text-base md:text-lg'>{item.drName}</h1>
                <p className='text-sm sm:text-lg md:text-xl max-w-[90%] text-center'>{item.drIntro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end mt-0 mb-0 pr-10 sm:mb-8'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-3' onClick={drSlideLeft} size={buttonSize} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100 ' onClick={drSlideRight} size={buttonSize} />
      </div>
    </div>
  );
};

export default Doctors;
