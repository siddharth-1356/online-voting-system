import {useEffect, useState} from "react";
import AdminNav from "./AdminNav";
import './AddVoter.css'
import Foot from './foot'
function AddVoter(props){
    const [name,setname]=useState("");
    const [Id,setId]=useState("");
    const [PhoneNumber,setPhoneNumber]=useState("");
    const [Address,setAddress]=useState("");
    const [DateOfBirth,setDateOfBirth]=useState("");
    const [Gender,setGender]=useState("");

   useEffect(()=>{
    setname(props.nameValue);
    setId(props.IdValue);
    setPhoneNumber(props.PhoneNumberValue);
    setAddress(props.AddressValue);
    setDateOfBirth(props.DateOfBirthValue);
    setGender(props.GenderValue);
   },[props.nameValue,props.IdValue,props.PhoneNumberValue,props.AddressValue,props.DateOfBirthValue,props.GenderValue])

   const arr=[name,Id,PhoneNumber,Address,DateOfBirth,Gender];

   const handleClick=()=>{
    props.getState(arr);
   }

    return(
        <>
            <AdminNav/>
        <div className="addVoter">
        <div className="tableVoter" style={{maxWidth:"50%",margin:"0px auto",textAlign:"center"}}>
            <table className="table table-borderless caption-top" >
                <caption className="h3 text-center">Voter's Data</caption>
                <tbody>
                    <tr className="trTable">
                        <td>Name</td>
                        <td><input   value={name} onChange={(event)=>setname(event.target.value)} style={{boxSizing:"border-box"}} className="form-control tabInput  input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td><input   value={Id} onChange={(event)=>setId(event.target.value)} className="form-control tabInput input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td><input   value={PhoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)} className="form-control tabInput input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><textarea   value={Address} onChange={(event)=>setAddress(event.target.value)} className="form-control tabInput input-lg"/></td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td><input   value={DateOfBirth} onChange={(event)=>setDateOfBirth(event.target.value)} type="date" className="form-control tabInput input-sm"/></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td style={{textAlign:"left"}}>
                            <label><input type="radio" name="Gender" value="Male" checked={Gender === "Male"} onChange={() => setGender("Male")}/> Male</label>  
                            &ensp; &ensp; &ensp;
                            <label><input type="radio" name="Gender"  value="Female" checked={Gender === "Female"} onChange={() => setGender("Female")}/> Female</label>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={"2"}><button onClick={handleClick} className="btn btn-warning my-3 d-block mx-auto" style={{color:"white"}} type="submit">{props.children}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        <footer>
        <Foot/>

        </footer>
        </>
    )
}
export default AddVoter;