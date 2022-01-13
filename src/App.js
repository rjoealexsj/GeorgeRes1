import logo from './logo.svg';
import './App.css';
import img1 from'./geo2/georgestand.jpg';
import img2 from'./geo/jesus.jpg';
import img3 from'./geo2/george.jpg';



function App() {
  return (
   <div style={{backgroundColor:'black'}}>
     <h2 style={{color:'white'}}>Jesus 100px</h2>
     <img src={img1} style={{width:'100px'}} />

     <center> <h2 style={{color:'blue'}}>Jesus 100px</h2> 
     <img src={img2} style={{width:'200px', border:'20px solid yellow', borderRadius:'50%'}} />
     </center>

     <div style={{textAlign:'right'}}>
     <h2 style={{color:'red',fontSize:'120px'}}>Jesus 100px</h2>
     <img src={img3} style={{width:'300px',borderRadius:'20%'}} />
     </div>
      <h2 style={{color:'blue'}}>Jesus 100px</h2> 
     <img src={img3} style={{width:'350px', border:'20px solid green', borderRadius:'40%'}} />
     
    
      
   </div>

  )
}

export default App;
