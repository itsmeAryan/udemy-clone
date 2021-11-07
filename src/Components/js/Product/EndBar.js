import React from 'react'
import '../../css/PRoduct/EndBar.css';
import {Link} from 'react-router-dom'
const EndBar = ({top,ppo}) => {
    return (
        <div className="endbar" style={{top:top,position:ppo}}>
           <div className="ayu">
           <div className="classs manager">
                <div className="totalManager">
                   <div className="stagno">
                   <div className="pisaos">
                    <span className="moneyManager">$25</span>

                    </div>
                   <div className="delAmount">
                  <span><del>$35</del></span>
                   </div>
                   <div className="foofer">
                       <span className="ex">87%</span>
                        <span>
                           off
                       </span>
                   </div>
                   </div>
                <div className="Alarm">
                    <span className="alrmo2">
                    <i class="fas fa-clock"></i>
                    </span>
                    <span className="tols"> 5 hours</span>
                    <span className="leftos">left at this price!</span>
                </div>

                </div>
                <div className="AddME08">
                    <Link to="/adcart">Add to cart</Link>
                </div>
                <div className="Amazing-clue AddME08">
                    <Link to="/addcart">Buy now</Link></div>
                    <div className="moneyGurantee">
                    30-Day Money-Back Guarantee
                    </div>
            </div>
           </div>
            <div className="includes">
                <span className="slos">This course includes:</span>
                <div className="ous">
                    <li>
                        <span className="stamp0">
                        <i class="far fa-play-circle"></i>
                        </span>
                        <span className="makes83">
                        22 hours on-demand video
                        </span>
                    </li>
                    <li>
                        <span className="stamp0">
                        <i class="far fa-play-circle"></i>
                        </span>
                        <span className="makes83">
                        22 hours on-demand video
                        </span>
                    </li>   <li>
                        <span className="stamp0">
                        <i class="far fa-play-circle"></i>
                        </span>
                        <span className="makes83">
                        22 hours on-demand video
                        </span>
                    </li>   <li>
                        <span className="stamp0">
                        <i class="far fa-play-circle"></i>
                        </span>
                        <span className="makes83">
                        22 hours on-demand video
                        </span>
                    </li>   <li>
                        <span className="stamp0">
                        <i class="fas fa-award"></i>
                        </span>
                        <span className="makes83">
                        22 hours on-demand video
                        </span>
                    </li>
                    
                </div>
                <div className="papm">
                    <span>
                    <Link to="/">Apply coupon</Link>
                    </span>

                    <span>
                        <Link to="/">Gift this course</Link>
                    </span>
                </div>
            </div>
            <div className="trace">
                <h3>Training 5 or more people?</h3>
                <p>
                Get your team access to 6,000+ top Udemy courses anytime, anywhere.
                </p>
                <div className="sam">
                    Try Udemy Club
                </div>
            </div>
        </div>
    )
}

export default EndBar
