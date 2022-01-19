import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from'../hospital/logo.png';
import img1 from'../hospital/slide1.jpg';
import img2 from'../hospital/slide2.jpg';
import img3 from'../hospital/slide3.jpg';
import img4 from'../hospital/about.jpg';

export default class Homenew extends Component {
    render() {
        return (
            <div>
                 <div>
                <div style={{background:'#3fbbc0', color:'white',lineHeight:'40px',fontWeight:'bold'}} id="topbar" classNameName="d-flex align-items-center fixed-top">
    <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
      <div className="align-items-center d-none d-md-flex">
        <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
      </div>
    </div>
    </div>
    <div
    id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

    <a href="index" className="logo me-auto"> <img src={img}></img> </a>
    
      <h1 className="logo me-auto"><a href="index.html">Medicio</a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
          <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

    </div>

  </div>
            
            
            </div>
          

              <div id="hero">
              <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          
               
          
                  
                  <div className="carousel-item active" style={{backgroundImage: "url(" + img1 + ")"}} >
                    <div className="container">
                      <h2>Welcome to <span>Medicio</span></h2>
                      <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                      <a href="#about" className="btn-get-started scrollto">Read More</a>
                    </div>
                  <div>
          
                  
                  <div className="carousel-item" style={{backgroundImage: "url(" + img + ")"}} >
                    <div className="container">
                      <h2>Lorem Ipsum Dolor</h2>
                      <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                      <a href="#about" className="btn-get-started scrollto">Read More</a>
                    </div>
                  </div>
          
                
                  <div className="carousel-item" style={{backgroundImage: "url(" + img + ")"}}>
                    <div className="container">
                      <h2>Sequi ea ut et est quaerat</h2>
                      <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                      <a href="#about" className="btn-get-started scrollto">Read More</a>
                    </div>
                  </div>
          
              
          
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
          
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
          
              </div>
              </div>
            </div>
            

          </div>
          


              <div id="featured-services" className="featured-services">
              <div className="container" data-aos="fade-up">
        
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                      <div className="icon"><i className="fas fa-heartbeat"></i></div>
                      <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                      <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon"><i className="fas fa-pills"></i></div>
                      <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                      <div className="icon"><i className="fas fa-thermometer"></i></div>
                      <h4 className="title"><a href="">Magni Dolores</a></h4>
                      <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                  </div>
        
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                      <div className="icon"><i className="fas fa-dna"></i></div>
                      <h4 className="title"><a href="">Nemo Enim</a></h4>
                      <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>
        
                </div>
        
              </div>
            </div>


        
            
             

        

         </div> 
        )
    }
}
