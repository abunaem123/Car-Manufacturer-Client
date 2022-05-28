// // stripe Promise
// const stripePromise = loadStripe('pk_test_QOevMnSLL8eDpoje0ba2eje900gogsgu4N');

// const Payment = () => {
//     const { paymentId } = useParams();
//     const [product, setProduct] = useState({});
//     const [res, setRes] = useState({});

//     useEffect(() => {
//       const url = `http://localhost:5000/product/${paymentId}`;
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setProduct(data));
//     }, [paymentId, res]);
//     const { name, picture, price, quantity,} = product;

//     /* const { data: product, isLoading } = useQuery(['booking', paymentId], () => fetch(url, {
//         method: 'GET',
//         headers: {
//             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res => res.json()));

//     if (isLoading) {
//         return <Loading/>
//     }
//    */
//     return (
//       <div className="px-12">
//         <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
//           <div>
//             <figure>
//               <img className="w-48" src={product.picture} alt="iPhone" />
//             </figure>
//             <h2 className="card-title text-2xl">{product.name}</h2>
//             <p ><b>Order Quantity :</b> {product.quantity}</p>
//             <p className=""><b>Price : $</b>{product.price}</p>
//           </div>

//           <div>
//           <Elements stripe={stripePromise}>
//       <CheckoutForm product={product} />
//     </Elements>
//           </div>
          
//         </div>
//       </div>
//     );
// };
// export default Payment;