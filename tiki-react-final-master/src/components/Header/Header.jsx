import "./style.css";
import React, { useState } from "react";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="header">
      <div className="header-desktop" id="header">
        <div className="flex items-center py-2 pb-3 mb-2 row container-fluid">
          <div className="header__logo mr-4">
            <a href="/">
              <img src="../img/logo.png" alt="" className="header__logo-img" />
            </a>
          </div>
          <div className="header__search flex items-center border-2 rounded-md mx-4">
            <form action="" onSubmit={handleSubmit} className="header__search-form flex justify-between">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header__search-icon w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <input type="text" placeholder="Freeship giảm đến 30k" className="header__search-input mx-4" onChange={handleInputChange} />
              <button className="header__search-btn" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="header__home mx-5">
            <a href="/" className="header__home-link flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className="mx-1">Trang chủ</span>
            </a>
          </div>
          <div className="header__info mx-5 items-center">
            <i className="fa-regular fa-face-smile-wink"></i>
            <span className="mx-1">Tài khoản</span>
          </div>
          <div className="header__cart mx-4">
            <div className="header__cart-wrap">
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H13H18.79C19.9733 7 20.8978 8.02164 20.7801 9.19901L20.1801 15.199C20.0779 16.2214 19.2175 17 18.19 17H8.63961C7.68625 17 6.86542 16.3271 6.67845 15.3922L5 7Z" stroke="#4169E1" strokeWidth={2} strokeLinejoin="round" />
                <path d="M5 7L4.18937 3.75746C4.07807 3.3123 3.67809 3 3.21922 3H2" stroke="#4169E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 21H10" stroke="#4169E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 21H18" stroke="#4169E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile d-block bg-primary d-lg-none" id="header-mobile">
        <header className="header-container">
          <a href="/">
            <img className="button-SVG" alt="Button SVG" src="/img/button-svg.svg" />
          </a>
          <div className="button-hamburger">
            <div className="span" />
            <div className="span" />
            <div className="span" />
          </div>
          <div className="form">
            <img className="SVG" alt="Svg" src="/img/svg-87.svg" />
            <input type="text" className="input-search" placeholder="Bạn đang tìm kiếm gì" onChange={handleInputChange} />
          </div>
          <img className="link-cart-svg" alt="Link cart svg" src="/img/link-cart-svg.svg" />
        </header>
        <nav className="navbar">
          <div className="navbar-items">
            <a href="#" className="text">Phổ biến</a>
            <div className="dot" />
            <a href="#" className="text">Bán chạy</a>
            <div className="dot" />
            <a href="#" className="text">Hàng mới</a>
            <div className="dot" />
            <a href="#" className="text">Giá</a>
            <img className="SVG" alt="Svg" src="/img/svg-85.svg" />
          </div>
          <div className="horizontal-divide" />
          <div className="filter-now-container">
            <div className="filter-icon">
              <img className="filter" src="../img/svg-86.svg" alt="Filter Icon" />
              <div className="text">Lọc</div>
            </div>
            <div className="horizontal-divider" />
            <div className="sticky-filter">
              <img className="now" src="../img/802e2c99dcce64c67aa2648edb15dd25-png-12.png" alt="Now Icon" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
