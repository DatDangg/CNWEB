import './style.css';

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

function ProductItem({ product }) {
    const { name, rating_average} = product;
    const base_url = product.images[0]?.base_url;
    const quantitySoldText = product.quantity_sold?.text;
    const name_categorie = product.categories?.name;
    const discount = parseInt((1-(product.current_seller?.price / product.original_price)) *100,10);

    return (
        <>
            <div className="">
                <a href={`/${product.id}`} className='item-product p-1'>
                    <div className="item-product-img" style={{backgroundImage: `url(${base_url})`}}></div>
                    <div className="name-rate-sold">
                        <h3 className="item-product-name">{name}</h3>
                        <div className="rate-and-sold flex justify-start items-baseline">
                            <div className="item-product-rating">
                                {renderStarRating(rating_average)}
                            </div>
                            <div className="item-product-sold">{quantitySoldText}</div>
                        </div>
                    </div>
                    <div className="item-product-price py-2 mt-2">
                        <span className="item-product-price-current">
                            {product && product.original_price ? formatPrice(product.original_price) : '0' }<sup>đ</sup>
                        </span>
                        {discount !== 0 && (
                            <span className="item-product-price-discount">-{discount}%</span>
                        )}
                    </div>
                    <div className="item-product-categories text-center mt-6 pt-2">{name_categorie}</div>
                </a>
            </div>
        </>
    )
}

export default ProductItem;


