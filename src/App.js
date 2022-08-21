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
			password: "Kushal_123",
			days: {
				monday: false,
				tuesday: false,
				wednesday: false,
			}
		},
		{
			id: 2,
			name: "Umang Bhai",
			password: "Umang_123",
			days: {
				monday: true,
				tuesday: false,
				wednesday: false,
			}
		},
		{
			id: 3,
			name: "user3",
			password: "@user123",
			days: {
				monday: true,
				tuesday: false,
				wednesday: false,
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
				wednesday: true,
			},
		},
		{
			id: 6,
			name: "User 6",
			password: "@user123",
			days: {
				monday: true,
				tuesday: true,
				wednesday: true,
			},
		},
		{
			id: 7,
			name: "Jethalal",
			password: "Babita_Jalebi",
			days: {
				monday: false,
				tuesday: false,
				wednesday: true,
			},
		}
	];

	const [allUser, setAllUser] = useState(users);
	
	let element=useRoutes([{
            path:'/',
            element:<Home allUser={allUser} setAllUser={setAllUser}/>
        },
        {
            path:'/login',
            element:<Login allUser={allUser}/>
        }
    ]);
	return element;
}

export default App;