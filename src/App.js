import logo from './logo.svg';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
