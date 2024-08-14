import React from 'react';
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

  const drSlideLeft = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft - 344;
  };

  const drSlideRight = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft + 344;
  };

  return (
    <div className='relative flex flex-col md:pl-4 justify-center w-full mt-20' >
      <div className='relative flex items-center w-full justify-center items-center'>
        <div id='doctor' className='w-full pl-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          
            {data.map((item) => (
            <div 
            className="bg-cover bg-center relative h-[350px] w-[350px] m-7 inline-block hover:scale-105 ease-in-out duration-300 rounded-xl"
            style={{ backgroundImage: `url(${item.img})` }}
            alt = '/'>
            <div className = "absolute inset-0 flex flex-col items-center justify-end p-2 font-bold text-white rounded-xl">
              <h1 className='text-l '>{item.drName}</h1>
              <p className='text-xl max-w-[344px]'>{item.drIntro}</p>
            </div>
            </div>
            ))}

        </div>
        
      </div>
      <div className='flex justify-end mt-4 mb-8'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-4' onClick={drSlideLeft} size={60} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-4' onClick={drSlideRight} size={60} />
      </div>
    </div>
  );
};

export default Doctors;

