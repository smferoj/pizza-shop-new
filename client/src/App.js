import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Policy from './components/Policy';
import TopBar from './components/TopBar';
// import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
   
 <BrowserRouter>
 
 <TopBar/>
 <NavBar/>
 <Routes>
  <Route path='/about' element={<About/>}  />
  <Route path='/contact' element={<Contact/>}  />
  <Route path='/policy' element={<Policy/>}  />
  <Route path='/' element={<HomeScreen/>}/>
 </Routes>
 
 </BrowserRouter>
      
      
  );
}

export default App;

