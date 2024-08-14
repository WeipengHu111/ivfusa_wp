import React, { useState } from 'react';
import consulting_service from '../assets/consulting_service.png';

const Services = () => {
  return (
    <div className='flex flex-col min-h-screen w-full md:px-16 p-4 mt-0'>
      <h1 className='w-full max-w-90 text-5xl font-bold mt-12 self-center text-left'> 咨询服务 </h1>
      <div className='max-w-90 w-full m-auto py-8 md:py-16 relative group'>
        
        {/* Single Clickable Image */}
        <div className='flex justify-center'>
          <img 
            src={consulting_service} 
            alt="Clinic" 
            className='w-max h-auto cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl'
            onClick={() => document.getElementById('image_modal').showModal()}
          />
        </div>
        
        {/* Modal Dialog */}
        <dialog id="image_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-3xl">视频</h3>
            <p className="py-4">这是点击视频后显示的弹出窗口内容。</p>
            <img className='mx-auto' src={consulting_service} alt='Modal Content' />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default Services;
