import React, { useState } from 'react'
import '../../css/PRoduct/Decriptions.css';
import { Link } from 'react-router-dom';
import LP from '../../../Images/k.jpg';
import OP from '../../../Images/trend/2.jpg'
import OP2 from '../../../Images/trend/5.jpg'

const Decriptions = () => {
    const [rotate, setrotate] = useState('');
    const [data, setdata] = useState('show more');
    const [opcatity, setopcatity] = useState(0.2);


    // onclick to show data
    var love = true;
    const Toggle = () => {
        var show = document.getElementById("showen");
        console.log(show);
        if (love) {
            show.style.display = "block"
            love = false;
            setopcatity(1)
            setrotate("go");
            setdata("show less")
        } else {
            show.style.display = "none"
            setdata("show more")
            love = true;
            setopcatity(0.2)
            setrotate("")
        }
    }
    // change icon color
    var arya = true
    const Icon = (e) => {
        var store = e.target.id;
        var stores = document.getElementById("apple");
        var store1s = document.getElementById("appleB");
        if (store == stores.id) {
            //set green one
            if (stores.style.color) {
                //remove green color by toggle
                stores.style.color = ""
            } else {
                // add green color or remove green color
                stores.style.color = "green";
                store1s.style.color = ""
            }
        } else {
            // set red one
            if (store1s.style.color) {
                // 
                store1s.style.color = ""
            } else {
                store1s.style.color = "red";
                stores.style.color = ""
            }
        }
    }

    // display show
    const [Morph, setmorp] = useState("show more");
    var simi = true;
    const Simi = () => {
        var dj = document.getElementById("simi");

        if (simi) {
            simi = false;
            dj.style.display = "block";
            setmorp("show less");
        }
        else {
            simi = true;
            dj.style.display = "none";
            setmorp("show more");


        }
    }

    return (
        <>
            <div className="Descriptions">
                <h3>Description</h3>
                <div className="desc-container">
                    <p className="fir-ln" style={{ marginLeft: 0, paddingLeft: 0 }}>
                        Are you ready to start your path to becoming a Data Scientist!
                    </p>
                    <div className="disco">
                        This comprehensive course will be your guide to learning how to use the power of Python to analyze data, create beautiful visualizations, and use powerful machine learning algorithms!
                    </div>
                    <div className="disoc">
                        Data Scientist has been ranked the number one job on Glassdoor and the average salary of a <strong>data scientist is over $120,000 in the United States </strong>according to Indeed! Data Science is a rewarding career that allows you to solve some of the world's most interesting problems!
                    </div>

                    <div className="disco" id="dot" style={{ opacity: opcatity }}>
                        This course is designed for both beginners with some programming experience or experienced developers looking to make the jump to Data Science! and many more that you  ca go many mor</div>  <div id="showen">

                        <div className="clasic-dan disco">
                            This comprehensive course is comparable to other Data Science bootcamps that usually cost thousands of dollars, but now you can learn all that information at a fraction of the cost! With <strong>over 100 HD video lectures</strong> and <strong>detailed code notebooks for every lecture </strong>this is one of the most comprehensive course for data science and machine learning on Udemy!
                        </div>
                        <div className="acts-sl">
                            <p className="kl">
                                We'll teach you how to program with Python,<strong> how to create amazing data visualizations</strong>, and how to use Machine Learning with Python! Here a just a few of the topics we will be learning:
                            </p>
                            <div className="ultra">
                                <li>Programming with Python</li>
                                <li>NumPy with Python</li>
                                <li>Using pandas Data Frames to solve complex tasks</li>
                                <li>Use pandas to handle Excel Files</li>
                                <li>Connect Python to SQL</li>
                                <li>Use matplotlib and seaborn for data visualizations</li>
                                <li>Machine Learning with SciKit Learn, including:</li>
                                <li>Linear Regression</li>
                                <li>Use plotly for interactive visualizations</li>
                                <li>K Nearest Neighbors</li>
                                <li>K Means Clustering</li>
                                <li>Decision Trees</li>
                                <li>Random Forests</li>
                                <li>
                                    Natural Language Processing
                                </li>
                                <li>Neural Nets and Deep Learning</li>
                                <li>strings in python</li>
                                <li>power of pythoon</li>
                                <li>jhakash nandu</li>
                                <li>PRogrmming with python</li>
                                <li>Support Vector Machines</li>
                                <li>PRogrmming with python</li>
                                <li>PRogrmming with python</li>
                                <li>PRogrmming with python</li>
                                <li>and much, much more!</li>
                                <li>PRogrmming with python</li>


                            </div>
                            <span className="enroll">
                                Enroll in the course and become a data scientist today!
                            </span>
                        </div>
                        <div className="paso">
                            <h3>
                                Who this course is for:
                            </h3>
                            <div className="alesia"><li>
                                This course is meant for people with at least some programming experience
                            </li>

                            </div>

                        </div>
                    </div>
                    <div className="know more" onClick={Toggle}>
                        <span>{data} <i class="fas fa-chevron-up" id={rotate}></i></span>
                    </div>

                </div>
            </div>
            <div className="reviwes-veta">
                <h3>Featured review</h3>
                <div className="arya">
                    <div className="frame">
                        <span className="avtars">
                            <img src={LP} alt="avtar" />
                        </span>
                        <div className="avtarInfo">
                            <span id="hipo">Arya Meena</span>
                            <span>120 courses</span>
                            <span>1200 review</span>
                        </div>
                    </div>
                    <div className="fale">
                        <div className="fakeSatr">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>

                        </div>
                        <span>a year ago</span>
                    </div>
                    <div className="inbox">
                        This was my first course in Udemy, and with this instructor. This was an excellent first class to jump into the world of data science. All of the explanations were clear, and you can tell the instructor truly cares about software education. It covers all the most important topics in machine learning, and gives just enough theoretical knowledge to have some basic understanding of the algorithms behind the scenes. I'm already using some of the knowledge learned (and practiced!) here at work.
                    </div>
                    <div className="change">
                        <span className="dynamic">Was this review helpful?</span>
                    </div>
                    <div className="liek0">
                        <div className="likeAction">
                            <div className="left-like" onClick={Icon}>
                                <span class="material-icons" id="apple">
                                    thumb_up_off_alt
                                </span>

                            </div>
                            <div className="left-like" onClick={Icon}>
                                <span class="material-icons" id="appleB">
                                    thumb_down_off_alt
                                </span>
                            </div>

                        </div>
                        <span><Link to="/">Report</Link></span>
                    </div>
                </div>
            </div>


            <div className="similar-courses">
                <h3>Similar Courses</h3>
                <div className="kave"><span className="slug">44 total hours.</span><span>Updated 9/2021</span></div>
                <div className="ourCourses">
                    <div className="contain-itemo0">
                        <div className="Addonme">
                            <span className="itsme">
                                <img src={OP} alt="ok" />
                            </span>
                            <div className="datas-manager">
                                <span className="head-manager"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="img0pos">
                                    <span id="jex">44 total hours.</span>
                                    <span id="jexa">Updated 9/2022</span>

                                </div>
                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span>4.7</span>

                                    <span>

                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="use-mo">
                                    <span className="mr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span>40,883</span>
                                </div>
                                <div className="traffic78">
                                    <span>$21</span>
                                </div>
                                <div className="semual">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div className="Addonme">
                            <span className="itsme">
                                <img src={OP} alt="ok" />
                            </span>
                            <div className="datas-manager">
                                <span className="head-manager"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="img0pos">
                                    <span id="jex">44 total hours.</span>
                                    <span id="jexa">Updated 9/2022</span>

                                </div>
                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span>4.7</span>

                                    <span>

                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="use-mo">
                                    <span className="mr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span>40,883</span>
                                </div>
                                <div className="traffic78">
                                    <span>$21</span>
                                </div>
                                <div className="semual">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                        </div> <div className="Addonme">
                            <span className="itsme">
                                <img src={OP} alt="ok" />
                            </span>
                            <div className="datas-manager">
                                <span className="head-manager"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="img0pos">
                                    <span id="jex">44 total hours.</span>
                                    <span id="jexa">Updated 9/2022</span>

                                </div>
                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span>4.7</span>

                                    <span>

                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="use-mo">
                                    <span className="mr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span>40,883</span>
                                </div>
                                <div className="traffic78">
                                    <span>$21</span>
                                </div>
                                <div className="semual">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                        </div> <div className="Addonme">
                            <span className="itsme">
                                <img src={OP} alt="ok" />
                            </span>
                            <div className="datas-manager">
                                <span className="head-manager"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="img0pos">
                                    <span id="jex">44 total hours.</span>
                                    <span id="jexa">Updated 9/2022</span>

                                </div>
                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span>4.7</span>

                                    <span>

                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="use-mo">
                                    <span className="mr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span>40,883</span>
                                </div>
                                <div className="traffic78">
                                    <span>$21</span>
                                </div>
                                <div className="semual">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                        </div> <div className="Addonme">
                            <span className="itsme">
                                <img src={OP} alt="ok" />
                            </span>
                            <div className="datas-manager">
                                <span className="head-manager"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="img0pos">
                                    <span id="jex">44 total hours.</span>
                                    <span id="jexa">Updated 9/2022</span>

                                </div>
                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span>4.7</span>

                                    <span>

                                        <i class="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="use-mo">
                                    <span className="mr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span>40,883</span>
                                </div>
                                <div className="traffic78">
                                    <span>$21</span>
                                </div>
                                <div className="semual">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div id="simi">
                            <div className="Addonme">
                                <span className="itsme">
                                    <img src={OP} alt="ok" />
                                </span>
                                <div className="datas-manager">
                                    <span className="head-manager"><Link>

                                        2021 Python for Machine Learning & Data Science Masterclass
                                    </Link></span>
                                    <div className="img0pos">
                                        <span id="jex">44 total hours.</span>
                                        <span id="jexa">Updated 9/2022</span>

                                    </div>
                                </div>
                                <div className="clim0">
                                    <div className="stairs">
                                        <span>4.7</span>

                                        <span>

                                            <i class="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="use-mo">
                                        <span className="mr">
                                            <i class="fas fa-user-friends"></i>
                                        </span>
                                        <span>40,883</span>
                                    </div>
                                    <div className="traffic78">
                                        <span>$21</span>
                                    </div>
                                    <div className="semual">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>
                            </div> <div className="Addonme">
                                <span className="itsme">
                                    <img src={OP} alt="ok" />
                                </span>
                                <div className="datas-manager">
                                    <span className="head-manager"><Link>

                                        2021 Python for Machine Learning & Data Science Masterclass
                                    </Link></span>
                                    <div className="img0pos">
                                        <span id="jex">44 total hours.</span>
                                        <span id="jexa">Updated 9/2022</span>

                                    </div>
                                </div>
                                <div className="clim0">
                                    <div className="stairs">
                                        <span>4.7</span>

                                        <span>

                                            <i class="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="use-mo">
                                        <span className="mr">
                                            <i class="fas fa-user-friends"></i>
                                        </span>
                                        <span>40,883</span>
                                    </div>
                                    <div className="traffic78">
                                        <span>$21</span>
                                    </div>
                                    <div className="semual">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>
                            </div> <div className="Addonme">
                                <span className="itsme">
                                    <img src={OP} alt="ok" />
                                </span>
                                <div className="datas-manager">
                                    <span className="head-manager"><Link>

                                        2021 Python for Machine Learning & Data Science Masterclass
                                    </Link></span>
                                    <div className="img0pos">
                                        <span id="jex">44 total hours.</span>
                                        <span id="jexa">Updated 9/2022</span>

                                    </div>
                                </div>
                                <div className="clim0">
                                    <div className="stairs">
                                        <span>4.7</span>

                                        <span>

                                            <i class="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="use-mo">
                                        <span className="mr">
                                            <i class="fas fa-user-friends"></i>
                                        </span>
                                        <span>40,883</span>
                                    </div>
                                    <div className="traffic78">
                                        <span>$21</span>
                                    </div>
                                    <div className="semual">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>
                            </div> <div className="Addonme">
                                <span className="itsme">
                                    <img src={OP} alt="ok" />
                                </span>
                                <div className="datas-manager">
                                    <span className="head-manager"><Link>

                                        2021 Python for Machine Learning & Data Science Masterclass
                                    </Link></span>
                                    <div className="img0pos">
                                        <span id="jex">44 total hours.</span>
                                        <span id="jexa">Updated 9/2022</span>

                                    </div>
                                </div>
                                <div className="clim0">
                                    <div className="stairs">
                                        <span>4.7</span>

                                        <span>

                                            <i class="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="use-mo">
                                        <span className="mr">
                                            <i class="fas fa-user-friends"></i>
                                        </span>
                                        <span>40,883</span>
                                    </div>
                                    <div className="traffic78">
                                        <span>$21</span>
                                    </div>
                                    <div className="semual">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>
                            </div> <div className="Addonme">
                                <span className="itsme">
                                    <img src={OP} alt="ok" />
                                </span>
                                <div className="datas-manager">
                                    <span className="head-manager"><Link>

                                        2021 Python for Machine Learning & Data Science Masterclass
                                    </Link></span>
                                    <div className="img0pos">
                                        <span id="jex">44 total hours.</span>
                                        <span id="jexa">Updated 9/2022</span>

                                    </div>
                                </div>
                                <div className="clim0">
                                    <div className="stairs">
                                        <span>4.7</span>

                                        <span>

                                            <i class="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="use-mo">
                                        <span className="mr">
                                            <i class="fas fa-user-friends"></i>
                                        </span>
                                        <span>40,883</span>
                                    </div>
                                    <div className="traffic78">
                                        <span>$21</span>
                                    </div>
                                    <div className="semual">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="meta-megha" onClick={Simi}>{Morph}</div>
                    </div>
                </div>
            </div>
            {/* buy together */}


            <div className="Together">
                <div className="ToExo">
                    <h3>
                        Frequently Bought Together
                    </h3>
                    <div className="Addnow">
                        <div className="Addthis">
                            <span className="u0k">
                                <img src={OP} alt="mp" />
                            </span>
                            <div className="sld">
                                <span className="ds"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="fsdf">
                                <span id="onm">jose martina</span>

                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span className="solo">4.7</span>

                                    <span className="h7hd">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>

                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>(109,902)</span>
                                </div>
                            </div>
                           




                            </div>
                            <div className="fdsf">
                                <span>$21</span>
                            </div>
                        </div>
                        <div className="Addthis">
                            <span className="u0k">
                                <img src={OP2} alt="mp" />
                            </span>
                            <div className="sld">
                                <span className="ds"><Link>

                                    2021 Python for Machine Learning & Data Science Masterclass
                                </Link></span>
                                <div className="fsdf">
                                <span id="onm">jose martina</span>

                            </div>
                            <div className="clim0">
                                <div className="stairs">
                                    <span className="solo">4.7</span>

                                    <span className="h7hd">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>

                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span>(109,902)</span>
                                </div>
                            </div>
                           




                            </div>
                            <div className="fdsf">
                                <span>$21</span>
                            </div>
                        </div>
                        <i class="fas fa-plus fam"></i>
                    </div>

                    <div className="ClapTag">
                    <i class="fas fa-tags"></i>
                    <span className="saveme">
                    Save an extra 15% in cart when you buy these together

                    </span>
                    </div>

                    <div className="Calcu">
                        <div className="Ample">
                            <span className="tmt">Total:</span>
                            <span className="pmt">$21</span>

                        </div>
                        <div className="busys">
                            <span><Link to="/adcart">Add to all cart</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decriptions
