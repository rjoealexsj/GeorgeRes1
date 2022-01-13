import logo from './logo.svg';
import './App.css';
import img1 from'./geo/jesus.jpg';

function App() {
  return (
   <div style={{backgroundColor:'black'}}>
     <h2 style={{color:'white'}}>Jesus 100px</h2>
     <img src={img1} style={{width:'100px'}} />

     <center> <h2 style={{color:'blue'}}>Jesus 100px</h2> 
     <img src={img1} style={{width:'200px', border:'20px solid yellow', borderRadius:'50%'}} />
     </center>

     <div style={{textAlign:'right'}}>
     <h2 style={{color:'red',fontSize:'120px'}}>Jesus 100px</h2>
     <img src={img1} style={{width:'300px',borderRadius:'20%'}} />
     </div>
     
     

   </div>
  )
}

export default App;
