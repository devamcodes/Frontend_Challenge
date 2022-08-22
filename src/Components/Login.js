import { Avatar, Button, Grid, Paper, TextField, IconButton, Checkbox, FormControlLabel, InputAdornment,OutlinedInput } from '@mui/material'
import { LockOutlined, Google } from '@mui/icons-material'
import { Visibility,VisibilityOff} from '@mui/icons-material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login({allUser}) {
  const navigate=useNavigate()

  const [visibility,setVisibility]=useState(false)

  const handleshow=()=>{
    setVisibility(!visibility)
  }

  const formik=useFormik({
    initialValues:{name:'',password:""},
    onSubmit:(values,{resetForm})=>{

      // eslint-disable-next-line
      allUser.filter((user)=>{
        if(user.name===name && user.password===password){
            localStorage.setItem('username',values.name)
            navigate('/home')
        }
        return user
      })
      if(!localStorage.getItem('username')){
        alert('Invalid credentials')
      }
      resetForm()
    }
  })

  const{name,password}=formik.values
  return (
    <>
        <h1 style={{fontSize:'30px', textAlign:"center", color:"white", marginTop:"20px"}}>Welcome to <strong>CRUD</strong> App</h1>

        <Paper elevation={10} style={{width:'400px',padding:20,margin:"30px auto"}}>
            <Grid item align='center'>
                    <Avatar style={{backgroundColor:"#1bbd7e"}}><LockOutlined/></Avatar>
                    <h2>Sign In</h2>
            </Grid>
            
            <h1 style={{textAlign:"center", marginTop:"15px"}}>Enter your credentials to continue</h1>
            
            <Button style={{cursor:"not-allowed", color:"grey", marginTop:"10px"}} fullWidth>
              
                <Google />
              
              Sign in with Google
            </Button>

            <span style={{marginLeft:"50%"}}>OR</span>
           
            <h1 style={{textAlign:"center", marginTop:"15px"}}> Sign in with Username</h1>
            <TextField label="Username" value={name} onChange={formik.handleChange}  name="name"fullWidth style={{marginTop:20}}required/>
            
            <OutlinedInput value={password} onChange={formik.handleChange } name="password" fullWidth style={{marginTop:20}}required type={visibility?"text":"password"}  placeholder="Password *"
            endAdornment={
              <InputAdornment position='end'>
                <IconButton  onClick={handleshow}>
                {visibility?<Visibility/>:<VisibilityOff/>}
                </IconButton>
              </InputAdornment>
  } />
            

            <Grid style={{display:"flex", flexFlow:"row wrap", justifyContent:"space-between"}}>
              <FormControlLabel 
                control={<Checkbox  disabled/>} 
                label="Remember me"
              />  
              <h4 style={{marginTop:"8px", color:"grey", cursor:"not-allowed"}}>Forgot Password ?</h4>
            </Grid>

            <Button variant="contained" style={{marginTop:20}} onClick={formik.handleSubmit} type='submit' color='success' fullWidth>Sign In</Button>
        </Paper>

    </>
  )
}



export default Login

