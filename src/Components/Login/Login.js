import {Grid } from '@mui/material';
import React from 'react';
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Grid container spacing={2}>
                 <Grid item sx={{ mt: 10}} xs={12} md={6}>
                    <Typography sx={{ color: 'info.main', mt: 6 ,textAlign:'center'}} variant="h6" gutterBottom>
                        LOGIN
                    </Typography>
                    {/* <form onSubmit={handleLoginSubmit}> */}
                    <form >
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
                            Login</Button>
                        {/* <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button sx={{textAlign:'center',color:'success.main'}} variant="text">New User? Please Register</Button>
                        </NavLink> */}

                       
                        {/* {isLoading && <CircularProgress />}
                      
                        {user?.email && <Alert severity="success"> User Login Successfully ???</Alert>}
                        {error && <Alert severity="error"> {error}</Alert>} */}
                    </form>
                    {/* <Button onClick={handleGoogleSignIn} variant="contained">Google SignIn</Button> */}
               </Grid>
                
           </Grid>
        </div>
    );
};

export default Login;