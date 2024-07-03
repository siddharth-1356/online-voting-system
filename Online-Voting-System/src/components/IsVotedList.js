import Axios from "axios";
import { useEffect, useState } from "react";
import IsVotedListRow from './IsVotedListRow';
import AdminNav from "./AdminNav";
import Foot from './foot'
function IsVotedList(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:5000/ISVotedRoute/")
        .then((res)=>{
            if(res.status===200) setArr(res.data);
            else Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])
    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <IsVotedListRow obj={val}/>
        })
    }

    return(
        <>
            <AdminNav/>
        <div className="votedList"> 
            <div class=" container col-md-6">
                    <table  class="table  pt-5" >
                
                    <thead class="table-active" >
                        <tr>
                            <th class="text-center">Id</th>
                            <th class="text-center">Party Voted</th>
                            <th class="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {ListItems()}
                    </tbody>
                    
                </table>
            </div>
            <footer>

            <Foot/>
            </footer>
            
        </div>
        </>
    )
}
export default IsVotedList;