// import thư viện react và link 
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// import thư viện khác
import { styles } from "../styles";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // khai báo 3 biến trạng thái
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // xử lí sự kiện scroll
  useEffect(() => {
    // tạo một hàm xử lí sự kiện scroll
    const handleScrolled = () => {
      // gán giá trị scrolltop = giá trị của vị trí scroll
      const scrolltop = window.scrollY;
      // đặt giá trị của scrolled thành true
      if (scrolltop > 100) {
        setScrolled(true);
      } else {
      // ngược lại, đặt giá trị thành false
        setScrolled(false);
      }
    };
    // đăng kí hàm handleScrolled để xử lí sự kiện scroll
    window.addEventListener("scroll", handleScrolled);
    // hủy đăng kí khi component bị hủy
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    // thành phần Navbar

    <nav className={`${styles.paddingX
      } w-full flex items-center fixed py-5 top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
      }`}>


      {/* Menu của Navbar */}
      <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={
            () => {
              setActive("");
              window.scrollTo(0, 0)
            }

          }>
          {/* Chuyển hướng về trang chủ và thực hiện các hành động */}
          {/* - Đặt trạng thái "active" thành giá trị rỗng */}


          <img src="logo.png" alt="logo" className='w-9 h-9 object-contain' />

          <p className='text-white text-[18px] font-bold flex'>Duy &nbsp; <span className='sm:block hidden'>| BackEnd Newbie</span></p>

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>

          {navLinks.map((nav) => (
            
            <li
              key={nav.id}
              // key là định danh các phần tử trong list

              className={`${active === nav.title ? "text-white" : "text-secondary"}
              hover:text-white text-[18px] font-medium cursor-pointer`}

              onClick={() => setActive(nav.title)}>
                
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            
          ))}

        </ul>

        {/* thành phần toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>

          <img src={toggle ? close : menu} alt="menu" className='w-[28x] h-[28px] object-contain'
        
            onClick={() => setToggle(!toggle)} />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl`}
          >

            {/* đóng hoặc mở toggle */}
            <ul className='list-none flex justify-end flex-col flex-1 items-start gap-4 '>

              {navLinks.map((nav) => (

                <li

                  key={nav.id}
                  // key là định danh các phần tử trong list

                  className={`${active === nav.title ? "text-white" : "text-secondary"}
              hover:text-white text-[18px] font-medium cursor-pointer`}

                  onClick={
                    () => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}>

                  <a href={`#${nav.id}`}>{nav.title}</a>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;