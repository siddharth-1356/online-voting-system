import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <>
      <div className="footer text-cente ">
                <div className="fleft">
                    <p>Copyright myVote &copy; All rights reserved</p>
                </div>
               <div className="text-center" style={{opacity:"0.4"}}>Made With <i class="fa-regular fa-heart"></i>  - Team - myVote</div> 
                <div className="fright">
                 <a >  <p style={{textDecoration:"underline"}}>www.myVote.com</p></a> 
                </div>
        </div>

    </>
  );
}

export default index;
