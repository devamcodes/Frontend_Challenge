import React,{useEffect} from 'react'
import Home from "./Home";
import {useRoutes,useNavigate} from 'react-router-dom'
import  Login  from "./Login";

function Route({allUser,setAllUser}) {

    const navigate=useNavigate()
   
    useEffect(()=>{
        if(!localStorage.getItem('username')){
            navigate('/')
        }
    },[])

    return (useRoutes([{
            path:'/home',
            element:<Home allUser={allUser} setAllUser={setAllUser}/>
        },{
            path:'/',
            element:<Login allUser={allUser}/>
        }]
    ))
}

export default Route