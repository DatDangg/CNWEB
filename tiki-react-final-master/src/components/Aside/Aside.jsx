import './style.css';
import { useState } from 'react';

function Aside({ onFilterChange, onSellerChange, onRatingChange }) {
    const [selectedSellers, setSelectedSellers] = useState([]);

    const handleSellerChange = (event) => {
        const { id, checked } = event.target;
        const updatedSellers = checked
            ? [...selectedSellers, id]
            : selectedSellers.filter(seller => seller !== id);
        setSelectedSellers(updatedSellers);
        onSellerChange(updatedSellers);
    };

    const handleRatingChange = (minRating) => {
        const maxRating = getMaxRating(minRating);
        onRatingChange(minRating, maxRating);
    };

    const getMaxRating = (minRating) => {
        return minRating + 1;
    };

    return (
        <div className="aside w-2/12 hideMb hideMd hideSm">
            <div className="aside__heading flex items-center mb-2">
                <a href='/' className="aside__heading-home">Trang chủ</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-next w-4 h-4 mx-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <a href="/" className="aside__heading-next-content">Nhà sách Tiki</a>
            </div>
            <div className="aside__main">
                <div className="aside__main-products">
                    <h2>Danh mục sản phẩm</h2>
                    <ul className="aside__main-products-list">
                        <li className="aside__main-products-item">
                            <a href="#" onClick={() => onFilterChange('English books')}>English book</a>
                        </li>
                        <li className="aside__main-products-item">
                            <a href="#" onClick={() => onFilterChange('Sách tiếng Việt')}>Sách tiếng Việt</a>
                        </li>
                        <li className="aside__main-products-item">
                            <a href="#" onClick={() => onFilterChange('Văn phòng phẩm')}>Văn phòng phẩm</a>
                        </li>
                        <li className="aside__main-products-item">
                            <a href="#" onClick={() => onFilterChange('Quà lưu niệm')}>Quà lưu niệm</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__main-vendor">
                    <h2>Nhà cung cấp</h2>
                    <ul className="aside__main-vendor-list">
                        <li className="aside__main-vendor-item">
                            <input type="checkbox" id="Nhà sách Fahasa" onChange={handleSellerChange} />
                            <label htmlFor="Nhà sách Fahasa">Nhà sách Fahasa</label>
                        </li>
                        <li className="aside__main-vendor-item">
                            <input type="checkbox" id="Bamboo Books" onChange={handleSellerChange} />
                            <label htmlFor="Bamboo Books">Bamboo Books</label>
                        </li>
                        <li className="aside__main-vendor-item">
                            <input type="checkbox" id="Time Book" onChange={handleSellerChange} />
                            <label htmlFor="Time Book">Time Book</label>
                        </li>
                        <li className="aside__main-vendor-item">
                            <input type="checkbox" id="Nhà sách Online" onChange={handleSellerChange} />
                            <label htmlFor="Nhà sách Online">Nhà sách Online</label>
                        </li>
                        <li className="aside__main-vendor-item">
                            <input type="checkbox" id="VBooks" onChange={handleSellerChange} />
                            <label htmlFor="VBooks">VBooks</label>
                        </li>
                    </ul>
                </div>
                <div className="aside__main-rating">
                    <h2>Đánh giá</h2>
                    <div className="aside__main-rating--detail" onClick={() => handleRatingChange(5)}>
                        <div className="aside__main-rating--listStar">
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                        </div>
                        <span>Từ 5 sao</span>
                    </div>
                    <div className="aside__main-rating--detail" onClick={() => handleRatingChange(4)}>
                        <div className="aside__main-rating--listStar">
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <span>Từ 4 sao</span>
                    </div>
                    <div className="aside__main-rating--detail" onClick={() => handleRatingChange(3)}>
                        <div className="aside__main-rating--listStar">
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>
                            <i className="star-gold fa-solid fa-star"></i>                              
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <span>Từ 3 sao</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;
