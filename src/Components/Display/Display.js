import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



const Display = ({data, clear}) => {

    const handleClear = (e) => {
        e.preventDefault();
        clear();
    }

  return (
    <div>
        <Typography variant="h4">Thank you, {data.fullName.split(" ")[0]}!</Typography>
        <Typography variant='body1'>
            Please review your details:
        </Typography>
        <List>
            <ListItem disablePadding>
                <ListItemAvatar>
                    <AccountCircleIcon/>
                </ListItemAvatar>
                <ListItemText primary={data.fullName}/>
            </ListItem >
            <ListItem disablePadding>
                <ListItemAvatar>
                    <NumbersIcon/>
                </ListItemAvatar>
                <ListItemText primary={data.npiNumber}/>
            </ListItem >
            <ListItem disablePadding>
                <ListItemAvatar>
                    <BusinessIcon/>
                </ListItemAvatar>
                <ListItemText primary={data.address}/>
            </ListItem>
            <ListItem disablePadding>
                <ListItemAvatar>
                    <PhoneIcon/>
                </ListItemAvatar>
                <ListItemText primary={data.phone}/>
            </ListItem >
            <ListItem disablePadding>
                <ListItemAvatar>
                    <EmailIcon/>
                </ListItemAvatar>
                <ListItemText primary={data.email}/>
            </ListItem>
        </List>
        <Button variant="contained" onClick={handleClear}>
            Clear
        </Button>
    </div>
  )
}

export default Display;