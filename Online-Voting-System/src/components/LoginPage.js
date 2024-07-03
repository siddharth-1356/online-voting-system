import React, { useState } from "react";
import './loginstyle.css'; // Import the CSS file
import vote from '../images/vote.jpg'
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import Foot from "./foot.js";
import { useTypewriter ,Cursor } from 'react-simple-typewriter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
  const [loginType, setLoginType] = useState("user");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [phno, setphno] = useState("");

  const [text] =useTypewriter({
    words: ['Vote','See Results','See Parties Nominated'],
    loop:{},
    typeSpeed:80,
    deleteSpeed:20
  });


  const handleLogin = () => {
    const databaseUrl = "http://localhost:5000/AdminsRoute";
    const votersUrl = "http://localhost:5000/VoterListRoute";

    if (loginType === "admin") {
      fetch(databaseUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((adminCredentials) => {
          const foundAdmin = adminCredentials.find(
            (admin) => admin.username === userName && admin.password === password
          );

          if (foundAdmin) {
            console.log("id is: " + foundAdmin._id);
            toast.success('Logged in Successfully', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setTimeout(()=>{
              window.location.href = window.location.origin+"/#/Admin/Home/" + foundAdmin._id;
          },1500)
          } else {
            toast.error('Invalid Admin Credentials', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              // alert("Invalid admin credentials");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error occurred while fetching admin data");
        });
    } else if (loginType === "user") {
      fetch(votersUrl)
        .then((response) => {
          if (!response.ok) {
            throw  Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((userCredentials) => {
          const foundUser = userCredentials.find(
            (user) => user.Id === userId && user.PhoneNumber===phno
          );

          if (foundUser) {
            console.log("id is: " + foundUser._id);

            toast.success('Logged in Successfully', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setTimeout(()=>{
            window.location.href = window.location.origin+"/#/User/Home/" + foundUser._id;
          },1500)
          } else {
            // alert("Invalid user credentials");
            toast.error('Invalid User Credentials', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error occurred while fetching user data");
        });
    }

    setUserName("");
    setPassword("");
    setUserId("");
    setphno("");
  };

  return (
    <>
  <Navbar/>
    <div className="app ">
       <div className="getSign">Get <span className="special">Signed in</span>  to</div>
     <div className="typewriter"> 
         <span style={{position:"relative"}}  > {text}</span>
         <Cursor/>
      </div>
      <div className="login-form ">
        <div className="title text-center ">Sign In</div>
        <hr className="pb-3" />
        <div className="button-container">
          <button
            className={`col-6 btn  ${loginType === "user" ? "active btn-dark" : ""}`}
            onClick={() => setLoginType("user")}
          >
            User Login
          </button>
          <button
            className={`col-6 btn  ${loginType === "admin" ? "active btn-dark" : ""}`}
            onClick={() => setLoginType("admin")}
          >
            Admin Login
          </button>
        </div>
        <div className="input-container">
          {loginType === "user" ? (
            <div>
              <div className="input-container ">
              <label >User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                
              /></div>
              <div className="input-container">
              <label >Phone Number</label>
              <input
                type="text"
                value={phno}
                onChange={(e) => setphno(e.target.value)}
                
              />
              </div>
            </div>
          ) : (
            <div>
              <div className="input-container">
              <label >User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              </div>
              <div className="input-container">
              <label >Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="btn btn-warning" style={{color:"white"}}  onClick={handleLogin}>
            Login <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
          <ToastContainer
            position="top-center"
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
    </div>
    <footer>
      <Foot/>
    </footer>
    </>
  );
}

export default LoginPage;
