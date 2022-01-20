import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from'../hospital/logo.png';
import img1 from'../hospital/slide1.jpg';
import img2 from'../hospital/slide2.jpg';
import img3 from'../hospital/slide3.jpg';
import img4 from'../hospital/about.jpg';
import img5 from'../hospital/features.jpg';
import img6 from'../hospital/departments1.jpg';
import img7 from'../hospital/departments2.jpg';
import img8 from'../hospital/departments3.jpg';
import img9 from'../hospital/departments4.jpg';
import img10 from'../hospital/departments5.jpg';
import testimonials1 from'../hospital/testimonials-1.jpg';
import testimonials2 from'../hospital/testimonials-2.jpg';
import { Input } from 'reactstrap';


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
          
                  
                  <div className="carousel-item" style={{backgroundImage: "url(" + img2 + ")"}} >
                    <div className="container">
                      <h2>Lorem Ipsum Dolor</h2>
                      <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
                      <a href="#about" className="btn-get-started scrollto">Read More</a>
                    </div>
                  </div>
          
                
                  <div className="carousel-item" style={{backgroundImage: "url(" + img3 + ")"}}>
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

            <div id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>In an emergency? Need help now?</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
        </div>

      </div>
    </div>
    <div id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={img4} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </div>


    <div id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-user-md"></i>
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>

              <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="far fa-hospital"></i>
              <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-flask"></i>
              <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-award"></i>
              <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

        </div>

      </div>
      </div>



      <div id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: "url(" + img5 + ")"}}  data-aos="zoom-in"> </div>
        </div>
        </div>
        </div>


        <div id="services" className="services services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-heartbeat"></i></div>
            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-pills"></i></div>
            <h4 className="title"><a href="">Dolor Sitema</a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-hospital-user"></i></div>
            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-dna"></i></div>
            <h4 className="title"><a href="">Magni Dolores</a></h4>
            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-wheelchair"></i></div>
            <h4 className="title"><a href="">Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-notes-medical"></i></div>
            <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
          </div>
        </div>
         </div>
    </div>


    <div id="appointment" className="appointment section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-md-4 form-group">
              <Input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <Input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <Input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required/>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select">
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Make an Appointment</button></div>
        </form>

      </div>
    </div>


    <div id="departments" className="departments">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Departments</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                  <h4>Cardiology</h4>
                  <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                  <h4>Neurology</h4>
                  <p>Voluptas vel esse repudiandae quo excepturi.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                  <h4>Hepatology</h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>Pediatrics</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <h3>Cardiology</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src={img5} alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-2">
                <h3>Neurology</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src={img6} alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-3">
                <h3>Hepatology</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src={img7} alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>Pediatrics</h3>
                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                <img src={img8} alt="" className="img-fluid"/>
                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div id="testimonials" className="testimonials"/>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={testimonials1} className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>


            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={testimonials2} className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            </div>
            </div>
            </div>














        
            
             

        

         </div> 
        )
    }
}
