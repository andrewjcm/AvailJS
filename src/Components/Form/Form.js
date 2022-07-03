import React, { useState } from 'react'
import './Form.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';


const Form = ({passFormData}) => {

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
    <form data-testid="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
            <Typography sx={{textAlign: 'center'}}variant="h5">AvailJS Signup Form</Typography>
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
                <Button variant="contained" color="info" onClick={handleClear}>
                    Clear
                </Button>
                <Button type="submit" variant="contained" color="secondary">
                    Submit
                </Button>
            </div>
        </Stack>
    </form>
  );
}

export default Form;