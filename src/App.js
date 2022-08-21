import React, { useState } from "react";
import Home from "./Components/Home";

import {useRoutes} from 'react-router-dom'
import  Login  from "./Components/Login";


function App() {
	// Data of users
	const users= [ 
		{
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
	];

	// Joint allUser = users   data in an array
	const [allUser, setAllUser] = useState(users);
	
	// To make new data card, all initial value is in user
	let element=useRoutes([{
		path:'/',
		element:<Home allUser={allUser} setAllUser={setAllUser}/>
	},{
		path:'/login',
		element:<Login allUser={allUser}/>
	}
]);
	return element;
}

export default App;
