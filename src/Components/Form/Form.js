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
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const handleClear = (e) => {
        e.preventDefault();
        setFullName("");
        setNpiNumber("");
        setAddress("");
        setPhone("");
        setEmail("");
        setPhoneErrorMessage("");
        setEmailErrorMessage("");
        setPhoneInvalid(false);
        setEmailInvalid(false);
        
    };

    const handleSubmit = (e) => {
        passFormData({
            fullName: fullName,
            npiNumber: npiNumber,
            address: address,
            phone: phone,
            email: email
        });
    };

    const phoneChange = (e) => {
        setPhoneInvalid(false);
        setPhoneErrorMessage("");

        const re = /\(?[2-9]\d{2}\)?[-. ]?[2-9]\d{2}[-.]?\d{4}$/;
        if (!e.target.value.match(re)) {
            setPhoneInvalid(true);
            setPhoneErrorMessage("Please enter a valid phone number.")
        }
        setPhone(e.target.value);

    };

    const emailChange = (e) => {
        setEmailInvalid(false);
        setEmailErrorMessage("");

        const re = /^\w+[_.]?\w+@\w+-?\w+\.\w{2,10}$/g;
        if (!e.target.value.toLowerCase().match(re)) {
            setEmailInvalid(true);
            setEmailErrorMessage("Please enter a valid email address.");
        }
        setEmail(e.target.value);

    };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
            <Typography sx={{textAlign: 'center'}} variant="h5">AvailJS Signup Form</Typography>
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
                onChange={phoneChange}
                error={phoneInvalid ? true : false}
                helperText={phoneErrorMessage}
                />
            <TextField 
                label="Email" 
                variant='filled' 
                required
                value={email}
                onChange={emailChange}
                error={emailInvalid ? true : false}
                helperText={emailErrorMessage}
                />
            <div>
                <Button variant="contained" onClick={handleClear}>
                    Clear
                </Button>
                <Button type="submit" 
                    variant="contained" 
                    color="secondary" 
                    disabled={phoneInvalid || emailInvalid ? true : false}>
                    Submit
                </Button>
            </div>
        </Stack>
    </form>
  );
}

export default Form;