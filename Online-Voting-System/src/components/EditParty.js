import { useParams } from "react-router-dom";
import AddParty from "./AddParty";
import { useEffect, useState } from "react";
import Axios  from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditParty()
{
    const navigate=useNavigate();
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({PartyName:"",CandidateName:"",Symbol:"",Image:""});
    const [newData,setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/PartiesRoute/update-Party/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {PartyName,CandidateName,Symbol,Image} = res.data;
                setInitialValue({PartyName,CandidateName,Symbol,Image});


            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {PartyName:newData[0],CandidateName:newData[1],Symbol:newData[2],Image:newData[3]};
        Axios.put("http://localhost:5000/PartiesRoute/update-Party/"+id,data)
        .then((res)=>{
            if(res.status === 200){

                toast.success('Updated Successfully', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                 setTimeout(()=>{
                    navigate("/Admin/PartyList/"+id);
                 },1500)
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <AddParty getState={getState}
                        PartyNameValue={initialValue.PartyName}
                        CandidateNameValue={initialValue.CandidateName}
                        SymbolValue={initialValue.Symbol}
                        ImageValue={initialValue.Image}
                       
                        >
                        Update Party's Data
                        </AddParty>
                        <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
        </form>
    )
}
export default EditParty;
