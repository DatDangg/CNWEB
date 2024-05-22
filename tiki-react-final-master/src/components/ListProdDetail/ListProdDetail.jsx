import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import data from '../../../data.json';


function ListProdDetail() {
    const [productDetail, setProductDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const selectedProduct = data.books.find(product => product.id === id);
        setProductDetail(selectedProduct);
    }, [id]);

    return (
        <ProductDetail product={productDetail} />
    );
}

export default ListProdDetail;
