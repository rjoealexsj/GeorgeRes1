import logo from './logo.svg';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.css';
//import 'aos/dist/aos.css';
import 'font-awesome/css/font-awesome.css';
//import 'swiper/swiper.css';

import IDNavbar from './components/IDNavbar';
//import Home from './components/home';
import {Col,FormGroup,Input,Label,Row,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'; 
import Home from './components/Home';
import Homenew from './components/Homenew';
import Styleexample from'./components/Styleexample';
import SliderCarousel from'./components/SliderCarousel';




function App() {
  return (
   <div className='container' style={{paddingtop: '50px'}}>
{/*<IDNavbar/>*/}



 <Homenew/>
 <SliderCarousel/>


 {/*<Styleexample/>*/}
  {/*<Home/>*/}
 
</div>


  )
}

export default App;
