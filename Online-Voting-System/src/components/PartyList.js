import Axios from "axios";
import { useEffect, useState } from "react";
import PartyListRow from './PartyListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from './AdminNav'
import Foot from './foot'
import './PartyList.css'
function PartyList(props){
  const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:5000/PartiesRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    return (
      <>
      
      <AdminNav/>
      <div className="partyList">

      <div class="mx-5 partyListflex">
        <div class="container pt-5">
          <div className="row ">
          {arr.map((val,ind) => (
            <PartyListRow obj={val} />
            ))}
        </div>
        </div>
            <Link to={"/Admin/AddParty/"+id}><button class="btn btn-dark mt-5" style={{color:"white"}}><i class="fa-solid fa-plus"></i> Add A Party</button></Link>
        
      </div>
      </div>
      <footer>

      <Foot/>
      </footer>
      </>
      )
    
}
export default PartyList;