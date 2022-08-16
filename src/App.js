import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import { useState} from 'react';

function App() {
  var user1={
    id:1,
    name:"Kushal",
    password:"123kushal",
    days:{
      monday:true,
      tuesday:false,
      wednesday:true
    }
  }
  var user2={
    id:2,
    name:"user2",
    password:"123kushal",
    days:{
      monday:true,
      tuesday:false,
      wednesday:false
    }
  }
  var user3={
    id:3,
    name:"user3",
    password:"@user1234",
    days:{
      monday:true,
      tuesday:true,
      wednesday:true
    }
  }
  var user4={
    id:4,
    name:"kunj",
    password:"@kunj123",
    days:{
      monday:true,
      tuesday:true,
      wednesday:false
   }
  }
  var user5={
    id:5,
    name:"Devam",
    password:"@devam",
    days:{
      monday:true,
      tuesday:true,
      wednesday:false
   }
  }

  const [allUser,setAllUser]=useState([user1,user2,user3,user4,user5])
  const [user,setUser]=useState({id:0,name:'',password:'',days:{monday:false,tuesday:false,wednesday:false}})
  const onChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

    const update=(user)=>{
      setUser(user)
    }
    const updateClick=(user)=>{
      let tempUser=allUser;
      for (let index = 0; index < tempUser.length; index++) {
        if(tempUser[index].id===user.id){
          tempUser[index].name=user.name;
          tempUser[index].password=user.password;
          tempUser[index].days.monday=user.days.monday;
          tempUser[index].days.tuesday=user.days.tuesday;
          tempUser[index].days.wednesday=user.days.wednesday;
          break;
        }
      }
      setAllUser(tempUser)
    }


  const hendleclick=(updateUser,e)=>{
    e.preventDefault()
    if(updateUser.id!==0){
      updateClick(updateUser)
      setUser({id:0,name:"",password:"",days:{monday:false,tuesday:false,wednesday:false}})
    }
    else{
    user.id=Math.random()
    setAllUser(allUser.concat(user))
    setUser({id:0,name:"",password:"",days:{monday:false,tuesday:false,wednesday:false}})
    }

  }
  const onCheckMonday=(e)=>{
    setUser(element=>{
      const days={...element.days}
      days.monday=e.target.checked
        return {...element,days}
    })
  }
  const onCheckTuesday=(e)=>{
    setUser(element=>{
      const days={...element.days}
      days.tuesday=e.target.checked
        return {...element,days}
    })
    
  }
  const onCheckWednesday=(e)=>{
    setUser(element=>{
      const days={...element.days}
      days.wednesday=e.target.checked
        return {...element,days}
    })
  }

  return (
    <div className="conatiner">
      <h1 style={{'fontSize':"30px",textAlign:'center'}}>App</h1>
      <div style={{'width':"50%","margin":'auto'}}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '70ch', }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic"value={user.name} label="Name" variant="outlined" name='name' onChange={onChange}/>
          <TextField id="filled-basic" value={user.password} label="Password" variant="filled" name="password" onChange={onChange} />
          <strong>Available on:</strong>
          <FormControlLabel control={<Checkbox id='monday' checked={user.days.monday} name='monday' onClick={onCheckMonday}/>} label="Monday" />
          <FormControlLabel control={<Checkbox id='tuesday' checked={user.days.tuesday} name="tuesday" onClick={onCheckTuesday}/>} label="Tuesday" />
          <FormControlLabel control={<Checkbox id='wednesday' checked={user.days.wednesday} name="wednesday"onClick={onCheckWednesday}/>}label="Wednesday" />
          <Button variant="contained" onClick={(e)=>{hendleclick(user,e)}}>Submit</Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
