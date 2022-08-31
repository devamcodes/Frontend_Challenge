import React, { useState } from "react";
import Route from "./Components/Route" 


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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
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
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false
			},
		}	
	];

	const [allUser, setAllUser] = useState(users);
	
	return (
		<Route allUser={allUser} setAllUser={setAllUser}/>
	)
}

export default App;