import React, { useState, useEffect } from 'react';
import { data } from '../../mockData/blogData.js';

const BlogPage = () => {
  const [blogs, setBlogs] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('博客类别'); // 初始按钮文本为 'Categories'

  // 获取所有的categories
  const categories = ['全部', ...new Set(data.map((item) => item.category))];

  // 根据屏幕宽度调整每页显示的博客数量
  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth < 768) { // sm 以下屏幕
        setBlogsPerPage(3);
      } else {
        setBlogsPerPage(6);
      }
    };

    // 初始调用
    updateBlogsPerPage();

    // 在窗口大小改变时更新
    window.addEventListener('resize', updateBlogsPerPage);

    // 清除事件监听器
    return () => {
      window.removeEventListener('resize', updateBlogsPerPage);
    };
  }, []);

  // 获取当前页的博客
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // 计算总页数
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // 筛选类别
  const filterType = (category) => {
    setSelectedCategory(category); // 将按钮文本设置为选中的类别
    if (category === '全部') {
      setBlogs(data);
    } else {
      setBlogs(data.filter((item) => item.category === category));
    }
    setCurrentPage(1); // 重置到第一页
    setIsDropdownOpen(false); // 隐藏下拉菜单
  };

  // 翻页功能
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 bg-white'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl ml-6 md:pb-5 font-bold pt-12 md:pt-20'>最新博客</h1>

      {/* 筛选条件 */}
      <div className='relative flex my-4'>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='m-1 px-4 py-2 bg-[#f3bf3c] text-white ml-5 rounded-md hover:bg-opacity-90 min-w-[120px]' // 设置最小宽度以固定按钮大小
            style={{ minWidth: '120px' }} // 确保按钮的宽度固定
          >
            {selectedCategory} {/* 动态显示按钮文本 */}
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <ul className="py-1 text-gray-700">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => filterType(category)}
                      className='block px-4 py-2 w-full text-left hover:bg-[#F9B300] hover:text-white'
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 显示博客 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 px-4 md:px-16'>
        {currentBlogs.map((item, index) => (
          <div
            key={index}
            className='card shadow-lg rounded-xl hover:scale-105 duration-300 bg-white'
          >
            <figure>
              <div className='w-full'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-auto max-h-24 md:max-h-60 object-cover rounded-t-lg' // 确保图片自适应高度，且设置最大高度
                />
              </div>
            </figure>
            <div className='card-body p-4'>
              <h2 className='card-title text-lg font-bold'>{item.name}</h2>
              <p>文章的简介: {item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 分页按钮 */}
      <div className='flex justify-center mt-8'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1
                ? 'bg-[#F9B300] text-white'
                : 'bg-white text-[#F9B300] hover:bg-[#F9B300] hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
