import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // 管理主菜单的状态
  const [subDropdownOpen, setSubDropdownOpen] = useState(null); // 管理子菜单的状态

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
    setSubDropdownOpen(null); // 每次切换主菜单时重置子菜单状态
  };

  const toggleSubDropdown = (index) => {
    setSubDropdownOpen(subDropdownOpen === index ? null : index);
  };

  return (
    <div className='fixed flex justify-between items-center h-20 w-screen px-4 top-0 z-10 bg-white shadow-sm'>
      {/* 左侧Logo */}
      <Link to="/">
        <img src={logo} alt='Logo' className='h-[40px] md:w-full md:h-[55px] m-2' />
      </Link>

      {/* 右侧菜单 */}
      <ul className='hidden md:flex space-x-10 text-xl text-gray-800'>
        <li className='relative'>
          <button onClick={() => toggleDropdown(1)} className="hover:text-green-600 focus:outline-none">
            生殖医学解决方案 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
          </button>
          {dropdownOpen === 1 && (
            <ul className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 min-w-[200px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">生育力储存</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">试管婴儿</a></li>
              <li className='relative'>
                <button onClick={() => toggleSubDropdown(1.1)} className="block px-4 py-2 hover:bg-gray-100 focus:outline-none">
                  第三方辅助生殖 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
                </button>
                {subDropdownOpen === 1.1 && (
                  <ul className="absolute left-full top-0 bg-white shadow-md rounded-md min-w-[200px]">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">机构</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">咨询</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li><a href="#" className="hover:text-green-600">合作伙伴</a></li>
        <li className='relative'>
          <button onClick={() => toggleDropdown(2)} className="hover:text-green-600 focus:outline-none">
            关于我们 <span className="ml-1" style={{ fontSize: '0.75em' }}>▼</span>
          </button>
          {dropdownOpen === 2 && (
            <ul className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 min-w-[200px]">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">发展历程</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">智特荣誉</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">人才招募</a></li>
            </ul>
          )}
        </li>
        <li><Link to="/navbar_blog" className="hover:text-green-600">博客资讯</Link></li>
        <li className="pr-6"> {/* 添加右边距，增加与最右边窗口的距离 */}
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
            <img src={logo} alt='Logo' className='h-[40px] md:w-full md:h-[55px] m-2' />
          </Link>
        </li>
        <li className='mt-4'>
          <details open>
            <summary className='text-xl cursor-pointer'>生殖医学解决方案</summary>
            <ul className='pl-4'>
              <li><a href="#" className="block text-lg py-2">生育力储存</a></li>
              <li><a href="#" className="block text-lg py-2">试管婴儿</a></li>
              <li>
                <details open>
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
          <details open>
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
