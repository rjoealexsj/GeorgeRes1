import React, { Component } from 'react'
import img from '../geo2/georgestand.jpg';

export default class styleexample extends Component {
    render() {
        return (
            <div>
               <center>
              <img src={img} style={{ width:'500px',borderRadius:'100px', border:'solid 15px black' }}/>
            <br/>

            <div style={{backgroundColor:'pink', width:'300px', border:'solid 15px red',borderStyle:'dotted'}}>
             <br/> <h1 style={{color:'black', fontWeight:'900',fontStyle:'italic'}}> George Victor </h1>
             <h4 style={{fontSize:'x-large',color:'blue', rotation:'angle', borderStyle:'dotted'}}>
             <br/>Gujarat Province
             <br/>Vidyajyoti Residence
             <br/>Vidyajyoti College
             <br/>Raj Niwas Marg
             <br/>Civil Lines
             <br/>New Delhi
             <br/>India
             <br/>704653446
             </h4>
             </div>
           


              </center>
             


                

            

            </div>
        )
    }
}
