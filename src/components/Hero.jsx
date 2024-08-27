import { useRef, useEffect, useState } from 'react';

const easeOutQuad = (t) => 1 - (1 - t) * (1 - t); // 改进缓动函数

const useSmoothScroll = () => {
  const [offsetY, setOffsetY] = useState(0);
  const scrollRef = useRef(offsetY);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const textCenterPosition = windowHeight / 2;

      const newOffsetY = scrollPosition < textCenterPosition ? scrollPosition : textCenterPosition;
      if (newOffsetY !== scrollRef.current) {
        scrollRef.current = newOffsetY;
      }
    };

    const smoothScroll = () => {
      setOffsetY((prevOffsetY) => {
        const delta = scrollRef.current - prevOffsetY;
        if (Math.abs(delta) > 0.5) {
          return prevOffsetY + delta * easeOutQuad(0.1); // 调整参数
        }
        return scrollRef.current;
      });
      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offsetY;
};

const Hero = () => {
  const offsetY = useSmoothScroll();

  const textStyle = {
    transform: `translateY(calc(100vh - ${offsetY}px))`, // 使用 translateY 替代 translate3d
    textAlign: 'right',
    paddingRight: '10%',
    willChange: 'transform',
  };

  return (
    <div style={{ height: '170vh' }}>
      <div
        style={{
          background: `url(${require('../assets/newbaby.png')}) no-repeat`,
          backgroundSize: 'cover',
          height: '100vh',
          position: 'sticky',
          top: '0',
        }}
      >
        <div className="absolute top-0 right-0 p-4 flex flex-col justify-center" style={textStyle}>
          <h1 className="text-5xl md:text-8xl font-bold py-4">让 奇 迹 生 辉</h1>
          <p className="text-2xl sm:text-2xl md:text-4xl font py-4">—— 您 的 私 人 助 孕 管 家</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
