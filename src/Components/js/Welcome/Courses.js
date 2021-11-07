import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Welcome/Courses.css'
import Carousel from '../Model/Carousel';
import Thumbnail1 from '../../../Images/sampl-img/1.jpg';
import Thumbnail2 from '../../../Images/sampl-img/2.jpg';
import Thumbnail3 from '../../../Images/sampl-img/3.jpg';
import Thumbnail4 from '../../../Images/sampl-img/4.jpg';
import Thumbnail5 from '../../../Images/sampl-img/5.jpg';
import Thumbnail6 from '../../../Images/sampl-img/6.jpg';
import Thumbnail7 from '../../../Images/sampl-img/7.jpg';
import Thumbnail8 from '../../../Images/sampl-img/8.jpg';
import Thumbnail9 from '../../../Images/sampl-img/9.jpg';
import Thumbnail10 from '../../../Images/sampl-img/10.jpg';
import Thumbnail11 from '../../../Images/sampl-img/11.jpg';
import Thumbnail12 from '../../../Images/sampl-img/12.jpg';




const Courses = () => {
    var lsdt=document.body.scrollTop;
    console.log(lsdt);
    return (
        <div className="Courses">
            <div className="Pro-info">
                <h2 className="info-pro">
                    Expand your career opportunities with Python
                </h2>
                <p className="data-repo">
                    Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was developed upon the premise that there should be only one way (and preferably one obvious way) to do things, a philosophy that has resulted in a strict level of code standardization. The core programming language is quite small and the standard library is also large. In fact, Python's large library is one of its greatest benefits, providing a variety of different tools for programmers suited for many different tasks.
                </p>
                <span className="explore">
                    <Link to="/products" >Explore Python</Link>
                </span>
            </div>

            <div id="carouselExampleIndicators" className="carousel carousels slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
              
               <div  className="carousel-inner outside">
                  <div className="carousel-item active">
                  <div className="inside" id="inside"> 
                  
                  <Carousel id={"shyam1"}  img={Thumbnail1}/>
                  <Carousel id={"shyam2"}  img={Thumbnail2}/>
                  <Carousel id={"shyam3"}  img={Thumbnail3}/>
                  <Carousel id={"shyam4"}  img={Thumbnail4}/>
                  <Carousel id={"shyam"} img={Thumbnail5}/>
                  </div>
                  </div>
                  <div className="carousel-item ">
                  <div className="inside " id="inside"> 
                  
                   
                  <Carousel id={"shyam1"}  img={Thumbnail6}/>
                  <Carousel id={"shyam2"}  img={Thumbnail7}/>
                  <Carousel id={"shyam3"}  img={Thumbnail9}/>
                  <Carousel id={"shyam4"}  img={Thumbnail8}/>
                  <Carousel id={"shyam"} img={Thumbnail10}/>
                  </div>
                  </div>
                  <div className="carousel-item">
                  <div className="inside" id="inside">

                  
                  <Carousel id={"shyam1"}  img={Thumbnail1}/>
                  <Carousel id={"shyam2"}  img={Thumbnail4}/>
                  <Carousel id={"shyam3"}  img={Thumbnail7}/>
                  <Carousel id={"shyam4"}  img={Thumbnail12}/>
                  <Carousel id={"shyam"} img={Thumbnail11}/>
                  </div>
                  </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <i class="fas fa-chevron-circle-left" aria-hidden="true"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next "  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <i class="fas fa-chevron-circle-right" aria-hidden="true"></i>
    <span className="visually-hidden">Next</span>
  </button>
            </div>
        </div>
    )
}

export default Courses
