import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) { // 这里可以根据需要调整触发滚动的偏移量
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed flex justify-between items-center h-20 w-screen px-4 top-0 z-10 bg-white shadow-sm 
      ${scrolled ? 'bg-[#f1e6c3]/90' : 'bg-transparent'}`}>
      
      {/* 左侧Logo */}
      <Link to="/">
        <img src={logo} alt='Logo' className='h-[40px] w-full m-2' />
      </Link>

      {/* 右侧菜单（桌面端） */}
      <ul className='hidden md:flex space-x-10 text-xl text-gray-800'>
        <li className='relative'>
          <button className="hover:text-green-600 focus:outline-none">
            生殖医学解决方案 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
          </button>
          <ul className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 min-w-[200px] hidden group-hover:block">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">生育力储存</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">试管婴儿</a></li>
            <li className='relative'>
              <button className="block px-4 py-2 hover:bg-gray-100 focus:outline-none">
                第三方辅助生殖 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
              </button>
              <ul className="absolute left-full top-0 bg-white shadow-md rounded-md hidden group-hover:block">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">机构</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">咨询</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#" className="hover:text-green-600">合作伙伴</a></li>
        <li className='relative'>
          <button className="hover:text-green-600 focus:outline-none">
            关于我们 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
          </button>
          <ul className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 min-w-[200px] hidden group-hover:block">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">发展历程</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">智特荣誉</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">人才招募</a></li>
          </ul>
        </li>
        <li><Link to="/navbar_blog" className="hover:text-green-600">博客资讯</Link></li>
        <li className="pr-6">
          <AiOutlinePhone size={30} className="hover:text-green-600" />
        </li>
      </ul>

      {/* 移动端菜单按钮 */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} color="black" /> : <AiOutlineMenu size={30} color="black" />}
      </div>

      {/* 移动端侧边栏 */}
      <ul className={`fixed top-0 left-0 w-[70%] h-full bg-white shadow-md p-4 transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <li className='flex items-center border-b pb-2'>
          <Link to="/" onClick={handleNav}>
            <img src={logo} alt='Logo' className='h-[40px] w-full m-2' />
          </Link>
        </li>
        <li className='mt-4'>
          <details close>
            <summary className='text-xl cursor-pointer'>生殖医学解决方案</summary>
            <ul className='pl-4'>
              <li><a href="#" className="block text-lg py-2">生育力储存</a></li>
              <li><a href="#" className="block text-lg py-2">试管婴儿</a></li>
              <li>
                <details close>
                  <summary className='text-lg cursor-pointer'>第三方辅助生殖</summary>
                  <ul className='pl-4'>
                    <li><a href="#" className="block text-lg py-2">机构</a></li>
                    <li><a href="#" className="block text-lg py-2">咨询</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li className='text-xl border-t-2 mt-3 pt-3'><a href="#" className="block text-lg py-2">合作伙伴</a></li>
        <li className='border-t-2 mt-3 pt-3'>
          <details close>
            <summary className='text-xl cursor-pointer'>关于我们</summary>
            <ul className='pl-4'>
              <li><a href="#" className="block text-lg py-2">发展历程</a></li>
              <li><a href="#" className="block text-lg py-2">智特荣誉</a></li>
              <li><a href="#" className="block text-lg py-2">人才招募</a></li>
            </ul>
          </details>
        </li>
        <li className='text-xl border-t-2 mt-3 pt-3'><Link to="/navbar_blog" className="block text-lg py-2">博客资讯</Link></li>
        <li className='text-xl border-t-2 mt-3 pt-3'><a href="#" className="block text-lg py-2">联系我们</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
