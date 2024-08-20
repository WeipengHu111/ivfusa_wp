import React from 'react';
import Single from '../assets/card_icon1.png'
import Double from '../assets/card_icon2.png'

const Cards = () => {
  return (
    <div className='w-full py-8 md:py-[10rem] px-4 bg-diyPeach'>
      <div className='max-w-[1200px] md:max-w-[1240px] mx-auto grid grid-cols-2 gap-3 md:gap-14 lg:gap-32'>
        
        {/* 第一张卡片 */}
        <div className='w-full shadow-xl bg-white flex flex-col justify-between p-4 px-2 md:p-8 md:px-4 md:my-4 lg:p-8 lg:px-4 lg:my-4 rounded-3xl hover:scale-105 duration-300'>
          <div className='flex flex-col items-center'>
            <img className='w-12 md:w-20 mx-auto' src={Single} alt="/" />
            <h2 className='text-xl md:text-4xl font-bold text-center pt-3 pb-0 md:pt-8 md:pb-8'>生育力储存</h2>
            <p className='text-base text-center md:text-4xl font-normal'>$7,000起</p>
            <div className='text-center font-medium py-4'>
              <p className='pt-2 md:pt-6 text-sm md:text-xl'>美国，日本，泰国，中国台湾, 美国医生远程会诊境外取卵，最快3天即可回国</p>
            </div>
          </div>
          <p className='text-center text-[#d1896b] text-base md:text-lg font-medium pt-2 md:pt-8'>
            进一步了解 &gt;
          </p>
        </div>
        
        {/* 第二张卡片 */}
        <div className='w-full shadow-xl bg-white flex flex-col justify-between p-4 px-2 md:p-8 md:px-4 md:my-4 lg:p-8 lg:px-4 lg:my-4 rounded-3xl hover:scale-105 duration-300'>
          <div className='flex flex-col items-center'>
            <img className='w-12 md:w-20 mx-auto' src={Double} alt="/" />
            <h2 className='text-xl md:text-4xl font-bold text-center pt-3 pb-0 md:pt-8 md:pb-8'>试管婴儿</h2>
            <p className='text-base text-center md:text-4xl font-normal'>$25,000起</p>
            <div className='text-center font-medium py-4'>
              <p className='pt-2 md:pt-6 text-sm md:text-xl'>第三代试管婴儿技术</p>
              <p className='text-sm md:text-xl'>PGT胚胎遗传检测</p>
            </div>
          </div>
          <p className='text-center text-[#d1896b] text-base md:text-lg font-medium pt-2 md:pt-8'>
            进一步了解 &gt;
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
