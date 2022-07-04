import React, { useState } from 'react'
import './Form.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';


const Form = ({passFormData}) => {
    const blankForm = {
        fullName: {
            label: "Full Name",
            value: "",
            error: false,
            message: ""
        },
        npiNumber: {
            label: "NPI Number",
            value: "",
            error: false,
            message: ""
        },
        address: {
            label: "Business Address",
            value: "",
            error: false,
            message: ""
        },
        phone: {
            label: "Telephone Number",
            value: "",
            error: false,
            message: ""
        },
        email: {
            label: "Email",
            value: "",
            error: false,
            message: ""
        }
    };

    const [formValues, setFormValues] = useState(blankForm);


    const handleClear = (e) => {
        e.preventDefault();
        setFormValues(blankForm);
        
    };

    const handleSubmit = () => {
        passFormData(formValues);
    };

    const handleChange = (prop) => (e) => {
        const newValue = e.target.value;
        if (prop === "phone") {
            const re = /\(?[2-9]\d{2}\)?[-. ]?[2-9]\d{2}[-.]?\d{4}$/;
            validate(prop, newValue, re);
        }
        else if (prop === "email") {
            const re = /^\w+[_.]?\w+@\w+-?\w+\.\w{2,10}$/g;
            validate(prop, newValue, re);
        }
        else {
            updateFormValues(prop, newValue, "", false);
        }
    };

    const validate = (prop, value, regex) => {
        updateFormValues(prop, value, "", false);
        if (!value.match(regex)) {
            const label = formValues[prop].label.toLowerCase();
            updateFormValues(prop, value, `Please enter a valid ${label}.`, true);
        }
    };

    const updateFormValues = (prop, newValue, newMessage, isError) => {
        setFormValues({ 
            ...formValues,
            [prop]: {
                label: formValues[prop].label,
                value: newValue, 
                message: newMessage,
                error: isError
            }
        });
    };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
            <Typography sx={{textAlign: 'center'}} variant="h5">
                AvailJS Signup Form
            </Typography>

            {Object.keys(formValues).map((obj) => (
                <TextField
                    key={obj} 
                    label={formValues[obj].label} 
                    variant='filled' 
                    required
                    value={formValues[obj].value}
                    onChange={handleChange(obj)}
                    error={formValues[obj].error}
                    helperText={formValues[obj].message}
                    />
            ))}
            <div>
                <Button variant="contained" onClick={handleClear}>
                    Clear
                </Button>
                <Button type="submit" 
                    variant="contained" 
                    color="secondary" 
                    disabled={formValues.phone.error || formValues.email.error ? true : false}>
                    Submit
                </Button>
            </div>
        </Stack>
    </form>
  );
}

export default Form;