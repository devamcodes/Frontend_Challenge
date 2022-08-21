import React from 'react'
import { Card, CardActions, CardContent, CardHeader, Typography, Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material';

const AnotherCard = (props) => {
    
    const deleteItem = (users) => {
      props.setAllUser(props.allUser.filter(items => items.id!==users.id));
      console.log('Delete user ', users);
    }

  return (
    <>
        {props.allUser.map(users => (
            <Card variant='outlined' key={users.id} style={{width:325, height:345, marginTop: 10, marginLeft: 10}}>
                <CardHeader 
                title='User'
                sx={{ color: 'red'}}
                action={
                    <IconButton onClick={() => {deleteItem(users)}} > 
                        <Close />
                    </IconButton>
                }></CardHeader>
                <CardContent>
                    <Typography variant='h5'>Name : {users.name}</Typography>
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
                    <i className="fa-solid fa-circle" style={{color:`${users.days.monday===true?'green':'red'}`}} />
                    <i className="fa-solid fa-circle" style={{color:`${users.days.tuesday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.wednesday===true?'green':'red'}`}}/>
                </CardContent>
                <CardActions>
                    <Button color='primary' href='#form' fullWidth onClick={() => {props.update(users)}}>Update</Button>
                </CardActions>
            </Card>
        ))}
    </>
  )
}
export default AnotherCard