import './style.css';
import ProductItem from '../ProductItem/ProductItem';
import { useState, useEffect } from 'react';
import data from '../../../data.json';

function ProductList({ searchTerm, filter, selectedSellers, selectedRating }) {
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
        setProductList(data.books);
        // console.log('Product list:', data.books);
    }, []);

    
    const filteredProducts = productList.filter(product => {
        const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isCategoryMatch = filter ? (product.categories && product.categories.name.toLowerCase() === filter.toLowerCase()) : true;
        const isSellerMatch = selectedSellers.length > 0 ? selectedSellers.includes(product.current_seller.name) : true;
        const isRatingMatch = selectedRating.min <= product.rating_average && product.rating_average < selectedRating.max;

        return isNameMatch && isCategoryMatch && isSellerMatch && isRatingMatch;
    });

    // console.log('Filtered products:', filteredProducts);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // console.log('Current products:', currentProducts);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="product-container">
                <div className="product-list grid grid-cols-5 gap-2 mx-5">
                    {currentProducts.map((product, index) => (
                        <ProductItem key={index} product={product} />
                    ))}
                </div>
                
                <div className="pagination">
                    <ul className="product-list__pagination hideMb hideMd hideSm">
                        {pageNumbers.map(number => (
                            <li key={number} className="pagination-item">
                                <button className={number === currentPage ? "pagination-item__link active" : "pagination-item__link"} onClick={() => goToPage(number)}>
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductList;
