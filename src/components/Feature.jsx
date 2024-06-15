import React from 'react';
import IvfCell from '../assets/ivf_cell.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-8xl mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-3xl' src={IvfCell} alt='/' />
        <div className='flex flex-col px-4 pr-8 mr-8 my-4 '>
          <p className='text-custom-green font-bold'>咨询服务模式</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>智特竞争力</h1>
          <p>
          智特医疗（IVF USA）与美国专业生殖中心合作并提供一站式试管婴儿服务。
          选择美国试管婴儿领域专业医生、律师、第三方辅助生殖管理机构。
          一站式管家式服务打破传统中介服务利益链。
          提供就医、试管婴儿第三方辅助生殖、法律全程管理，只代表客户利益，提高第三方服务质量，帮助您尽早得子。
          </p>
          <button className='bg-[#f1e6c3] text-custom-green w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>了解更多</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
