import React from 'react';
import nathan from '../assets/nathan_new.png';
import qrcode from '../assets/qrcode.jpg';
import bg_banner from '../assets/nathan_banner.png'; // 导入背景图片

const Nathan = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-24 bg-white">
      <style>
        {`
          @media (max-width: 1280px) {
            .nathan-title {
              font-size: 1.75rem; /* 在lg以下的标题文本大小 */
            }
            .nathan-subtitle {
              font-size: 1rem; /* 在lg以下的副标题文本大小 */
            }
            .nathan-text {
              font-size: 1rem; /* 在lg以下的段落文本大小 */
            }
            .nathan-button {
              font-size: 1rem; /* 在lg以下的按钮文本大小 */
            }
          }
          @media (max-width: 640px) {
            .nathan-title {
              font-size: 1.25rem; /* 在lg以下的标题文本大小 */
            }
            .nathan-subtitle {
              font-size: 0.75rem; /* 在lg以下的副标题文本大小 */
            }
            .nathan-text {
              font-size: 0.75rem; /* 在lg以下的段落文本大小 */
            }
            .nathan-button {
              font-size: 1rem; /* 在lg以下的按钮文本大小 */
            }
          }
        `}
      </style>
      <div className="flex flex-col lg:flex-row items-start gap-7 text-black mt-14">
        <div className="relative self-center">
          <img className='w-[300px] sm:w-[500px] md:w-[500px] lg:w-[1500px] h-auto mx-auto' src={nathan} alt="Founder" />
        </div>
        <div className="flex-grow py-2 mx-0 w-full"> 
          <h1 className="nathan-title text-5xl font-bold tracking-widest leading-loose">张欣博士<br/>
          千人计划特聘专家<br/>
          </h1>
          <h2 className="nathan-subtitle text-3xl mt-3 mb-1 tracking-widest leading-loose">
            科技部海外创新创业人才专家<br/>
            ASRM美国生殖协会理事<br/>
            医药经济报中国医药行业新领袖人物。<br/>
            中国医疗集团有限公司(HK:08225)独立董事
          </h2>
          <p className="nathan-text text-2xl pt-10 tracking-widest leading-loose">
            ■ 天津医科大学8年制临床医学博士 <br/>
            ■ 宾夕法尼亚大学药理学博士<br/>
            ■ 芝加哥大学工商管理硕士<br/>
            ■ 拥有多项生物技术专利。其学术论文曾多次发表于Nature<br/>
            ■ 历任瑞士信贷第一波士顿，KPMG(毕马威)高级咨询师，DELIRIUM(颠睿科技公司)总经理<br/>
            ■ 2001年参与创立深圳微芯生物(SHA:688321)并任总裁，主持两种药物进入 II 期临床研究<br/>
            ■ 2004年创立Sinocro Partners公司，操作沈阳三生制药纳斯达克上市(2013年私有化)，成为中国生物医药在美第一股<br/>
            ■ 2008年开始关注生殖医疗领域，从事引进生殖医疗器械<br/>
            ■ 2010年创立智特生物，任总经理兼首席医疗顾问至今，专注生殖医疗咨询<br/>
          </p>
        </div>
      </div>
      <div className="md:h-24"></div>  {/* This will create a 4rem (64px) space */}
      <div
        style={{
          backgroundImage: `url(${bg_banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '1rem',
          padding: '1rem',
          margin: '1rem auto',
        }}
        className="w-full h-full flex flex-col md:flex-row items-center justify-center "
      >
        <div className="py-8 px-6 mx-auto max-w-screen-xl sm:py-8 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="nathan-title mb-4 text-5xl font-extrabold leading-tight text-diyLightBrown tracking-widest">
              张欣博士生殖医学科普直播
            </h2>
            <p className="nathan-subtitle mb-4 md:mb-10 font-normal text-diyLightBrown md:text-4xl tracking-widest">
              每周日晚9点微信直播，一对一咨询
            </p>
            <button className="nathan-button btn bg-transparent rounded-full font-normal text-2xl px-10 text-diyLightBrown border-diyLightBrown border-2" onClick={() => document.getElementById('my_modal_2').showModal()}>
              观看渠道
            </button>
            <dialog id="my_modal_2" className="modal w-full">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">放个大点的二维码</p>
                <img className='mx-auto' src={qrcode} alt='QR Code' />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nathan;
