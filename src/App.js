
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Inventory from './components/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';
import AllProducts from './components/AllProducts/AllProducts';
import Footer from './components/Footer/Footer';
import Update from './components/Update/Update';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<Update></Update>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <div className='sticky-footer'> 
      <Footer></Footer>
      </div>
     
     
    </div>
  );
}

export default App;
