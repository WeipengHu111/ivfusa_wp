import React, { useState, useEffect } from 'react';
import { FaTiktok } from 'react-icons/fa';
import { AiFillWeiboSquare, AiFillWechat, AiOutlineQq } from "react-icons/ai";

const Footer = () => {
  const [iconSize, setIconSize] = useState(60);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(80);
      } else if (window.innerWidth >= 768) {
        setIconSize(30);
      } else {
        setIconSize(30);
      }
    };

    // 初始化设置图标大小
    updateIconSize();

    // 添加窗口大小变化监听
    window.addEventListener('resize', updateIconSize);

    // 清除监听器
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  return (
    <div className='w-full bg-[#8C5C43] text-[#D2B79C]'>
      <div className='max-w-[1800px] mx-auto px-5 lg:pt-5 lg:px-0 md:pt-5 md:px-10 sm:px-10 sm:pt-5 flex flex-col md:flex-row justify-between items-start space-x-30'>
        
        {/* 左边部分 */}
        <div className='grid grid-cols-3 gap-0 2xl:gap-60 md:gap-0 lg:gap-0 md:px-10 lg:px-16'>
          <div className='md:text-lg sm:text-sm px-5 md:py-0 py-2 '>
            <ul>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>解决方案</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>冻卵冻精</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>试管婴儿</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>辅助生殖</li>
            </ul>
          </div>
          <div className='md:text-lg sm:text-sm px-5 md:py-0 py-2 '>
            <ul>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>关于智特</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>公司历程</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>博客咨询</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>加入我们</li>
            </ul>
          </div>
          <div className='md:text-lg sm:text-sm px-5 md:py-0 py-2 '>
            <ul>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>法律隐私</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>法律声明</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>隐私政策</li>
              <li className='py-2 md:py-6 lg:py-10 lg:text-2xl'>条款</li>
            </ul>
          </div>
        </div>

        {/* 右边部分 */}
        <div className='flex flex-col items-start sm:item-center sm:justify-center transform scale-100 md:scale-90 lg:scale-75 md:py-24 '>
          <h1 className='text-4xl  md:text-5xl lg:text-8xl h-10 sm:h-12 md:h-16 lg:h-24 tracking-widest leading-tight sm:leading-tight md:leading-loose font-serif mx-auto text-white bg-[#73ba00] p-1 rounded-md mb-5 flex items-center justify-center'>
          IVF USA
          </h1>
          <div className='flex space-x-6 md:space-x-8 lg:space-x-12 mb-4 md:mb-5 lg:mb-6 ml-4 sm:ml-0'>
            <AiOutlineQq size={iconSize} />
            <FaTiktok size={iconSize} />
            <AiFillWechat size={iconSize} />
            <AiFillWeiboSquare size={iconSize} />
          </div>
          <p className='text-base md:text-2xl lg:text-3xl ml-4 sm:ml-0'>电话：400-648-3872</p>
        </div>
      </div>

      {/* 底部版权声明 */}
      <div className='max-w-[1800px] mx-auto px-5 lg:py-0 lg:px-0 md:py-0 md:px-10 sm:px-10 sm:py-0 flex flex-col md:flex-row justify-between items-start space-x-30'>
        <p className='ml-4 sm:ml-0 text-sm md:text-base lg:text-lg md:px-14 lg:px-20 pb-2 md:pb-4 lg:pb-16 text-[#D2B79C]'>
          上海智特生物科技有限公司 版权所有
        </p>
      </div>
      <div className='ml-4 sm:ml-0 px-5 sm:px-10 lg:px-20 md:px-24 xl:px-8 xl:w-10/12 xl:mx-auto'>
        <div className='border-t-2 border-[#D2B79C] lg:py-6 py-2 lg:px-0 sm:py-4 sm:px-0'>
          <div className='max-w-[2400px] mx-auto flex flex-col md:flex-row justify-between'>
            <p className='text-xs md:text-base'>
            Copyright©1999-2024, sinamd.com All rights reserved.
            </p>
            <p className='text-xs md:text-base text-left md:text-right pb-4'>
            ICP备案号：1234567890
            </p>
          </div>

        </div>
       </div>
    </div>
  );
};

export default Footer;
