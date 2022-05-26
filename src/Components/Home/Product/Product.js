import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, price, short_description, quantity } = product;
  const navigate = useNavigate();
  const handleNavigateToProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="">
      {/* <div className="card ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h4 className="card-title">{name}</h4>
                    <p><b>Price: </b>{price}</p>
                    <p className="card-text">{short_description.slice(0,100)}</p>
                    <p><b>Quantity: </b>{quantity}</p>
                </div>
                <div className="card-footer">
                    <button className='product-btn btn btn-primary' onClick={() => handleNavigateToProduct(_id)}>Delivery</button>
                </div>
            </div> */}

        <div className="card lg:max-w-lg shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-start">
                <h2 className="card-title">{name}</h2><p><b>Price:</b> {price}</p>
                <p><b>Quantity</b>{quantity}</p>
                <p>{short_description.slice(0,75)}</p>
                <div className="card-actions">
                    <button onClick={() => handleNavigateToProduct(_id)} className="btn btn-block bg-primary border-0 text-white font-bold my-2">purchase</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Product;
