import './style.css';

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function ProductItem({ product }) {
    const { name, rating_average, list_price, delivery } = product;
    const base_url = product.images[0]?.base_url;
    const quantitySoldText = product.quantity_sold?.text;
    const name_categorie = product.categories?.name;
    const discount = Math.floor(Math.random() * 100) + 1;
    const link = product.current_seller.link;

    return (
        <>
            <div className="">
                <a href={`/${product.id}`} className='item-product p-1'>
                    <div className="item-product-img" style={{backgroundImage: `url(${base_url})`}}></div>
                    <div className="name-rate-sold">
                        <h3 className="item-product-name">{name}</h3>
                        <div className="rate-and-sold flex justify-start items-baseline">
                            <div className="item-product-rating">
                                {[...Array(5).keys()].map(index => (
                                    <i key={index} className={`fa-solid fa-star ${index < rating_average ? 'star-gold' : 'star-gray'}`}></i>
                                ))}
                            </div>
                            <div className="item-product-sold">{quantitySoldText}</div>
                        </div>
                    </div>
                    <div className="item-product-price py-2 mt-2">
                        <span className="item-product-price-current">{formatPrice(list_price)}<sup>đ</sup></span>
                        <span className="item-product-price-discount">-{discount}%</span>
                    </div>
                    <div className="item-product-categories text-center mt-6 pt-2">{name_categorie}</div>
                </a>
            </div>
        </>
    )
}

export default ProductItem;
