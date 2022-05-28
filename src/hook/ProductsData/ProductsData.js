import React, { useEffect, useState } from 'react';

const ProductsData = () => {
    
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/product/')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product, setProduct]);
    return [product, setProduct]
  };

export default ProductsData;