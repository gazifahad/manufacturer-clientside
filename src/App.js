import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js/Home';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Purchase from './Components/Purchase/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';
import NotFound from './Components/NotFound';
import Myportfolio from './Components/MyPortfolio/Myportfolio';
import Blog from './Components/Blog/Blog';
import MyOrders from './Components/Dashboard/MyOrders';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import AddProduct from './Components/Dashboard/AddProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import ManageProducts from './Components/Dashboard/ManageProducts';
import ReqiureAuth from './Components/Login/RequireAuth';
import RequireAdmin from './Components/Login/RequireAdmin';
import Payment from './Components/Purchase/Payment';


function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='purchase/:id' element={<ReqiureAuth><Purchase></Purchase></ReqiureAuth>}></Route>
        <Route path='payment/:orderId' element={<ReqiureAuth><Payment></Payment></ReqiureAuth>}></Route>
        <Route path='dashboard' element={<ReqiureAuth><Dashboard></Dashboard></ReqiureAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='manageorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
