import { Grid, TextField, FormControlLabel, Paper, Checkbox, Button, Snackbar, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik} from "formik";
import AnotherCard from "./AnotherCard";
import * as Yup from'yup'
import {useNavigate} from 'react-router-dom'


function Home({allUser,setAllUser}) {

    useEffect(()=>{
        if(!LogInUser){
            navigate('/login')
        }
    })

    const LogInUser=localStorage.getItem('username')
    // localStorage.removeItem('username')
    const navigate=useNavigate()
    
    const [open, setOpen] = useState(false);

    const [user, setUser] = useState({
		id: 0,
		name: "",
		password: "",
		days: { monday: false, tuesday: false, wednesday: false },
	});

	const update = (User) => {
	  setUser(User);
	};

	const updateClick = (user) => {
		let tempUser = allUser;
		for (let index = 0; index < tempUser.length; index++) {
			if (tempUser[index].id === user.id) {
				tempUser[index].name = user.name;
				tempUser[index].password = user.password;
				tempUser[index].days.monday = user.days.monday;
				tempUser[index].days.tuesday = user.days.tuesday;
				tempUser[index].days.wednesday = user.days.wednesday;
				break;
			}
		}
		setAllUser(tempUser);
	};

	const hendleclick = (User,resetForm) => {
		if (User.id !== 0) {
			updateClick(User);
			setUser({
				id: 0,
				name: "",
				password: "",
				days: { monday: false, tuesday: false, wednesday: false },
			})
      		resetForm()
		} else {
			User.id = Math.random();
			setAllUser(allUser.concat(User));
			setUser({
				id: 0,
				name: "",
				password: "",
				days: { monday: false, tuesday: false, wednesday: false },
			})
      		resetForm()
		}
	};

	const userValidatioon=Yup.object().shape({
		name:Yup.string()
			.min(3,"It is too short")
			.max(50,'It is too long')
			.required('Name is Required'),
		password:Yup.string()
			.min(4,"It is too short")
			.max(50,'It is too long')
			.required('Password is Required'),
	})

	const formik=useFormik({
		enableReinitialize:true,
		initialValues:user,
		onSubmit:(values,{resetForm})=>{
			hendleclick(values,resetForm)
			setOpen(true)
		},
		validationSchema:userValidatioon
	})
	
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpen(false);
	};

    const handleLogout=()=>{
        localStorage.removeItem('username')
        navigate('/login')
    }

  return (
    <div>
        <h1 style={{ fontSize: "30px", textAlign: "center",color:'white' }}>Hello <b>{LogInUser}</b> 
            <Button
              variant="contained"
              onClick={handleLogout}
              style={{float:'right' ,marginTop:5,marginRight:5}} >	
              LogOut
            </Button>
        </h1>

        <div className="cards" style={{ display: "flex", flexFlow: "row wrap", justifyContent:"center"}}>
            <AnotherCard  allUser={allUser} setAllUser={setAllUser} update={update}/>
        </div>

        <br />
        <Grid item container xs={10} sm={8} md={6} lg={10} style={{width: "38%", margin: "auto"}}> 

        <Paper id="form"
          elevation={12}
          component="form"
          sx={{
              "& > :not(style)": { m: 1, width: "96%"},
          }}
          style={{padding:"10px"}}
          noValidate
          autoComplete="off">

          <TextField id="outlined-basic"
              required
              value={formik.values.name}
              label="Name"
              variant="outlined"
              name="name"
              onChange={formik.handleChange}
            />
           <div>{formik.errors.name}</div>
          
          <TextField id="filled-basic"
              required
              value={formik.values.password}
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              onChange={formik.handleChange}
            />
            <div>{formik.errors.password}</div>

          <strong>Available on :</strong>
          <Grid style={{display:"flex", flexFlow:"row wrap", justifyContent:"space-around"}}>
              <FormControlLabel
                  control={<Checkbox id="monday" checked={formik.values.days.monday} name="days.monday" onClick={formik.handleChange} /> }
                  label="Monday"
              />
              <FormControlLabel
                  control={<Checkbox id="tuesday" checked={formik.values.days.tuesday} name="days.tuesday" onClick={formik.handleChange} /> }
                  label="Tuesday"
              />
              <FormControlLabel
                  control={ <Checkbox id="wednesday" checked={formik.values.days.wednesday} name="days.wednesday" onClick={formik.handleChange} /> }
                  label="Wednesday"
              />
          </Grid>
          
          <Button
              variant="contained"
              // onClick={formik.handleSubmit}
              onClick={formik.handleSubmit}>	
              {formik.values.id===0?"Submit":"update"}
          </Button>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '25%' }}>
                Data successfully added
              </Alert>
          </Snackbar>

      </Paper>

  </Grid>	
  <br />

</div>
  )
}

export default Home