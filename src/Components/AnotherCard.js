import React from 'react'
import { Card, CardActions, CardContent, CardHeader, Typography, Button, ButtonGroup , IconButton, Grid} from '@mui/material'
import { Close } from '@mui/icons-material';

const AnotherCard = (props) => {
    const {logger,allUser,setAllUser}=props
    const deleteItem = (users) => {
        logger.Deleted_card_username.push(users.name)
      setAllUser(allUser.filter(items => items.id!==users.id));
    }

  return (
    <>
        {allUser.map(users => (

            <Card variant='outlined' key={users.id} style={{width:345, height:355,margin:15}}>
                <CardHeader 
                title='User'
                sx={{ color: 'red', textAlign:'center'}}
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
                    <ButtonGroup variant="outlined" style={{marginLeft:"16px"}}>
                        <Button >M </Button>
                        <Button >T </Button>
                        <Button >W </Button>
                        <Button >T </Button>
                        <Button >F </Button>
                        <Button >S </Button>
                        <Button >S </Button>
                    </ButtonGroup>                    
                </CardActions>
                <CardContent style={{display:'flex', flexFlow:"row wrap", justifyContent:'space-around', marginTop:'10px' }}>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.monday===true?'green':'red'}`}} />
                    <i className="fa-solid fa-circle" style={{color:`${users.days.tuesday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.wednesday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.thursday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.friday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.saturday===true?'green':'red'}`}}/>
                    <i className="fa-solid fa-circle" style={{color:`${users.days.sunday===true?'green':'red'}`}}/>
                </CardContent>
                <CardActions>
                    <Button color='info' href='#form' variant='contained' fullWidth onClick={() => {props.update(users)}}>Update</Button>
                </CardActions>
            </Card>
        ))}
    </>
  )
}
export default AnotherCard