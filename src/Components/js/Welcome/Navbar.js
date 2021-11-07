import React from 'react'
import '../../css/Welcome/Navbar.css';
import { Link } from 'react-router-dom';
import l1 from '../../../Images/compnay/1.svg'
import l2 from '../../../Images/compnay/2.svg'
import l3 from '../../../Images/compnay/3.svg'
import l4 from '../../../Images/compnay/4.svg'
import l5 from '../../../Images/compnay/5.svg';
import Log from '../../../Images/logo/2.svg'

const Navbar = () => {
    return (
        <>
            <div className="Upper">
                <h1>
                    Top companies choose <Link to="/">  Udemy Business</Link> to build in-demand career skills.
                </h1>
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
            <div className="below">
                <div className="package">
                    <div className="package1">
                        <div className="am">
                            <div className="pack">
                                <span>
                                    <Link>Udemy Business</Link>
                                </span>
                                <span>
                                    <Link>Teach on Udemy </Link>
                                </span> <span>
                                    <Link>About us</Link>
                                </span> <span>
                                    <Link>Contact us</Link>
                                </span>
                                <span>
                                    <Link>Get the app</Link>
                                </span>
                            </div>
                            <div className="pack">
                                <span>
                                    <Link>Carrer </Link>
                                </span>
                                <span>
                                    <Link>Blog</Link>
                                </span> <span>
                                    <Link>Help and support</Link>
                                </span> <span>
                                    <Link>Affiliate</Link>
                                </span>
                                <span>
                                    <Link>Investors</Link>
                                </span>
                            </div>
                            <div className="pack">
                                <span>
                                    <Link>Terms</Link>
                                </span>
                                <span>
                                    <Link>Privacy</Link>
                                </span> <span>
                                    <Link>Sitemap</Link>
                                </span> <span>
                                    <Link>Accessibility</Link>
                                </span>
                            </div>
                        </div>
                        <div className="bye-world">
                            <i class="fas fa-globe"></i>

                            <span>English</span>
                        </div>
                    </div>
                    <div className="pack2">
                        <img src={Log}  alt="dsdf" />
                        <span className="ipman">
                        © 2021 Udemy, Inc.
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
