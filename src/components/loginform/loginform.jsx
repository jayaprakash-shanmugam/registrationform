import React, { useState } from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";
import './loginform.css';


function Loginform()
{
    const history=useNavigate();

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    async function submit(e)
    {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password 
            })
            .then(res=>{
                if(res.data==="exist")
                {
                    
                    history("/index",{state:{id:email}})
                    alert("logged in successfully")
                }
                else if(res.data==="notexist")
                {
                    alert("account doesn't exist!signup to continue")
                }
            })
            .catch(e=>{
                alert("wrong details")
            })
        }
        catch(e){
            console.log(e)
        }
    }
    
   
 
return(
    <form  action="POST" id="form">
        <div className="total-div">
            <h1>Login page</h1>
            <div className="total-div">
                <label Htmlfor="email"></label>
                <input onChange={(event)=>setEmail(event.target.value)} placeholder='Email' type="mail" name="email" id="email" required />
            </div>
            <div className="total-div">
                <label Htmlfor ="password"></label>
                <input  onChange={(event)=>setPassword(event.target.value)} placeholder='Password' type="password" name="password" id="password" required /><br/>
            </div>
            <div className="total-div1">
                <input type="submit" onClick={submit} />
            </div><br/>
            <h5>OR</h5><br/>
            <button ><Link to ="/registerform">New user?Register</Link></button>
        </div>
    </form>
)
}
export default Loginform;