import React, { useState } from 'react'
import '../../css/PRoduct/Details.css';
import { Link } from 'react-router-dom';
import Tag from '../../../Images/A.png';
import Content from './Content';
import Comments from './Comments';
import Decripton from './Decriptions';
import Instructor from './Instructor';
import Fixbar from './Fixbar';
import Endbar from './EndBar';
import E from '../../../Images/sampl-img/1.jpg'
const Details = () => {
    const [ok, setok] = useState("none");
    const [tops, settops] = useState("29%");
    const [po, setpo] = useState("absolute");


    window.onscroll = () => {
        if (document.body.scrollTo >= 120 || document.documentElement.scrollTop >= 120) {
            setok("block")
            if (document.body.scrollTo >= 290 || document.documentElement.scrollTop >= 290) {
                console.log("hiii");
                settops("0")
                setpo("fixed")
            } else {
                settops("29%")
                setpo("absolute")
            }
        }
        else {
            setok("none")
        }
    }
    
     

return (
    <>
        <div className="detaisl-page">
            <div className="con-tap">
                <div className="pron">
                    <Link to="/">
                        Programming Languages
                    </Link>
                    <i class="fas fa-angle-right"></i>
                    <Link to="/">
                        Python
                    </Link>
                </div>
                <div className="imagemeon">
                    <img src={E} alt={"dfkjdsf"}/>
                    <div className="play">
                    <i class="far fa-play-circle"></i>
                    </div>
                </div>
                <div className="head-pro">
                    <h1 className="tap-pro">
                        2021 Complete Python Bootcamp From Zero to Hero in Python

                    </h1>
                </div>
                <div className="clasic-pro">
                    <p className="mega-pro">
                        Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
                    </p>
                </div>
                <div className="Ratings-pro">
                    <span className="rating-number-pro">4.6</span>
                    <div className="stars-pro">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <Link to="/">(256,123 ratings)</Link>
                    <span className="users-pro">346,786 students</span>
                </div>
                <div className="pro-owner">
                    <span className="nem0">Created by</span>
                    <Link to="/">Jose Martina</Link>
                </div>
                <div className="updates">
                    <div className="upto">
                        <span class="material-icons jk">
                            new_releases
                        </span>
                        <span className="date-s">
                            Last updated 2/2022
                        </span>
                    </div>
                    <div className="lang">
                        <i class="fas fa-globe"></i>
                        <span className="eng">English</span>
                    </div>
                    <div className="tiom">
                        <i class="far fa-closed-captioning"></i>
                        <span className="morphin">
                            English[Auto],French[Auto] <Link to="/">5 more</Link>
                        </span>
                    </div>
                </div>
                <div className="megha">
                    <div className="loks">$231</div>
                    <div className="goadd">
                        <div className="sk">Go to cart</div>
                    </div>
                    <div className="t0h7">
                    30-Day Money-Back Guarantee
                    </div>
                    <div className="excl">
                        <div className="tyb45"> <span className="je">
                        Extra 20% off</span> courses</div>
                        <div className="bhav"><span className="yog87">IMPROVE</span><span className="apply">APPLY</span></div>
                    </div>
                    <div className="arvind">
                        <span className="middlea"><Link to="/">Apply Coupon</Link></span>
                    <span className="josa"><Link to="/">Gift this course</Link></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="topics-data">
            <h1 className="learn0">
                What you'll learn
            </h1>
            <div className="list-data">
                <div className="Aone">

                    <li className="li-mi">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn to use Python professionally, learning both Python 2 and Python 3!
                        </p>
                    </li>
                    <li className="li-mi m">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Create games with Python, like Tic Tac Toe and Blackjack!

                        </p>
                    </li>
                </div>
                <div className="Aone">
                    <li className="li-mi">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn advanced Python features, like the collections module and how to work with timestamps!
                        </p>
                    </li>  <li className="li-mi m">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn to use Object Oriented Programming with classes!
                        </p>
                    </li>
                </div>
                <div className="Aone">

                    <li className="li-mi">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn to use Python professionally, learning both Python 2 and Python 3!
                        </p>
                    </li>
                    <li className="li-mi m">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Create games with Python, like Tic Tac Toe and Blackjack!

                        </p>
                    </li>
                </div>
                <div className="Aone">
                    <li className="li-mi">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn advanced Python features, like the collections module and how to work with timestamps!
                        </p>
                    </li>  <li className="li-mi m">
                        <i class="fas fa-check i1"></i>
                        <p className="p2">
                            Learn to use Object Oriented Programming with classes!
                        </p>
                    </li>
                </div>

            </div>
        </div>


        <div className="crud">
            <div className="divim">
                <img src={Tag} alt="takeME" />
            </div>

            <p className="side">
                Curated for the <Link to="/">
                    Udemy Business
                </Link> collection
            </p>

        </div> 
        <Fixbar deep={ok} />
        <Endbar top={tops} ppo={po} />
        <Content />
        <Decripton />

        <Instructor />

        <Comments />
    </>
)
}

export default Details
