import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsData from "../../hook/ProductsData/ProductsData";
import DeleteModal from "../DeleteModal/DeleteModal";

const ShowProducts = ({ product,setManageProduct }) => {
  const {
    _id,
    img,
    name,
    short_description,
    price,
    quantity,
    minimum_quantity,
  } = product;

  const [products, setproducts] = ProductsData();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setproducts(remaining);
        });
    }
  };

  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-60" src={img} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <p className="card-text font-bold">Quantity : {quantity}</p>
            <p className="card-text font-bold">
              Minimum Order Quantity : {minimum_quantity}
            </p>
            <p className="card-text font-bold">Price : ${price}</p>
            <p className="card-text pb-4">{short_description}</p>
        <div class="card-actions justify-end">
        
              <label 
              onClick={() => setManageProduct(product)}
              for="delete-modal" class="btn bg-primary font-bold border-none text-white">DELETE PRODUCT</label>

        </div>
      </div>
    </div>
    // ===================== 
    // <div>
    //   <div class="card card-side grid lg:grid-cols-1 bg-base-100 shadow-xl">
    //     <div>
    //       <figure>
    //         <img src={img} alt="Movie" />
    //       </figure>
    //     </div>
    //     <div>
    //       <div class="card-body">
    //         <h2 className="card-title text-xl">{name}</h2>
    //         <p className="card-text font-bold">Quantity : {quantity}</p>
    //         <p className="card-text font-bold">
    //           Minimum Order Quantity : {minimum_quantity}
    //         </p>
    //         <p className="card-text font-bold">Price : ${price}</p>
    //         <p className="card-text pb-4">{short_description.slice(0, 75)}</p>
    //         <div className="card-actions ">
    //           <button
    //             className="btn btn-primary w-full"
    //             onClick={() => handleDelete(_id)}
    //           >
    //             DELETE PRODUCT
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShowProducts;
