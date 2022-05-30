import React, { useEffect, useState } from 'react';

const ProductsData = () => {
    
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
        fetch('https://gentle-dawn-71731.herokuapp.com/product/')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product, setProduct]);
    return [product, setProduct]
  };

export default ProductsData;