import React, { useState, useEffect } from 'react';
import babyHands from '../assets/babyHands.jpg';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const textCenterPosition = windowHeight / 2;

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
    transition: 'transform 0.1s linear',
  };

  const containerStyle = {
    background: `url(${babyHands}) no-repeat`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    position: 'sticky',
    top: '0',
    overflow: 'hidden',
  };

  const contentStyle = {
    height: '170vh', // 使页面足够长以触发滚动
    overscrollBehavior: 'contain',  // 防止子内容滚动影响父背景
  };

  return (
    <div style={contentStyle}>
      <div style={containerStyle} className="center top h-screen relative">
        <div className="absolute top-0 left-50 right-0 p-4 text-center flex flex-col justify-center" style={textStyle}>
          <h1 className="text-6xl font-bold py-4">
            让奇迹生辉
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold py-4">
            —— 您的私人助孕管家
          </p>
          <p className="text-xl md:text-2xl font-bold">
            坐拥全球顶尖生殖医生、律师、第三方生殖管理机构资源,
            <br className="hidden md:block" />
            20年专业经验，服务2000+财富家庭，
            <br className="hidden md:block" />
            管家式服务为您提供尊享体验。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
