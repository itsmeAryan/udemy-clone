import React, { useState } from 'react'
import '../../css/PRoduct/Content.css';
import { Link } from 'react-router-dom';
import l1 from '../../../Images/compnay/1.svg'
import l2 from '../../../Images/compnay/2.svg'
import l3 from '../../../Images/compnay/3.svg'
import l4 from '../../../Images/compnay/4.svg'
import l5 from '../../../Images/compnay/5.svg'
const Content = () => {
    //set user data
    const [stat,setStat]=useState("12 more sections");
    // hide and show data
    var love = true;
    const Toggle = () => {
        var show=document.getElementById("show");
        if (love) {
            show.style.display="block";
            setStat("show less")
            love = false;
        } else {
            show.style.display="none";
setStat("12 more sections")
            love = true;
        }
    }
    return (
        <>
            <div className="courseF">
                <h3>Course content</h3>
                <div className="len-section">
                    <p>23 sections.155lecture
                        .22h 13m total length</p>
                    <span className="expo">
                        <Link to="/">Expand all sections</Link>
                    </span>
                </div>
                <div className="car">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Course Overview
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Environment Set-up
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                   Jupyter Overview
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="martin" id="show">


                       


                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingkasfk">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsekasfk" aria-expanded="false" aria-controls="collapsekasfk">
                                   Real world program with python
                                </button>
                            </h2>
                            <div id="collapsekasfk" class="accordion-collapse collapse" aria-labelledby="headingkasfk" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTfsdf">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTfsdf" aria-expanded="false" aria-controls="collapseTfsdf">
                                strings in python
                                </button>
                            </h2>
                            <div id="collapseTfsdf" class="accordion-collapse collapse" aria-labelledby="headingTfsdf" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                      
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingkfsdf">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsekfsdf" aria-expanded="false" aria-controls="collapseTwo">
                               python literals
                                </button>
                            </h2>
                            <div id="collapsekfsdf" class="accordion-collapse collapse" aria-labelledby="headingkfsdf" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTgdsds">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTgdsds" aria-expanded="false" aria-controls="collapseTgdsds">
                               python objects
                                </button>
                            </h2>
                            <div id="collapseTgdsds" class="accordion-collapse collapse" aria-labelledby="headingTgdsds" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        
                      
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfsdfs">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefsdfs" aria-expanded="false" aria-controls="collapsefsdfs">
                                  Ptyhon are mutuable
                                </button>
                            </h2>
                            <div id="collapsefsdfs" class="accordion-collapse collapse" aria-labelledby="headingfsdfs" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfdsfs">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefdsfs" aria-expanded="false" aria-controls="collapsefdsfs">
                               Python hacking tool
                                </button>
                            </h2>
                            <div id="collapsefdsfs" class="accordion-collapse collapse" aria-labelledby="headingfdsfs" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        
                   
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfsdafs">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefsdafs" aria-expanded="false" aria-controls="collapsefsdafs">
                                  machine Learning
                                </button>
                            </h2>
                            <div id="collapsefsdafs" class="accordion-collapse collapse" aria-labelledby="headingfsdafs" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfsdf">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefsdf" aria-expanded="false" aria-controls="collapsefsdf">
                                Python module
                                </button>
                            </h2>
                            <div id="collapsefsdf" class="accordion-collapse collapse" aria-labelledby="headingfsdf" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        </div>
                        
                    </div>
                    <div className="more" onClick={Toggle}>{stat}</div>
                </div>

                <div className="require">
                    <h1>Requirement</h1>
                    <div className="reqi">
                        <li>Some programming experience</li>
                        <li>
                        Admin permissions to download files
                        </li>
                    </div>
                </div>


                <div className="trusted-datra">
         <div className="trust-meat">
       <h3>
       Top companies trust Udemy
       </h3>
         </div>
         <div className="trys">
         Get your team access to Udemy's top 6,000+ courses
         </div>
         <div className="imgino">
             <span>
                 <img src={l1} alt="heu00"/> 
             </span>
             <span>
                 <img src={l2} alt="heu00"/> 
             </span>
             <span>
                 <img src={l3} alt="heu00"/> 
             </span>
             <span>
                 <img id="net" src={l4} alt="heu00"/> 
             </span>
             <span>
                 <img id="h5" src={l5} alt="heu00"/> 
             </span>

         </div>
         <span className="hypo-data">Try Udemy Business</span>
     </div>
            </div>



        </>
    )
}

export default Content
