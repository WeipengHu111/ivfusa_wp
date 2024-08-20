import React from 'react';
import timeline_bg from '../assets/component3.png';

export const Timeline = () => {
    const historyEvents = [
        {
          id: 1,
          year: '2010',
          name: '智特成立',
          description: '智特成立讲一个故事，张总创业',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
        },
        {
          id: 2,
          year: '2011',
          name: '第一个试管婴儿胚胎成型',
          description: '再讲一个打动人的故事 体现专业度',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
        },
        {
          id: 3,
          year: '2012',
          name: '张欣博士入选千人计划',
          description: '吹吹张总有多牛逼',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
        },
        {
          id: 4,
          year: '2013',
          name: '第一个智特宝宝通过辅助生殖技术降生',
          description: '再讲一个动人的故事',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
        },
        {
          id: 5,
          year: '2014',
          name: '智特医疗全国范围扩张',
          description: '全国各地哪年成立了哪些办公室',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
        },
        {
          id: 6,
          year: '2015',
          name: '第100个宝宝诞生',
          description: '继续讲故事',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
        },
        {
          id: 7,
          year: '2016',
          name: '携程战略投资',
          description: '仔细说说，引用携程梁建章采访',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
        },
        {
          id: 8,
          year: '2022',
          name: '全球拓展',
          description: '日本墨西哥生殖中心',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
        },
      ];



    return (
        <div className='bg-white'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pl-10 pt-10 pb-10'>智特历史</h1>
            
            <div 
                className="p-4 md:p-20 bg-cover min-h-[100vh] w-full md:bg-cover md:min-h-[180vh] md:w-full" 
                style={{ 
                    backgroundImage: `url(${timeline_bg})`, 
                    // backgroundSize: 'cover',  // 默认大屏幕背景图设置
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center', 
                    // minHeight: '180vh',  // 确保容器至少占满视口高度
                    // width: '100%',  // 宽度占满父级容器
                    // aspectRatio: '16/9',  // 强制容器保持一定的纵横比
                }}
            >
                {/* 这里是时间轴内容 */}
            </div>
        </div>
    );
};

export default Timeline;
