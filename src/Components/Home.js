import { Grid, TextField, FormControlLabel, Paper, Checkbox, Button, Snackbar, Alert, ButtonGroup, InputAdornment, OutlinedInput, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useFormik} from "formik";
import AnotherCard from "./AnotherCard";
import * as Yup from'yup'
import {useNavigate} from 'react-router-dom'
import { Visibility} from '@mui/icons-material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Home({allUser,setAllUser}) {
  
  //get user name from localstorage
  const LogInUser=localStorage.getItem('username')
  
  const [logger,setLogger]=useState({Username:LogInUser,Submit_clicked:0,Update_clicked:0,Cancle_clicked:0,Updated_card_userName:[],Deleted_card_username:[]})

    const navigate=useNavigate()
    
    
    const [visibility,setVisibility]=useState(false)
    const handleshow=()=>{
      setVisibility(!visibility)
    }

    const [open, setOpen] = useState(false);

    const [user, setUser] = useState({
		id: 0,
		name: "",
		password: "",
		days: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false  },
	});

	const update = (User) => {
	  setUser(User);
	};

	const updateClick = (user) => {
    logger.Update_clicked+=1
    logger.Updated_card_userName.push(user.name)
		let tempUser = allUser;
		for (let index = 0; index < tempUser.length; index++) {
			if (tempUser[index].id === user.id) {
				tempUser[index].name = user.name;
				tempUser[index].password = user.password;
				tempUser[index].days.monday = user.days.monday;
				tempUser[index].days.tuesday = user.days.tuesday;
				tempUser[index].days.wednesday = user.days.wednesday;
				tempUser[index].days.thursday = user.days.thursday;
				tempUser[index].days.friday = user.days.friday;
				tempUser[index].days.saturday = user.days.saturday;
				tempUser[index].days.sunday = user.days.sunday;
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
				days: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false },
			})
      		resetForm()
		} else {
      logger.Submit_clicked+=1
			User.id = Math.random();
			setAllUser(allUser.concat(User));
			setUser({
				id: 0,
				name: "",
				password: "",
				days: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false },
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
      console.log(logger)
        localStorage.removeItem('username')
        navigate('/')
    }

    const handleCancelClick = () => {
      logger.Cancle_clicked+=1
      setUser({
				id: 0,
				name: "",
				password: "",
				days: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false },
			})
      formik.resetForm()
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

        <div className="cards" style={{ display:"flex", flexFlow: "row wrap",justifyContent:"space-evenly"}}>
            <AnotherCard  allUser={allUser} setAllUser={setAllUser} update={update} logger={logger}/>
        </div>

        <br />
        <Grid id="form" item container xs={10} sm={8} md={6} lg={4} style={{display:'flex',justifyContent:'center',margin:'auto'}}> 

          <Paper id="form"
            elevation={12}
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "96%"},
            }}
            style={{padding:"20px", border: "15px solid", borderColor:"#006bb9 #30A0E0 #FFC973 #FFE3B3", borderRadius:"15px" }}
            noValidate
            autoComplete="off">

            <h1 style={{textAlign:"center", fontSize:"xx-large"}}>{formik.values.id===0?"Add new user":"Update existing user"}</h1>
            
            <TextField id="outlined-basic"
                required
                value={formik.values.name}
                label="Name"
                variant="outlined"
                name="name"
                onChange={formik.handleChange}
              />
            <div style={{color:"red"}}>{formik.errors.name}</div>
            
            <OutlinedInput value={formik.values.password} onChange={formik.handleChange} name="password" fullWidth required type={visibility?"text":"password"}  placeholder="Password *"
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton  onClick={handleshow}>
                    {visibility?<Visibility/>:<VisibilityOffIcon/>}
                  </IconButton>
                </InputAdornment>
              } />
            <div style={{color:"red"}}>{formik.errors.password}</div>

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
                <FormControlLabel
                    control={ <Checkbox id="thursday" checked={formik.values.days.thursday} name="days.thursday" onClick={formik.handleChange} /> }
                    label="Thursday"
                />
                <FormControlLabel
                    control={ <Checkbox id="friday" checked={formik.values.days.friday} name="days.friday" onClick={formik.handleChange} /> }
                    label="Friday"
                />
                <FormControlLabel
                    control={ <Checkbox id="saturday" checked={formik.values.days.saturday} name="days.saturday" onClick={formik.handleChange} /> }
                    label="Saturday"
                />
                <FormControlLabel
                    control={ <Checkbox id="sunday" checked={formik.values.days.sunday} name="days.sunday" onClick={formik.handleChange} /> }
                    label="Sunday"
                />
            </Grid>

            <ButtonGroup variant="outlined" fullWidth>
              <Button
                  color="success"                
                  // onClick={formik.handleSubmit}
                  onClick={formik.handleSubmit}>	
                  {formik.values.id===0?"Submit":"Update"}
              </Button>
              <Button color="error" onClick={handleCancelClick}> Cancel</Button>
            </ButtonGroup>

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