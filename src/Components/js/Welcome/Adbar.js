import React from 'react'
import '../../css/Welcome/Adbar.css'
const Adbar = () => {
   const ave=(e)=>{
           document.getElementById("po").style.display="none"
   }
        return (
     <div className="navbar" style={{cursor:"pointer"}} id="po" onClick={ave}>
          
         <div className="special">
               <div className="one">
                         <span className="diwlai">DIWALI SALE ENDING</span>
                         <span className="low-diwali">
                         | Courses as low as ₹455 <span id="j">— sale ends tonight!</span><span className="en89" id="en89">Ends in </span>
                         </span>

                 </div>
                 <div className="two">
                         <span id="jaadu">— sale ends tonight! </span>
                <span id="st"> Ends in</span> <span>
                 11h 10m 12s.
                 </span>
                 </div>

         </div>
         
     </div>
          
        );
        }

export default Adbar
