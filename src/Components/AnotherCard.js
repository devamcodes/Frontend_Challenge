import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardHeader, Typography, Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material';

const AnotherCard = (props) => {

    const users = [
        {
          id : "1",
          firstName : "Kushal",
          password : 'XYZ123',
          days:{
            monday: false,
            tuesday: false,
            wednesday: true
          }
        },
        {
          id : "2",
          firstName : "Kunj",
          password : 'XYZ123',
          days:{
            monday: false,
            tuesday: false,
            wednesday: true
          }
        },
        {
          id : "3",
          firstName :"KASHISH",
          password : 'XYZ123',
          days:{
            monday: true,
            tuesday: false,
            wednesday: false
          }
        },
        {
          id : "4",
          firstName :"Devam",
          password : 'XYZ123',
          days:{
            monday: true,
            tuesday: false,
            wednesday: false
          }
        },
        {
          id : "5",
          firstName :"Harshil",
          password : 'XYZ123',
          days:{
            monday: false,
            tuesday: false,
            wednesday: true
          }
        }
    ]

    const [ list, setList] = useState(users);

   const deleteItem = (e) => {
        console.log('Pressed on delete');
        let users = e.target.getAttribute("removeCard")
        setList(list.filter(items => items.id!==users));
    }

  return (
    <>
        {list.map(users => (
            <Card variant='outlined' style={{width:320, height:350, marginTop: 10, marginLeft: 10}}>
                <CardHeader 
                title='User'
                subheader='User availability'
                sx={{ color: 'red'}}
                action={
                    <IconButton> 
                        <Close onClick={deleteItem} removeCard={users.id}/>
                    </IconButton>
                }></CardHeader>
                <CardContent>
                    <Typography variant='h5'>Name : {users.firstName}</Typography>
                    <Typography variant='h5'>Password : {users.password} </Typography>
                </CardContent> 
                <CardContent>
                    <Typography variant='h5' sx={{ mb: -3}}>Available On :</Typography>
                </CardContent>
                <CardActions sx={{ mb: -3}}>
                    <Button>Monday </Button>
                    <Button>Tuesday </Button>
                    <Button>Wednesday </Button>
                </CardActions>
                <CardContent style={{display:'flex', flexFlow:"row wrap", justifyContent:'space-around' }}>
                    <i class="fa-solid fa-circle" style={{color:`${users.days.monday===true?'green':'red'}`}} />
                    <i class="fa-solid fa-circle" style={{color:`${users.days.tuesday===true?'green':'red'}`}}/>
                    <i class="fa-solid fa-circle" style={{color:`${users.days.wednesday===true?'green':'red'}`}}/>
                </CardContent>
                <CardActions>
                    <Button color='primary' fullWidth>Update</Button>
                </CardActions>
            </Card>
        ))}
    </>
  )
}
export default AnotherCard