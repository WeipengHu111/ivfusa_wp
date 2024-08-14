import React, { useState, useEffect } from 'react';
import babyHands from '../assets/newbaby.png';

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
    textAlign: 'right', // 将文本对齐方式设置为右对齐
    paddingRight: '10%', // 适当调整右侧的边距
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
        <div className="absolute top-0 right-0 p-4 flex flex-col justify-center" style={textStyle}>
          <h1 className="text-8xl font-bold py-4">
            让 奇 迹 生 辉
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font py-4">
            —— 您 的 私 人 助 孕 管 家
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
