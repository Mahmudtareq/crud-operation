import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Register = () => {
    return (
        <div>
           <Typography sx={{my:3,color: 'primary.main'}} variant="h5">
                  CREATE A NEW USER
                </Typography>
            <form >
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            // onChange={handleOnChange}
                    variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            // onChange={handleOnChange}
                    variant="standard" />
                
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            // onChange={handleOnChange}
                            variant="standard" />
                        
                       
                        <Button variant="contained" sx={{ width: '75%', m: 2 }}
                            type="submit">
                            Submit</Button>
                       
                    </form>
        </div>
    );
};

export default Register;