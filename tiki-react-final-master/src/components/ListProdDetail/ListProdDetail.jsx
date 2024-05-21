import ProductDetail from "../ProductDetail/ProductDetal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import data from 'C:/Users/Admin/Downloads/tiki-react-final-master/tiki-react-final-master/data.json';


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
