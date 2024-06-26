import React, { useState, useEffect } from 'react';
import babyHands from '../assets/babyHands.jpg';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const textCenterPosition = windowHeight / 8;

    if (scrollPosition < textCenterPosition) {
      setOffsetY(scrollPosition);
    } else {
      setOffsetY(textCenterPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textStyle = {
    transform: `translateY(calc(100vh - ${offsetY}px))`,
    transition: 'transform 0.1s linear', // Smooth transition
  };

  const containerStyle = {
    backgroundImage: `url(${babyHands})`,
    backgroundAttachment: 'fixed',
    height: '150vh', // Ensure there's enough space to scroll
  };

  return (
    <div style={containerStyle} className="bg-cover bg-center relative">
      <div className='absolute top-0 left-100 right-0 p-4 text-center flex flex-col justify-center' style={textStyle}>
        <h1 className='text-6xl font-bold py-4'>
          让奇迹生辉
        </h1>
        <p className='text-xl sm:text-2xl md:text-4xl font-bold py-4'>
          —— 您的私人助孕管家
        </p>
        <p className='text-xl md:text-2xl font-bold'>
          坐拥全球顶尖生殖医生、律师、第三方生殖管理机构资源,
          <br className="hidden md:block" />
          20年专业经验，服务2000+财富家庭，
          <br className="hidden md:block" />
          管家式服务为您提供尊享体验。
        </p>
      </div>
    </div>
  );
};

export default Hero;
