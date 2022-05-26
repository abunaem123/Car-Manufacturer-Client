
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Home/About/About';
import AddReview from './Components/Home/AddReview/AddReview';
import Blogs from './Components/Home/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Portfolio from './Components/Home/Portfolio/Portfolio';
import Reviews from './Components/Home/Reviews/Reviews';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import SIgnUp from './Components/SignUp/SIgnUp';
import RequireAuth from './Components/SingIn/RequireAuth';
import SignIn from './Components/SingIn/SignIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addreview' element={<AddReview></AddReview>}></Route>
        <Route path='/portfolio' element={
          <RequireAuth>
            <Portfolio></Portfolio>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SIgnUp></SIgnUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
