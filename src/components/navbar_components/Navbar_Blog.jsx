import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOfficeContent } from '../../api';

const Navbar_Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // 初始显示的模块数量
  const blogsPerPage = 6; // 每次展开的模块数量
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getOfficeContent();
      console.log('Fetched data:', data);

      // 提取所有类别
      const allCategories = new Set();
      data.forEach(item => {
        item.attributes.categories.data.forEach(category => {
          allCategories.add(category.attributes.Name);
        });
      });

      const formattedData = data.map((item) => {
        const coverUrl = item.attributes.COVER?.data?.attributes?.url
          ? `https://strapi-ylzu3.ondigitalocean.app${item.attributes.COVER.data.attributes.url}`
          : 'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg';

        return {
          id: item.id,
          name: item.attributes.title,
          category: item.attributes.categories.data.map(cat => cat.attributes.Name),
          image: coverUrl,
          updatedAt: item.attributes.updatedAt
        };
      });

      setBlogs(formattedData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
      setFilteredBlogs(formattedData);
      setCategories(Array.from(allCategories));
    };

    fetchBlogs();
  }, []);

  // 根据类别筛选
  const filterType = (category) => {
    setFilteredBlogs(
      category === 'All'
        ? blogs
        : blogs.filter((item) => item.category.includes(category))
    );
    setDisplayCount(6); // 重置显示的模块数量
  };

  // 计算当前显示的模块
  const currentBlogs = filteredBlogs.slice(0, displayCount);

  // 展开更多模块
  const loadMoreBlogs = () => {
    setDisplayCount(prevCount => prevCount + blogsPerPage);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='font-bold text-4xl text-center mt-12'>最新博客</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between md:px-16'>
        <div>
          <p className='font-bold text-gray-700'>一种筛选条件</p>
          <div className='flex justify-between flex-wrap'>
            <button
              onClick={() => filterType('All')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterType(category)}
                className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display blogs */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 md:px-16'>
        {currentBlogs.map((item) => (
          <div
            key={item.id}
            className='card shadow-lg rounded-xl hover:scale-105 duration-300'
            onClick={() => navigate(`/Blog_example/Blank_burger/${item.id}`)}
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'http://localhost:1337/uploads/black_image.jpg';
                }}
              />
            </figure>

            <div className='card-body'>
              <h2 className='card-title'>
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Load more button */}
      {displayCount < filteredBlogs.length && (
        <div className='flex justify-center mt-12'>
          <button
            onClick={loadMoreBlogs}
            className='px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-700'
          >
            展开更多
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar_Blog;
