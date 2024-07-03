import Axios from "axios";
import { useEffect, useState } from "react";
import VoterListRow from './VoterListRow';
import { Link, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
import './VoterList.css'
import Foot from './foot'

function VotersList(){
    const location = useLocation();
    var id = location.pathname.split("/").pop();
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:5000/VoterListRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <VoterListRow  obj={val}/>
        })
    }

    return(
        <>
            <AdminNav/>
        <div className="voterList">
    <div className="vls" style={{overflowX:"auto"}}>
            <table  class="container table mt-5">
            <thead class="table-active ">
                <tr > 
                    <th class="text-center ">Name</th>
                    <th class="text-center ">Id</th>
                    <th class="text-center ">Phone Number</th>
                    
                    <th class="text-center ">Address</th>
                    <th class="text-center ">Date of Birth</th>
                    <th class="text-center ">Gender</th>
                    <th class="text-center ">Edit / Delete</th>
                </tr>
            </thead>
            <tbody >
                {ListItems()}
            </tbody>
            
        </table>
    <Link to={"/Admin/AddVoter/"+id}><button class="mx-5 mt-5 btn btn-dark " style={{color:"white"}}><i class="fa-solid fa-plus"></i> Add A Voter</button></Link>
    </div>

    <footer>

    <Foot/>
    </footer>
        </div>
        </>
        
    )
}
export default VotersList;
