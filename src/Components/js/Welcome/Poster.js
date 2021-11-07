import React from 'react'
import Logo from  '../../../Images/tap.jpg';
import '../../css/Welcome/Poster.css';
import {Link,useHistory} from 'react-router-dom'

const Poster = () => {
    var istory=useHistory();

    const yup=(e)=>{
        if(e.key==="Enter"){
           istory.push('/search')
        }
     }
    return (
    <>
       <div className="poster">
           <img src={Logo} alt="posetr with"  />
           <div className="sale-posetr">
               <div className="sale-start">
                   <span className="diwali-sale">
                   Diwali Sale ending
                   </span>
                   <span className="sale-ends">
                   Shine bright. Courses from ₹455.
                   </span>
                   <span className="sale-search">
<input type="search" alt="sale-searhc" placeholder="what do you want to learn?" onKeyDown={yup}   />
<Link to="/search" style={{textDecoration:"none",color:"black"}}>
<i class="fas fa-search"></i></Link>
                   </span>
               </div>
           </div>
       </div>
    <div className="dif-courses">
        <h1 className="broad-course">
        A broad selection of courses
        </h1>
        <p className="onlin-course">
        Choose from 183,000 online video courses with new additions published every month
        </p>
        <div className="pytho" id="d">
            <li id="pip"><Link to="/search" style={{color:"black",textDecoration:"none"}}>Python</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>Excel</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>Web Development</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>JavaScript</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>Data Science</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>Aws Certification</Link></li>
            <li><Link to="/search" style={{color:"black",textDecoration:"none"}}>Drawing</Link></li>

        </div>
    </div>
    
    </>
    )
}

export default Poster
