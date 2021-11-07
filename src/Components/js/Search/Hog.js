import React from 'react'
import { Link } from 'react-router-dom';
import Left from './LeftBar';
import '../../css/Search/Hog.css'
const Hog = ({bl,wid}) => {
    const dip=()=>{
        document.getElementById("x").style.display="none"
    }
    return (
        <div className="lamp"  id="x" style={{width:wid,display:bl}}>
           <div className="jaskas">
               <div className="Code">
                   <span>100 results</span>
               </div>
               <Left pad={"0.4rem"} col={"grey"}/>
               <div className="Done">
                   <span>Done</span>
               </div>
           </div>
           <span className="clod" onClick={dip} >X</span>
        </div>
    )
}

export default Hog
