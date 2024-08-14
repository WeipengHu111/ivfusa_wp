import React, { useState } from 'react';
import babyHands from '../assets/babyHands.jpg'; 
import ivf_cell from '../assets/ivf_cell.png';
import logo from '../assets/logo.png';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ProductInfo = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const steps = [
    {
      id: 'screen',
      title: '1. 卵巢评估',
      description: '国内当地医院检测...我们所做的一切皆为实现您对家庭未来的愿景。',
      image: babyHands,
    },
    {
      id: 'DrApt',
      title: '2. 远程会诊',
      description: '张欣博士陪同客户，与美国医生进行远程会诊...我们所做的一切皆为实现您对家庭未来的愿景。',
      image: ivf_cell,
    },
    {
        id: 'cupai',
        title: '3. 启动促排',
        description: '根据医生会诊结果和医嘱启动促排计划，药品邮递家中...',
        image: babyHands,
      },
      {
        id: 'retrieval',
        title: '4. 赴美取卵',
        description: '启程赴美，当地办事处员工接送机并陪同就诊，翻译...',
        image: ivf_cell,
      }
  ];

  const toggleActiveProduct = (id) => {
    setActiveProduct(activeProduct === id ? null : id);
  };

  return (
    <div className='flex flex-col'>
      {/* 流程演示标题放在黄色背景的上方 */}
      <div className='p-16'>
        <h1 className='text-5xl font-bold text-left mb-0'> 流程演示 </h1>
      </div>

      {/* 黄色背景内容部分 */}
      <div className='flex flex-col justify-center md:p-16 p-4 my-auto bg-diyLightYellow'>
        
        <div className="w-full flex flex-col md:flex-row max-w-70 m-12 mb-14 items-center self-center rounded-xl bg-white">
            <div className="md:text-center w-full md:basis-1/3 m-6">
            {steps.map((step) => (
                <div key={step.id} className="m-6 pb-4 border-b-2 border-gray-300">
                    <div className="text-3xl text-left font-semibold">
                        <div className="flex flex-row justify-between cursor-pointer mb-2" onClick={() => toggleActiveProduct(step.id)}>
                            {step.title}
                            {activeProduct === step.id ? <AiOutlineUp size={25}/> : <AiOutlineDown size={25}/>}
                        </div>
                    </div>
                    {activeProduct === step.id && (
                    <div className="flex flex-col">
                        <p className="text-sm md:text-base text-left">{step.description}</p>
                        <img src={step.image} alt={step.title} className="block md:hidden rounded-lg pt-6" />
                    </div>
                    )}
                </div>
            ))}
            </div>

            <div className="hidden md:w-2/3 md:flex m-6 justify-center">
            
            {activeProduct ? (
                <img src={steps.find(step => step.id === activeProduct).image} alt="Active Step" className="rounded-3xl shadow-lg" />
            ) : (
                <img src={logo} alt="Default Logo" className="rounded-3xl" />
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
