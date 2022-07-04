import React, { useState } from 'react'
import './Form.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';


const Form = ({passFormData}) => {
    const blankForm = {
        fullName: "",
        npiNumber: "",
        address: "",
        phone: "",
        email: ""
    };

    const [formValues, setFormValues] = useState(blankForm);

    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const handleClear = (e) => {
        e.preventDefault();
        setFormValues(blankForm);
        setPhoneErrorMessage("");
        setEmailErrorMessage("");
        setPhoneInvalid(false);
        setEmailInvalid(false);
        
    };

    const handleSubmit = () => {
        passFormData(formValues);
    };

    const handleChange = (prop) => (e) => {
        if (prop === "phone") {
            validatePhone(e);
        }
        else if (prop === "email") {
            validateEmail(e);
        }
        setFormValues({ ...formValues, [prop]: e.target.value });
      };

    const validatePhone = (e) => {
        setPhoneInvalid(false);
        setPhoneErrorMessage("");
        const re = /\(?[2-9]\d{2}\)?[-. ]?[2-9]\d{2}[-.]?\d{4}$/;
        if (!e.target.value.match(re)) {
            setPhoneInvalid(true);
            setPhoneErrorMessage("Please enter a valid phone number.")
        }
    };

    const validateEmail = (e) => {
        setEmailInvalid(false);
        setEmailErrorMessage("");
        const re = /^\w+[_.]?\w+@\w+-?\w+\.\w{2,10}$/g;
        if (!e.target.value.toLowerCase().match(re)) {
            setEmailInvalid(true);
            setEmailErrorMessage("Please enter a valid email address.");
        }

    };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
            <Typography sx={{textAlign: 'center'}}variant="h5">AvailJS Signup Form</Typography>
            <TextField 
                label="Full Name" 
                variant='filled' 
                required
                value={formValues.fullName}
                onChange={handleChange("fullName")}
                />
            <TextField 
                label="NPI Number" 
                variant='filled' 
                required
                value={formValues.npiNumber}
                onChange={handleChange("npiNumber")}
                />
            <TextField 
                label="Business Address" 
                variant='filled' 
                required
                value={formValues.address}
                onChange={handleChange("address")}
                />
            <TextField 
                label="Telephone Number" 
                variant='filled' 
                required
                value={formValues.phone}
                onChange={handleChange("phone")}
                error={phoneInvalid ? true : false}
                helperText={phoneErrorMessage}
                />
            <TextField 
                label="Email" 
                variant='filled' 
                required
                value={formValues.email}
                onChange={handleChange("email")}
                error={emailInvalid ? true : false}
                helperText={emailErrorMessage}
                />
            <div>
                <Button variant="contained" color="info" onClick={handleClear}>
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