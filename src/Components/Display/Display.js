import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NumbersIcon from '@mui/icons-material/Numbers';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



const Display = ({data, clear}) => {

    const getIcon = (key) => {
        if (key === "fullName") {
            return <AccountCircleIcon/>;
        }
        else if (key === "npiNumber") {
            return <NumbersIcon/>;
        }
        else if (key === "address") {
            return <BusinessIcon/>;
        }
        else if (key === "phone") {
            return <PhoneIcon/>;
        }
        else if (key === "email") {
            return <EmailIcon/>;
        }
        else {
            return <span></span>;
        }
    }

    const handleClear = (e) => {
        e.preventDefault();
        clear();
    }

  return (
    <div data-testid="display">
        <Typography variant="h4">Thank you, {data.fullName.value.split(" ")[0]}!</Typography>
        <Typography variant='body1'>
            Please review your details:
        </Typography>
        <List>
            {Object.entries(data).map(([obj, attr]) => (
                    <ListItem key={obj} disablePadding>
                        <ListItemAvatar>
                            {getIcon(obj)}
                        </ListItemAvatar>
                        <ListItemText primary={attr.value}/>
                    </ListItem >
            ))}
        </List>
        <Button variant="contained" color="info" onClick={handleClear}>
            Clear
        </Button>
    </div>
  )
}

export default Display;