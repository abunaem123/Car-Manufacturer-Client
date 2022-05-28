import React, { useState } from 'react';
import ProductsData from '../../../hook/ProductsData/ProductsData';
import DeleteModal from '../../DeleteModal/DeleteModal';
import ShowProducts from '../../ShowProducts/ShowProducts';

const AllProducts = () => {
    const [products] = ProductsData();
    const [manageProduct, setManageProduct]=useState(null)
    return (
      <div className="px-12 py-12 ">
            <h2 className='text-3xl py-2 text-primary text-center font-bold'>Our Summary</h2>
        <div className="grid lg:grid-cols-1 gap-10">
            {products.map((product) => (
              <ShowProducts 
              product={product}
                key={product._id}
              ></ShowProducts>
            ))}
        </div>
        {manageProduct && <DeleteModal setManageProduct={manageProduct}></DeleteModal>}

        
      </div>
    );
  };
export default AllProducts;