import React from 'react'
// import vote from "../images/vote.jpg"
import { Link } from "react-router-dom";
// import Navbar from '../Navbar/index.js'
// import Foot from '../Foot/index.js'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import Navbar from './Navbar';
import Foot from './foot'

function index() {
  return (
    <>
    <div className=' bg1'>
          <Navbar/>
          <div className="ctnt">
            <h1>Welcome ! to <span className='special' style={{color:"black",fontWeight:"bold"}}>"myVote"</span>  Online Voting System</h1>
            <p>You can vote your leader with just one tap !!</p>
            <Link className="signups" style={{marginTop:"25px"}} to='/login'><button >Vote Here &nbsp; <i class="fa-solid fa-computer-mouse fa-flip"></i></button></Link>
          </div>
          <div className='quote'>
              <h1> "The ballot is stronger than the bullet.”</h1>
              <p > - Abraham Lincoln</p>
              <hr />
          </div>
    </div>
          <div className="cardss ovcds">
          <div class="card shadow"  style={{width: "18rem"}} >
                  <img class="card-img-top" src={three} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">"The ignorance of one voter in a democracy impairs the security of all." </h5>
                    <p class="card-text para">- John F. Kennedy</p>
            <Link className="signup  " style={{marginTop:"25px"}} to='/login'><button className='btn stv btn-warning' style={{color:"white"}} >Start Voting</button></Link>

                  </div>
              </div>
              <div class="card shadow"  style={{width: "18rem"}} >
                  <img class="card-img-top" src={one} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">"Voting is not only our right it is our power."  </h5>
                    <p class="card-text para"> - Loung Ung</p>
            <Link className="signup  " style={{marginTop:"25px"}} to='/login'><button className='btn stv btn-warning' style={{color:"white"}}  >Start Voting</button></Link>

                  </div>
              </div>
              <div class="card shadow"  style={{width: "18rem"}} >
                  <img class="card-img-top" src={two} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">"The vote is the very most powerful nonviolent tool that we have."  </h5>
                    <p class="card-text para">- John Lewis</p>
            <Link className="signup  " style={{marginTop:"25px"}} to='/login'><button className='btn stv btn-warning' style={{color:"white"}} >Start Voting</button></Link>

                  </div>
              </div>
             
              
              <hr className='hrHome mt-5'/>

          </div>
    
    <Foot/>
     
    </>
  )
}

export default index
