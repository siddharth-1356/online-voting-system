import Axios from "axios";
import {Link} from "react-router-dom";
import './PartyList.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PartyListRow(props)
{
    const {_id,PartyName,CandidateName,Symbol,Image} = props.obj; //Object destruction
    const handleClick = () =>{
        Axios.delete("http://localhost:5000/PartiesRoute/delete-Party/" + _id )
        .then((res)=>{
            if(res.status === 200){
                toast.success('Deleted Successfully', {
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
                   window.location.reload();
               },1000)
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
      }
    return (
        <div className="col-md-4 col-lg-3" style={{ marginBottom: "20px" }}>
          <div className="card" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div class="row justify-content-center">
              <img src={Symbol} className="mt-3 card-img-top" alt="Party Logo" style={{ height: "20vh", width:"20vh"}} />
              <img src={Image} className="mt-3 card-img-top" alt="Party img" style={{ height: "20vh", width:"20vh" }} />
            </div>
            
            <div className="card-body">
              <h5 className="card-title"> <b>Party Name &nbsp; &nbsp;:</b> {PartyName}</h5>
              <p className="card-text"> <b>Candidate  Name&nbsp;&nbsp;: </b> {CandidateName}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <Link to={"/Admin/EditParty/" + _id} style={{color:"white"}} className="btn btn-warning">Edit  <i class="fa-solid fa-pen-to-square"></i></Link>
              <span onClick={handleClick} style={{cursor:"pointer"}} className=""><i class="fa-solid fa-trash-can"></i></span>
            </div>
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
          </div>
        </div>
      );
}
export default PartyListRow;

