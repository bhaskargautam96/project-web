import './App.css';
import NavAppBar from './components/NavAppBar';
import {BrowserRouter as Myrouter ,Routes,Route} from 'react-router-dom'
import Product from './components/Category';
import Home from './components/Home';
import AddCart from './components/AddCart';
import Details from './components/Details';
import './App.scss'
import Loginpage from './components/Loginpage';
import ErrorNotFound from './components/ErrorNotFound';
import RegisterForm from './components/RegisterForm';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <div className="App ">

        <Myrouter>
        <NavAppBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/product'element={<Product/>}/> */}
            <Route path='/cart'element={<AddCart/>}/>
            <Route path='/detail/:id' element={<Details/>}/>
            <Route path='/login' element={<Loginpage/>}/>
            <Route path='*' element={<ErrorNotFound/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/payment' element={<PaymentPage/>}/>

          </Routes>
        </Myrouter>
    </div>
  );
}

export default App;
