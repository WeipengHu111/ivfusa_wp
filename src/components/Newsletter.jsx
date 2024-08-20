import React from 'react';
import newsletter from '../assets/newsletter.png';  // 确保这个路径是正确的

const Newsletter = () => {
  return (
    <div className='w-full py-0 px-0 bg-diyPeach'>
      <div className='mx-auto grid lg:grid-cols-2 gap-8 items-center'>
        {/* 左侧部分，包含图片 */}
        <div className="w-full">
          <img 
            src={newsletter}  // 使用变量引用图片URL
            alt="描述图片内容" 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </div>

        {/* 右侧部分，包含文本和输入框 */}
        <div className='space-y-0'>
        <h1 className='text-2xl 2xl:text-6xl xl:text-5xl md:text-4xl sm:text-3xl text-center font-bold py-4 md:py-10 text-[#4A4A4A]'>
          了解更多生殖辅助相关内容?
        </h1>
        <p className='text-[#4A4A4A] text-center text-sm lg:text-3xl md:text-xl sm:text-lg pb-4 pr-4 md:pb-16'>
          填写您的邮箱加入我们的通讯名单，随时了解最新内容
        </p>
        
        <div className='flex flex-col p-3 md:p-5 sm:flex-row items-center justify-center max-w-2xl mx-auto w-full'>
          <input
            className='pl-3 py-3 pr-10 md:pl-4 md:pr-56 md:py-4 w-auto text-base md:text-xl max-w-xs rounded-md text-white border border-gray-300 bg-transparent placeholder-gray-500'
            type='email'
            placeholder='填写邮箱'
          />
          <div className='py-2 sm:py-4 px-4 '></div>
          <button className='bg-[#F9B300] text-white text-base md:text-xl px-8 py-2 md:px-14 md:py-4 max-w-sm w-auto rounded-md font-medium bg-opacity-80'>
            加入
          </button>
        </div>
        
        <p className='mt-4 text-[#4A4A4A] text-center text-sm pt-4 lg:text-3xl md:text-xl sm:text-lg pb-4 md:pb-16'>
          我们注重您的隐私，了解我们的{' '}
          <span className='text-diyDarkBrown text-sm lg:text-3xl md:text-xl sm:text-lg pb-4 md:pb-16'>隐私政策。</span>
        </p>
      </div>
      
      </div>
      <div className='mb-6 md:mb-14 '></div>
    </div>
  );
};

export default Newsletter;
