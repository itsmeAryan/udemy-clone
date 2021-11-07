import React,{useState} from 'react'
import '../../css/PRoduct/Comments.css';
import { Link } from 'react-router-dom';
import LP from '../../../Images/k.jpg';
import OP from '../../../Images/trend/2.jpg'
import OP2 from '../../../Images/trend/5.jpg';
import Carsold from '../Search/Carsold';

const Comments = () => {
    const [hido,sethido]=useState("none");
    const [dato,setdato]=useState("Show More");
var jai=true;
const Talker=()=>{
    if(jai){
        setdato("Show less");
        sethido("block")
        jai=false;
    }else{
        sethido("none");
        setdato("Show more")
        jai=true;
    }
}
    return (
      <>
      <div className="comments">

                             

                               
                           
              <div className="Commentors">
                  <div className="emojies">
                      <span>
                      <img src={LP} alt="avtar" />

                      </span>
                  </div>
                  <div className="commenst-emoji">
                      <div className="commentname">Robin</div>
                      <div className="rok56">
                          <div className="cosl45">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>

                          </div>
                          <span>a week ago</span>
                      </div>
                      <div className="myTitle">
                          

I only know basic programming and this course has taught me how to read python codes, essential as my work in finance is undergoing so much automation.
                      </div>
                      <span className="s5at">Was this review helpful?</span>
                      <div className="Rwos">
                          <div className="mega">
                              <div className="chock">
                              <span class="material-icons" id="apple">
                                    thumb_up_off_alt
                                </span>
                              </div>
                              <div className="chock">
                              <span class="material-icons" id="appleB">
                                    thumb_down_off_alt
                                </span>
                              </div>

                          </div>
                          <span className="jessica"><Link to="/">Report</Link></span>
                      </div>
                  </div>
              </div>
<div className="radhika" id="radhe" style={{display:hido}}>

<div className="Commentors">
                  <div className="emojies">
                      <span>
                      <img src={LP} alt="avtar" />

                      </span>
                  </div>
                  <div className="commenst-emoji">
                      <div className="commentname">Robin</div>
                      <div className="rok56">
                          <div className="cosl45">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>

                          </div>
                          <span>a week ago</span>
                      </div>
                      <div className="myTitle">
                          

I only know basic programming and this course has taught me how to read python codes, essential as my work in finance is undergoing so much automation.
                      </div>
                      <span className="s5at">Was this review helpful?</span>
                      <div className="Rwos">
                          <div className="mega">
                              <div className="chock">
                              <span class="material-icons" id="apple">
                                    thumb_up_off_alt
                                </span>
                              </div>
                              <div className="chock">
                              <span class="material-icons" id="appleB">
                                    thumb_down_off_alt
                                </span>
                              </div>

                          </div>
                          <span className="jessica"><Link to="/">Report</Link></span>
                      </div>
                  </div>
              </div>


</div>
              <div onClick={Talker} className="jaadugar">
                  {dato}
              </div>
      </div>
      {/* more courses by you */}
      <div className="idea0">
          <h2>More Courses by <Link to="/">Jose Martina</Link></h2>
          <div className="murio">
           <Carsold id={"goku"}/>
           <Carsold id={"goku1"}/>
           <Carsold id={"goku2"}/>

          </div>
          <div className="Reporto0">
              Report abuse
          </div>
      </div>
      </>
    )
}

export default Comments
