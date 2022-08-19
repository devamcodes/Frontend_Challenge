import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AnotherCard from "./Components/AnotherCard";
import { useFormik} from "formik";
import * as Yup from'yup'


function App() {
let users=[ {
		id: 1,
		name: "Kushal",
		password: "123kushal",
		days: {
			monday: true,
			tuesday: false,
			wednesday: true,
		}
  },
    {
		id: 2,
		name: "user2",
		password: "123kushal",
		days: {
			monday: true,
			tuesday: false,
			wednesday: false,
		}
  },
    {
		id: 3,
		name: "user3",
		password: "@user1234",
		days: {
			monday: true,
			tuesday: true,
			wednesday: true,
		}
  },
    {
		id: 4,
		name: "kunj",
		password: "@kunj123",
		days: {
			monday: true,
			tuesday: true,
			wednesday: false,
		}
  },
    {
		id: 5,
		name: "Devam",
		password: "@devam",
		days: {
			monday: true,
			tuesday: true,
			wednesday: false,
		},
  }
] ;

	const [allUser, setAllUser] = useState(users);
	const [user, setUser] = useState({
		id: 0,
		name: "",
		password: "",
		days: { monday: false, tuesday: false, wednesday: false },
	});

	const update =(User) => {
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
      .min(2,'Too short')
      .max(50,'Too long')
      .required('Required'),
    password:Yup.string()
      .min(2,'Too short')
      .max(50,'Too long')
      .required('Required'),
  })

  const formik=useFormik({
    enableReinitialize:true,
    initialValues:user,
    onSubmit:(values,{resetForm})=>{
      hendleclick(values,resetForm)
    },
    validationSchema:userValidatioon
  })


	return (
		<div className="conatiner">
      <h1 style={{ fontSize: "30px", textAlign: "center" }}>App</h1>

			<div style={{ width: "50%", margin: "auto" }}>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "70ch" },
					}}
					noValidate
					autoComplete="off">
					<TextField
						id="outlined-basic"
						value={formik.values.name}
						label="Name"
						variant="outlined"
						name="name"
						onChange={formik.handleChange}
					/>
          <div>{formik.errors.name}</div>
					<TextField
						id="filled-basic"
						value={formik.values.password}
						label="Password"
						variant="filled"
						name="password"
						onChange={formik.handleChange}
					/>
          <div>{formik.errors.password}</div>
					<strong>Available on:</strong>
					<FormControlLabel
						control={<Checkbox id="monday" checked={formik.values.days.monday} name="days.monday" onClick={formik.handleChange} />}
						label="Monday"
					/>
					<FormControlLabel
						control={
							<Checkbox id="tuesday" checked={formik.values.days.tuesday} name="days.tuesday" onClick={formik.handleChange} />
						}
						label="Tuesday"
					/>
					<FormControlLabel
						control={
							<Checkbox
								id="wednesday"
								checked={formik.values.days.wednesday}
								name="days.wednesday"
								onClick={formik.handleChange}
							/>
						}
						label="Wednesday"
					/>
					<Button
						variant="contained"
						onClick={formik.handleSubmit}>
						Submit
					</Button>
				</Box>
			</div>
      
      <div className="cards" style={{ display: "flex", flexFlow: "row wrap" }}>
				<AnotherCard  allUser={allUser} setAllUser={setAllUser} update={update}/>
			</div>
      
		</div>
	);
}

export default App;
