import { useState,useEffect } from "react";
import {Outlet} from 'react-router-dom'
import axios from 'axios'
import {useAuth} from "../../context/Auth.jsx"
import Spinner from "../Spinner.jsx";


export default function PrivateRoute(){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()





    useEffect(()=>{

        const authCheck= async()=>{
            const res=await axios.get("http://localhost:8000/api/v1/auth/user_auth",{

               
            })
       if(res.data.ok){
        setOk(true)
       }else{
        setOk(false)
       }

        }
        if(auth.token) authCheck();
    },[auth.token]


)

return ok ? <Outlet/>:<Spinner/>
}