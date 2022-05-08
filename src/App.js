import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';
import AllProducts from './components/AllProducts/AllProducts';
import Footer from './components/Footer/Footer';
import Update from './components/Update/Update';
import AddItem from './components/AddItem/AddItem';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import MyItems from './components/MyItems/Myitems/MyItems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/inventory/:id" element={ <RequireAuth><Update></Update></RequireAuth> }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/allProducts"
          element={<RequireAuth><AllProducts></AllProducts></RequireAuth>}
        ></Route>
        <Route path='/signup' element={<SignUp></SignUp>}> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/additem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <div className="sticky-footer">
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
