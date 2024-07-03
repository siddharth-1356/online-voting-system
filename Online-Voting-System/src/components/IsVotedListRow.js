import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function IsVotedListRow(props)
{
    const {_id,Id,PartyVoted} = props.obj; //Object destruction
    
    const handleClick = () =>{
        Axios.delete("http://localhost:5000/ISVotedRoute/delete-isvoted/" + _id )
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
   
    return(
        <>
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
        <tr class="text-center">
            <td>{Id}</td>
            <td>{PartyVoted}</td>
            <td class="d-flex justify-content-center">
                <button onClick={handleClick} class="btn btn-secondary">Delete <i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
         
        </>
    )
}
export default IsVotedListRow;

