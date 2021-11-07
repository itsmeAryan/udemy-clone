import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/PRoduct/Instructor.css'
import LP from '../../../Images/dev.jpg';

const Instructor = () => {
    // use state
    const [opera, setOpera] = useState(0.2);
    const [block, Setblock] = useState("none");
    const [id, Setid] = useState("");
    const [data, Setdata] = useState("Show more");
    var radha = true;
    const Veeru = () => {
        if (radha) {
            setOpera(1);
            Setblock("block");
            Setid("tim");
            Setdata("Show less")
            radha = false;
        } else {
            setOpera(0.2);
            Setblock("none");
            Setid("");
            Setdata("Show more")
            radha = true;
        }
    }
    return (
        <>
            <div className="Instructor">
                <div className="cap-cho">
                    <h3>Instructor</h3>
                    <span><Link>Jose Buttller</Link></span>
                    <span className="sidk">
                        Head of Data Science, Pierian Data Inc.
                    </span>
                    <div className="insorter">
                        <span className="av">
                            <img src={LP} alt="avtar" />
                        </span>
                        <div className="avtdsd">
                            <div className="manage">
                                <div className="strings">
                                    <span className="solr">
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span className="Literal">
                                        4.6 Instructor Rating
                                    </span>

                                </div>
                                <div className="strings">
                                    <span className="solr">
                                        <i class="fas fa-award"></i>
                                    </span>
                                    <span className="Literal p">
                                        813,038 Reviews
                                    </span>

                                </div>
                                <div className="strings">
                                    <span className="solr">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <span className="Literal i">
                                        2,522,465 Students
                                    </span>

                                </div>
                                <div className="strings">
                                    <span className="solr">
                                        <i class="far fa-play-circle"></i>
                                    </span>
                                    <span className="Literal r">
                                        37 Courses
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md">
                        Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and<span id="opa" style={{ opacity: opera }}> data science to help other people learn the power of programming the ability to analyze data, as well as present the data</span> <span id="owner" style={{ display: block }}>in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Data Inc. and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to contact him on LinkedIn for more information on in-person training sessions or group training sessions in Las Vegas, NV.</span>
                    </div>
                </div>
                <span id="jam" onClick={Veeru}>{data}<i class="fas fa-chevron-up " id={id}></i></span>

            </div>


            {/* student feedback */}
            <div className="StduentBack">
                <h3>Student feddback</h3>
                <div className="feedgain">
                    <div className="rangers">
                        <span className="numb098">4.7</span>
                        <div className="mackMe">
                            <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                        </div>
                        <span className="soudn">Course Rating</span>
                    </div>

                    <div className="bars-manu">
                        <div className="sun">
                        <div className="progress">
  <div className="progress-bar w-56" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100">56%</div>
</div>




                        </div>
                        <div className="sun">
                        <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>




                        </div>   <div className="sun">
                        <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>




                        </div>   <div className="sun">
                        <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>




                        </div>   <div className="sun">
                        <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>




                        </div>
                    </div>
                    <div className="percentMenu">
                        <div className="hampers">
                            <div className="divya">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span className="snpo">56%</span>
                        </div>
                        <div className="hampers">
                            <div className="divya">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span className="snpo">56%</span>
                        </div> <div className="hampers">
                            <div className="divya">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span className="snpo">56%</span>
                        </div> <div className="hampers">
                            <div className="divya">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span className="snpo">56%</span>
                        </div> <div className="hampers">
                            <div className="divya">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span className="snpo">56%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* review search engine bar */}
            <div className="Revisearc">
                <h3>Reviews</h3>
                <div className="handleSearch">
                    <div className="birla">
                        <input type="search" placeholder="Search reviews" name="searchc"/>
                        <span className="searchbar00">
                        <i class="fas fa-search"></i>
                        </span>
                    </div>
                    <div className="ambani">
                    <select >
                        <option>All ratinsg</option>
                        <option>five ratinsg</option>
                        <option>four ratinsg</option>
                        <option>three ratinsg</option>
                        <option>two ratinsg</option>
                        <option>one ratinsg</option>

                    </select>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Instructor
