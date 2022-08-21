import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useFormik } from 'formik'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login({allUser}) {
  const navigate=useNavigate()

  const formik=useFormik({
    initialValues:{name:'',password:""},
    onSubmit:(values,{resetForm})=>{
      allUser.map((user)=>{
        if(user.name===name && user.password===password){
            localStorage.setItem('username',values.name)
            navigate('/')
        }
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
    <Grid>
    <h1 style={{fontSize:'30px', textAlign:"center", color:"white",paddingTop:'100px'}}>Welcome to <strong>CRUD</strong> App</h1>
    <Paper elevation={10} style={{height:'65vh',width:'400px',padding:20,margin:"30px auto"}}>
        <Grid align='center'>
            <Avatar style={{backgroundColor:"#1bbd7e"}}><LockOutlined/></Avatar>
            <h2>Sign In</h2>
        </Grid>
        <TextField label="Username" value={name} onChange={formik.handleChange}  name="name"fullWidth style={{marginTop:20}}required/>
        <TextField label="Password" value={password} onChange={formik.handleChange }name="password"fullWidth style={{marginTop:20}}required type="password"/>
        <Button variant="contained" style={{marginTop:20}} onClick={formik.handleSubmit} type='submit' color='success' fullWidth>Submit</Button>
    </Paper>
    </Grid>
    </>
  )
}

export default Login
