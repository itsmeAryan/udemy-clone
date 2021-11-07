import React from 'react'
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

const Stuents = () => {
    return (
        <div className="studnets" id="shape">
            <h3 id="lol">Studnets are Viewing</h3>
            <div id="carouselExampleIndicatorsw" className="carousel carousels slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="active" aria-current="true" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 6"></button>
  </div>
              
               <div  className="carousel-inner outside">
                  <div className="carousel-item active">
                  <div className="inside" id="inside"> 
                  
                  <Carousel id={"shyam1"}    no={"none"}    img={Thumbnail1}/>
                  <Carousel id={"shyam2"}    no={"none"}    img={Thumbnail2}/>
                  <Carousel id={"shyam3"}    no={"none"}    img={Thumbnail3}/>
                  <Carousel id={"shyam4"}    no={"none"}    img={Thumbnail4}/>
                  <Carousel id={"shyam"}   no={"none"}    img={Thumbnail5}/>
                  </div>
                  </div>
                  <div className="carousel-item ">
                  <div className="inside " id="inside"> 
                  
                   
                  <Carousel id={"shyam1"}    no={"none"}    img={Thumbnail6}/>
                  <Carousel id={"shyam2"}    no={"none"}    img={Thumbnail7}/>
                  <Carousel id={"shyam3"}    no={"none"}    img={Thumbnail9}/>
                  <Carousel id={"shyam4"}    no={"none"}    img={Thumbnail8}/>
                  <Carousel id={"shyam"}    no={"none"}   img={Thumbnail10}/>
                  </div>
                  </div>
                  <div className="carousel-item">
                  <div className="inside" id="inside">

                  
                  <Carousel id={"shyam1"}    no={"none"}    img={Thumbnail1}/>
                  <Carousel id={"shyam2"}    no={"none"}    img={Thumbnail4}/>
                  <Carousel id={"shyam3"}    no={"none"}    img={Thumbnail7}/>
                  <Carousel id={"shyam4"}     no={"none"}   img={Thumbnail12}/>
                  <Carousel id={"shyam"}    no={"none"}   img={Thumbnail11}/>
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

export default Stuents
