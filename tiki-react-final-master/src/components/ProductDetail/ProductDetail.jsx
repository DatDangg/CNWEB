import './style.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Payment from '../Payment/Payment'; // Import the Payment component

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderStarRating(rating) {
    const numFullStars = Math.floor(rating);
    const lastStarPercentage = (rating - numFullStars) * 100;

    return (
        <>
            {[...Array(numFullStars).keys()].map(index => (
                <i key={index} className="fa-solid fa-star star-gold"></i>
            ))}
            {lastStarPercentage > 0 && (
                <i className="fa-solid fa-star star-gold" style={{ clipPath: `inset(0 ${(100 - lastStarPercentage)}% 0 0)` }}></i>
            )}
        </>
    );
}

function ProductDetail({product}) {
    const [hoverImage, setHoverImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [unitPrice, setUnitPrice] = useState(0);
    const [listImage, setListImage] = useState([]);
    const [totalCost, setTotalCost] = useState([]);
    const [showPayment, setShowPayment] = useState(false); // State to manage Payment component visibility

    const currentPrice = product.current_seller ? product.current_seller.price : 0;
    const discount = product.original_price ? parseInt((1 - (currentPrice / product.original_price)) * 100, 10) : 0;

    const handleHoverImage = (image) => {
        setHoverImage(image);
    };
    const handleClick = (image) => {
        setSelectedImage(image);
    };
    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        const newTotalCost = newQuantity * unitPrice;
    
        setQuantity(newQuantity);
        setTotalCost(newTotalCost);
    };
    
    const handleReduce = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            const newTotalCost = newQuantity * unitPrice;
    
            setQuantity(newQuantity);
            setTotalCost(newTotalCost);
        }
    };
    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            const images = product.images.map(image => image.large_url);
            setListImage(images);
            setUnitPrice(product.original_price);
            const currentPrice = product.current_seller ? product.current_seller.price : product.original_price;
            const newTotalCost = quantity * currentPrice;
            setTotalCost(newTotalCost);
        }
    }, [product, quantity]);

    const handleBuyNow = () => {
        setShowPayment(true);
    };

    const handleClosePayment = () => {
        setShowPayment(false);
    };
    
    return (
        <>
            <Header />
            <div className="product-detail gap-x-8 flex">
                <div className="w-3/12">
                    <div className="product-detail__left">
                        <div className="product-detail__left-image">
                            <div className="product-detail__left-image--main active" >
                                <img src={hoverImage || selectedImage || listImage[0]} alt="" />
                            </div>
                            <div className="product-detail__left-image--block">
                                <ul className="product-detail__left-image-list">
                                    {listImage.map((image, index) => (
                                        <li key={index} 
                                            className="product-detail__left-image-item"
                                            onMouseEnter={() => handleHoverImage(image)}
                                            onMouseLeave={() => handleHoverImage(null)}
                                            onClick={() => handleClick(image)}
                                        >
                                                <img
                                                    src={image}
                                                    alt=""
                                                    className={`product-detail__left-image-second ${
                                                    selectedImage === image ? "active" : ""
                                                    }`}
                                                />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="special-features">
                            <h3>Đặc điểm nổi bật</h3>
                            <ul className="special-features-list">
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</span>
                                </li>
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</span>
                                </li>
                                <li className="special-features-item">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span className="special-features-text">Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</span>
                                </li>
                            </ul>
                        </div>
                        <div className='special-features-more flex mt-4'>
                            <img src='../img/cskh.png' className='special-features-more-img mr-2'></img>
                            <span className='special-features-more-text-gray' >Xem thêm</span>
                            <span className='special-features-more-text ml-1' >Tóm tắt nội dung sách</span>
                            <img src='../img/more.png' className='special-features-more-img ml-12'></img>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 px-4">
                    <div className="product-detail__center">
                        <div className="center__heading">
                            <div className="verify-and-author flex items-baseline">
                                <div className="verify flex items-center ">
                                    <i className="special-features-icon fa-solid fa-circle-check"></i>
                                    <span>Chính hãng</span>
                                </div>
                                <div className="author flex items-center">
                                    <span className="author__title">Tác giả: </span>
                                    <a href='/' className="author__name-link">{product && product.authors ? product.authors[0].name : ""}</a>
                                </div>
                            </div>
                            <h1 className="product__name">{ product && product.name ? product.name : 'N/A'  }</h1>
                            <div className="rate-and-sold flex items-baseline">
                                <div className="rating">
                                    <span className="rate-star">{product && product.rating_average ? product.rating_average : '0'}</span>
                                        {renderStarRating(product && product.rating_average ? product.rating_average : 0)}
                                    <span className="quantity-star">(928)</span>
                                </div>
                                <div className="sold">
                                    <span className="sold-quantity">{ product && product.quantity_sold ? product.quantity_sold.text : '0'  }</span>
                                </div>
                            </div>
                            <div className="price-and-discount flex items-baseline">
                            <span className="price"> {product && product.original_price ? formatPrice(product.original_price) : '0'} <sup>đ</sup>
                            </span>
                            {discount !== 0 && (
                                <span className="item-product-price-discount">-{discount}%</span>
                            )}

                            </div>
                        </div>
                        <div className="center__body mt-6">
                            <div className="info-detail">
                                <div className="info-detail__title">Thông tin chi tiết</div>
                                <div className="info-detail__product flex flex-col">
                                { product && product.specifications && product.specifications.length > 0 ? product.specifications[0].attributes.map(item => (
                                    <div className="info-detail__product-item" key={item.name}>
                                        <span>{item.name}</span>
                                        <span>{item.value}</span>
                                    </div>
                                )) : ''}
                                </div>
                            </div>
                            <div className="prod-desc mt-12">
                                <div className="prod-desc__title mb-4">Mô tả sản phẩm</div>
                                <img src={listImage.length > 0 ? listImage[0] : ''} alt="" className="prod-desc__img mb-6" />
                                <div dangerouslySetInnerHTML={{ __html: product && product.description ? product.description : '' }} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12">
                    <div className="product-detail__right">
                        <div className="quantity-book mb-6">
                            <p>Số Lượng</p>
                            <div className="group-input">
                                <button className={quantity > 1 ? "" : "disable"} onClick={handleReduce}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon" width="20" height="20"/></button>
                                <input type="text" value={quantity} className="input" onChange={(e) => setQuantity(e.target.value)}></input>
                                <button onClick={handleIncrease}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon" width="20" height="20"/></button>
                            </div>
                        </div>
                        <div className="total-cost">
                        <p>Tạm tính</p>
                            <div className="price">{formatPrice(totalCost)}<sup>đ</sup></div>
                        </div>
                        <div className="buy">
                            <button className="buying" onClick={handleBuyNow}>Mua ngay</button>
                            <button className="add-to-cart">Thêm vào giỏ hàng</button>
                            <button className="before-buy-after-pay">Mua sau khi thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
            {showPayment && <Payment product={product} quantity={quantity} onClose={handleClosePayment} />} {/* Display Payment component */}
            <Footer />                                       
        </>
    )
}

export default ProductDetail;
