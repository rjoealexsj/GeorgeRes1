import React, { Component } from 'react'
import {Col,FormGroup,Input,Label,Row,ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor:'pink'}}>

                   <div className='text-center p-4 bg-primary'>
       <h1 style={{color:'black', background:'yellow', border:'10px solid black', fontWeight:'900',fontStyle:'italic'}}>JESUIT RESIDENCE</h1>
       </div>
       <FormGroup style={{overflow:"visible", paddingTop:'50px'}} >
   <Row style={{marginBottom:'20px'}}>

     <Col xs={3} lg={2}>
     <Label for="username">Name:</Label>
     </Col>
     <Col xs={9} lg={4}>
         <Input type="text"placeholder='Enter Your Name' value=""/>
         </Col>
         <Col xs={3} lg={2}>
       <Label for="username">Password:</Label>
       </Col>
       <Col xs={9} lg={4}>
         <Input type="Password"placeholder='Enter Your Password' value=""/>
         </Col>

         </Row>

         <Row style={{marginBottom:'20px'}}>

     <Col xs={3} lg={2}>
       <Label for="username">Email:</Label>
       </Col>
       <Col xs={9} lg={4}>
         <Input type="text"placeholder='Enter Your Email' value=""/>
         </Col>
         <Col xs={3} lg={2}>
       <Label for="username">Phone Number:</Label>
       </Col>
       <Col xs={9} lg={4}>
         <Input type="text"placeholder='Enter Your Phone Number' value=""/>
         </Col>

         </Row>

         <Row style={{marginBottom:'20px'}}>

     <Col xs={3} lg={2}>
       <Label for="province">Province:</Label>
       </Col>
       <Col xs={9} lg={4}>
         <Input type="text"placeholder='Enter Your Province' value=""/>
         </Col>
         <Col xs={3} lg={2}>
       <Label for="dob">Date of Birth:</Label>
       </Col>
       <Col xs={9} lg={4}>
         <Input type="text" placeholder='Enter Your Date of Birth' value=""/>
         </Col>

         </Row>
         <Row style={{marginBottom:'20px'}}>

     <Col xs={3} lg={2}>
       <Label for="blood">Blood Group:</Label>
       </Col>
       <Col xs={9} lg={4}>
       <Input type="text" placeholder='Enter Your Blood Group' value=""/>
       </Col>
       <Col xs={3} lg={2}>
       <Label for="roomno">Room Number</Label>
       </Col>
       <Col xs={9} lg={4}>
       <Input type="text" placeholder='Enter Your Room Number' value=""/>
         </Col>

         </Row>
         </FormGroup>
         <div className='taxt-center'>
           {/*<button className='btn' style={{border: '2px solid blue'}}>submit</button>*/}
           <button className='btn' style={{border: '2px solid blue',display:'none'}}>submit</button>
</div>
<ButtonDropdown
  toggle={function noRefCheck(){}}
>
  <DropdownToggle caret>
    Button Dropdown
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem disabled>
      Action
    </DropdownItem>
    <DropdownItem>
      Another Action
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Another Action
    </DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
  
            </div>
        )
    }
}
