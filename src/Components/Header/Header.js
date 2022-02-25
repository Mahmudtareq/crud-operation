import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Button, Divider, useTheme } from '@mui/material';
// import useAuth from '../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';




const Header = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display:'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
            [theme.breakpoints.up('sm')]: {
              textAlign: 'center !important'
            },
            
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
               textAlign:'right'
            },
            
            [theme.breakpoints.up('sm')]: {
               textAlign:'left'
            }
      },
      mobileNav: {
        textDecoration: 'none',
        color: 'navy'
      },
      deskTopNav: {
        textDecoration: 'none',
        color: 'white'
        
      }

        
    })
  const { navIcon, navItemContainer, navLogo, mobileNav, deskTopNav } = useStyles();

    const [state, setState] = React.useState(false);

     const list = (
    <Box
      sx={{ width: "250" }}
      role="presentation"
    >
      <List>
           <ListItem button >
             <Box>
             <ListItemText>
                  <Link className={mobileNav}  to="/home">
                    Home
                 </Link>
               </ListItemText>
               <Divider/>

               <ListItemText>
                 <Link className={mobileNav}  to="/login">
                  Login
                 </Link>
               </ListItemText>
               <Divider />
                <ListItemText>
                 <Link className={mobileNav}  to="/dashBoard">
                  DashBoard
                 </Link>
               </ListItemText>

              
               <Divider />

               
               {/* {
                 user?.email ? 
                 <Box>
               <ListItemText>
                       <Link className={mobileNav}  to="/dashboard">
                         Dashboard
                      </Link>
                     </ListItemText>
                     <Divider />
                     

                <ListItemText>
                       <Link className={mobileNav}  to="/">
                         <Button onClick={logOut} sx={{bgcolor:'info.main'}} color="inherit">{user.displayName }Logout</Button>
                      </Link>
                     </ListItemText>
                     <Divider />
                </Box>
                     :
                   <ListItemText>
                     <Link className={mobileNav}  to="/login">
                       <Button color="inherit">Login</Button>
                     </Link>
                   </ListItemText>
                 
                } */}
              
             </Box>
          </ListItem>
      </List>
    </Box>
  );


    return (
       <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={navIcon}
                        onClick={() => setState(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CRUD 
              </Typography>
              <Box className={navItemContainer} sx={{ width: "500" }}>
                <Link className={deskTopNav} to="/home">
                  <Button color="inherit">Home</Button>
                </Link>

                <NavLink className={deskTopNav} to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink className={deskTopNav} to="/dashBoard">
                  <Button color="inherit">DashBoard</Button>
                </NavLink>

                {/* {
                  user?.email ?
                    <Box sx={{width:'250'}}>
                      <Link className={deskTopNav} to="dashboard">
                        <Button color="inherit"> Dashboard</Button>
                      </Link>
                      <Link className={deskTopNav} to="/">
                        <Button sx={{ bgcolor: 'warning.main'}} onClick={logOut} color="inherit"> { user.displayName}  Logout</Button>
                      </Link>
                    </Box>
                    :
                    <Link className={deskTopNav} to="/login">
                      <Button color="inherit">Login</Button>
                    </Link>
                } */}
              </Box>
               
                </Toolbar>
            </AppBar>
            </Box>
    <div>
      
        <React.Fragment >
          <Drawer
            open={state}
              onClose={() => setState(false)}
            >
              {list}
          </Drawer>
        </React.Fragment>
        </div>
      </>

    );
};

export default Header;