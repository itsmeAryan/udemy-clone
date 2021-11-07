import React from 'react'
import '../../css/Welcome/Featured.css';
import { Link } from 'react-router-dom';
import One from '../../../Images/client/1.jpg'
import One2 from '../../../Images/client/2.jpg'
import One3 from '../../../Images/client/3.jpg';
import One4 from '../../../Images/logo/logo3.svg';
import l1 from '../../../Images/compnay/1.svg'
import l2 from '../../../Images/compnay/2.svg'
import l3 from '../../../Images/compnay/3.svg'
import l4 from '../../../Images/compnay/4.svg'
import l5 from '../../../Images/compnay/5.svg'


const Featured = () => {
    return (
        <>
             <div className="Featured">
           <h3 className="Feature-name">
           Featured topics by category
           </h3>
           <div className="feature-container">
               <div className="ramp">
                   <div className="ramp-title">Development</div>
                   <div className="compl">
                   <div className="py">
                       <Link className="/product">Python</Link>
                       <span>32,45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">Web Development</Link>
                       <span>32,45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">Business</Link>
                       <span>32,45,678 students</span>
                   </div>
                   </div>
               </div>
               <div className="ramp">
                   <div className="ramp-title">Business</div>
                   <div className="compl">
                   <div className="py">
                       <Link className="/product">Financial</Link>
                       <span className="df">32,45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">SQL</Link>
                       <span>45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">PMP</Link>
                       <span>378 students</span>
                   </div>
                   </div>
               </div> <div className="ramp">
                   <div className="ramp-title">IT and Software</div>
                   <div className="compl">
                   <div className="py">
                       <Link className="/product">Ethical Hacking</Link>
                       <span>678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">AWS Certification</Link>
                       <span>32,45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">cyber Security</Link>
                       <span>2,45,678 students</span>
                   </div>
                   </div>
               </div>
               <div className="ramp">
                   <div className="ramp-title">Design</div>
                   <div className="compl">
                   <div className="py">
                       <Link className="/product">Photoshop</Link>
                       <span>5,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">Graphic Design</Link>
                       <span>12,32,45,678 students</span>
                   </div>
                   <div className="py">
                       <Link className="/product">Drawing</Link>
                       <span>22,34,565 students</span>
                   </div>
                   </div>
               </div>
           </div>
         
           <span className="topics"><Link to="#d" style={{color:"white",textDecoration:"none"}}>Explore more topics</Link></span>
       </div>
    
            <div className="user-1">
                <div className="child-1">
                    <img src={One} alt="child-1" />
                </div>
                <div className="child-2">
                    <div className="data-child">
                        <div className="bsb">
                            <span className="big">Become an instructor</span>
                        </div>
                        <div className="baby">
                            <p className="data-tab">
                                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                            </p>
                        </div>
                        <div className="babseena">
                            <span className="child2-sn">

                                Starting teaching today
                            </span>
                        </div>

                    </div>
                </div>

            </div> 








             <div className="trusted">
                <div className="trust">
                    Trusted by companies of all sizes
                </div>
                <div className="img-tag0">
                    <span>
                        <img src={l1} alt="heu00" />
                    </span>
                    <span>
                        <img src={l2} alt="heu00" />
                    </span>
                    <span>
                        <img src={l3} alt="heu00" />
                    </span>
                    <span>
                        <img src={l4} alt="heu00" />
                    </span>
                    <span>
                        <img src={l5} alt="heu00" />
                    </span>

                </div>
            </div> 
         
<div className="jai">
    <div className="jai-1">
        <div className="jai1Data">
            <div className="jaiData-1">
                <img src={One4} />
            </div>
            <div className="jai-hyphon">
                <p className="hyphon">
                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                </p>
            </div>
            <div className="jai-games babseen"> 
            <span className="child-sn">Try Udemy Business</span></div>
        </div>
    </div>
    <div className="jai-2">
        <div className="jai2">
            <img className="deva" src={One2}/>
        </div >
    </div>

</div>


<div className="user-1">
                <div className="child-1">
                    <img src={One3} alt="child-1" />
                </div>
                <div className="child-2">
                    <div className="data-child">
                        <div className="bsb">
                            <span className="big">Become an instructor</span>
                        </div>
                        <div className="baby">
                            <p className="data-tab">
                                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                            </p>
                        </div>
                        <div className="babseena">
                            <span className="child2-sn">

                                Starting teaching today
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Featured
