import React from 'react'
import '../../css/Search/LeftBar.css'
const LeftBar = ({pad,col}) => {
    // for all div toggle
    var ananya=true;
    const hi=(e)=>{
        var raju=e.target.parentElement.parentElement.nextSibling;
        console.log(raju);
        if(ananya){
            ananya=false;
            raju.style.display="none"
        }else{
            ananya=true;
            raju.style.display="block"

        }
    }
var p;
    var radios = document.getElementsByTagName('input');
    for(p=0; p<radios.length; p++ ) {
        if(radios[p]==='radio'){
            radios[p].onclick = function(e) {
                        if(e.ctrlKey || e.metaKey) {
                            this.checked = false;
                        }
                    }
        }
        
    }
    return (
        <div className="leftbar" style={{paddingTop:pad,paddingBottom:pad}}>
      <div className="maker" style={{borderTopColor:col}}>
          <div className="pro">
              <h3>Topic</h3>
              <span className="d" id="ej"><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone">
            
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Python</span>
                 <span className="h565">(25352)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Wordpress</span>
                 <span className="h565">(2352)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Javascript</span>
                 <span className="h565">(4322)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Web Development</span>
                 <span className="h565">(46543)</span>
             </div> 
          </div>
      </div>
      <div className="maker">
          <div className="pro">
              <h3>Level</h3>
              <span><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone2">
            
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">All Levels</span>
                 <span className="h565">(2002309)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Beginner</span>
                 <span className="h565">(222243)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Intermidiate</span>
                 <span className="h565">(253529)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Expert</span>
                 <span className="h565">(425352)</span>
             </div> 
          </div>
      </div>
      <div className="maker">
          <div className="pro">
              <h3>Language</h3>
              <span><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone3">
            
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">English</span>
                 <span className="h565">(2225352)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Hindi</span>
                 <span className="h565">(28821)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Tamil</span>
                 <span className="h565">(233223)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Chapri</span>
                 <span className="h565">(832983)</span>
             </div> 
          </div>
      </div>
      <div className="maker">
          <div className="pro">
              <h3>Price</h3>
              <span><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone4">
            
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Paid</span>
                 <span className="h565">(15352)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Free</span>
                 <span className="h565">(352)</span>
             </div> 
          </div>
      </div>
      
      <div className="maker">
          <div className="pro">
              <h3>Feature</h3>
              <span><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone5">
            
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">subtitles</span>
                 <span className="h565">(352)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">quizes</span>
                 <span className="h565">(825352)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">coding exercises</span>
                 <span className="h565">(435)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="checkbox"  /></span>
                 <span className="m09">Practice tests</span>
                 <span className="h565">(25352)</span>
             </div> 
          </div>
      </div>



      <div className="maker">
          <div className="pro">
              <h3>Rating</h3>
              <span><i class="fas fa-chevron-up"onClick={hi} ></i></span>
          </div>
          <div className="d" id="iphone6">
            
             <div className="jcheck">
                 <span className="covered"><input type="radio"  /></span>
                 <span className="m09">4.5</span>
                 <span className="h565">(352)</span>
             </div> 
             <div className="jcheck">
                 <span className="covered"><input type="radio"  /></span>
                 <span className="m09">4</span>
                 <span className="h565">(825352)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="radio"  /></span>
                 <span className="m09">3.5</span>
                 <span className="h565">(435)</span>
             </div>  <div className="jcheck">
                 <span className="covered"><input type="radio"  /></span>
                 <span className="m09">3</span>
                 <span className="h565">(25352)</span>
             </div> 
          </div>
      </div>

        </div>
    )
}

export default LeftBar
