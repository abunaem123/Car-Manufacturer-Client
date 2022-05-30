
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMyItem from './Components/Dashboard/Dashboard/AddMyItem';
import AllProducts from './Components/Dashboard/AllProducts/AllProducts';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ManageProducts from './Components/Dashboard/ManageProducts/ManageProducts';
import About from './Components/Home/About/About';
import AddReview from './Components/Home/AddReview/AddReview';
import Blogs from './Components/Home/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Portfolio from './Components/Home/Portfolio/Portfolio';
import Reviews from './Components/Home/Reviews/Reviews';
import Purchase from './Components/Purchase/Purchase';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import SIgnUp from './Components/SignUp/SIgnUp';
import RequireAuth from './Components/SingIn/RequireAuth';
import SignIn from './Components/SingIn/SignIn';
import MyProfile from './Components/Dashboard/MyProfile';
import RequireAdmin from './Components/SingIn/RequireAdmin';
import AllOrder from './Components/Dashboard/AllOrder';
import Users from './Components/Dashboard/Users';
import MyOrders from './Components/Dashboard/MyOrders';
import Payment from './Components/Purchase/Payment'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}> </Route>
        <Route path='product/:productId' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
        }></Route>
        <Route path='/payment/:paymentId' element={<Payment></Payment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        } >


          <Route index element={<MyProfile></MyProfile>}></Route>

          {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> */}
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>


          <Route path="allorders" element={<AllOrder />}></Route>

          <Route path="manageproducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddMyItem></AddMyItem></RequireAdmin>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>


        </Route>

        
        <Route path='/addmyitem' element={<AddMyItem></AddMyItem>}></Route>
        {/* <Route path='/manageproducts'element={<ManageProducts></ManageProducts>}></Route> */}
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SIgnUp></SIgnUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
