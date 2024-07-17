import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOfficeContent } from '../api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]); // 用于保存所有的博客数据
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // 每页显示的博客模块数量
  const navigate = useNavigate();
  const blogRef = useRef(null); // 用于获取Blog组件的顶部位置

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getOfficeContent();
      console.log('Fetched data:', data); // 输出获取到的数据

      const formattedData = data.map((item) => {
        const coverUrl = item.attributes.COVER?.data?.attributes?.url
          ? `http://localhost:1337${item.attributes.COVER.data.attributes.url}`
          : 'http://localhost:1337/uploads/black_image.jpg';

        const categories = item.attributes.categories.data.map(category => category.attributes.Name);

        return {
          id: item.id,
          name: item.attributes.title,
          category: categories,
          image: coverUrl,
          updatedAt: item.attributes.updatedAt
        };
      });

      // 根据updatedAt排序，从新到旧
      const sortedData = formattedData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

      // 提取所有类别
      const allCategories = sortedData.reduce((acc, item) => {
        item.category.forEach(cat => {
          if (!acc.includes(cat)) {
            acc.push(cat);
          }
        });
        return acc;
      }, []);

      setBlogs(sortedData);
      setAllBlogs(sortedData); // 保存所有的博客数据
      setCategories(allCategories);
    };

    fetchBlogs();
  }, []);

  // 计算总页数
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // 获取当前页的博客模块
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // 根据类别筛选
  const filterType = (category) => {
    if (category === '') {
      setBlogs(allBlogs); // 重置为全部数据
    } else {
      const filteredBlogs = allBlogs.filter((item) => item.category.includes(category));
      setBlogs(filteredBlogs);
    }
    setCurrentPage(1); // 重新筛选后重置到第一页
  };

  // 切换页数
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth' }); // 滚动到Blog组件的顶部
    }
  };

  return (
    <div ref={blogRef} className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='font-bold text-4xl text-center'>最新博客</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between md:px-16'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>一种筛选条件</p>
          <div className='flex justify-between flex-wrap'>
            <button
              onClick={() => filterType('')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
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
                  e.target.onerror = null; // 防止无限循环
                  e.target.src = 'http://localhost:1337/uploads/black_image.jpg'; // 替换为全黑图片 URL
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

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1
                ? 'bg-custom-green text-white'
                : 'bg-white text-custom-green'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
