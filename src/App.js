import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import IDNavbar from './components/home';
//import Home from './components/home';
import {Col,FormGroup,Input,Label,Row,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'; 
import Home from './components/Home';





function App() {
  return (
   <div className='container' style={{paddingtop: '50px'}}>

 <Home/>
</div>

  )
}

export default App;
