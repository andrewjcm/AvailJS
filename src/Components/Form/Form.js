import { Typography, TextField, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
}));

const Form = ({passFormData}) => {
    const classes = useStyles();

    const [fullName, setFullName] = useState('');
    const [npiNumber, setNpiNumber] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleClear = (e) => {
        e.preventDefault();
        setFullName("");
        setNpiNumber("");
        setAddress("");
        setPhone("");
        setEmail("");
    };

    const handleSubmit = (e) => {
        passFormData({
            fullName: fullName,
            npiNumber: npiNumber,
            address: address,
            phone: phone,
            email: email
        });
    }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h5">AvailJS Signup Form</Typography>
        <TextField 
            label="Full Name" 
            variant='filled' 
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            />
        <TextField 
            label="NPI Number" 
            variant='filled' 
            required
            value={npiNumber}
            onChange={e => setNpiNumber(e.target.value)}
            />
        <TextField 
            label="Business Address" 
            variant='filled' 
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
            />
        <TextField 
            label="Telephone Number" 
            variant='filled' 
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            />
        <TextField 
            label="Email" 
            variant='filled' 
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        <div>
            <Button variant="contained" onClick={handleClear}>
                Clear
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </div>
    </form>
  );
}

export default Form;