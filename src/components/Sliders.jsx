import React from 'react';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import babyHands from '../assets/newbaby.png';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';

const Sliders = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 344;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 344;
  };

  return (
    <div className='relative flex flex-col h-screen md:h-full justify-center md:pl-4 bg-diyLightYellow'>
      <h1 className='text-4xl font-bold mt-16 ml-8 mb-16'>了解智特</h1>
      <div className='relative flex items-center w-full'>
        <div id='slider' className='w-full pl-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage:`url(${slider1})` }}
            onClick={()=>document.getElementById('my_modal_slider1').showModal()}
          >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold p-0'>携程战略投资</h1>
              <p className='text-lg'>指定服务商</p>
            </div>
            
              <dialog id="my_modal_slider1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">携程战略投资</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={slider1} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
          </div>

          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage:  `url(${slider2})` }}
            onClick={()=>document.getElementById('my_modal_slider2').showModal()}
          >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold'>全球化布局</h1>
              <p className='text-lg'>专业团队"一站式"服务</p>
            </div>
            <dialog id="my_modal_slider2" className="modal w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">全球化布局</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={slider2} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
          </div>
          
          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage: `url(${slider3})` }}
            onClick={()=>document.getElementById('my_modal_slider3').showModal()}
            >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold'>专家严格评估</h1>
              <p className='text-lg'>高效，私密，法律保护</p>
            </div>
            <dialog id="my_modal_slider3" className="modal w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">专家严格评估</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={slider3} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
            </dialog>
          </div>
          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage: `url(${slider4})` }}
            onClick={()=>document.getElementById('my_modal_slider4').showModal()}
            >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold'>非中介模式</h1>
              <p className='text-lg'>代表客户利益</p>
            </div>
            <dialog id="my_modal_slider4" className="modal w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">非中介模式</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={slider4} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
            </dialog>
          </div>
          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}
            onClick={()=>document.getElementById('my_modal_slider5').showModal()}
            >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold'>海外服务团队</h1>
              <p className='text-lg'>了解当地风情，提供特色服务</p>
            </div>
            <dialog id="my_modal_slider5" className="modal w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">海外服务团队</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={babyHands} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
            </dialog>
          </div>
          <div 
            className="bg-cover relative h-[500px] w-[300px] md:h-[500px] md:w-[300px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-[1px]"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}
            onClick={()=>document.getElementById('my_modal_slider6').showModal()}
          >
            <div className="absolute top-10 left-4 text-left overflow-hidden">
              <h1 className='text-2xl font-bold'>自建生殖中心筹备中</h1>
              <p className='text-lg'>敬请期待...</p>
            </div>
            <dialog id="my_modal_slider6" className="modal w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">日本，墨西哥自建生殖中心筹备中</h3>
                  <p className="py-4">详细介绍我们的这个特点，展开说说，配图</p>
                  <img className='mx-auto' src={babyHands} alt='/' />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end pr-10 mb-8'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-3' onClick={slideLeft} size={40} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </div>
  );
};

export default Sliders;
