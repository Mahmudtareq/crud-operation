import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Register from '../Register/Register';
import UserList from '../UserList/UserList';
import DashboardHome from '../DashboardHome/DashboardHome';
const drawerWidth = 220;

function DashBoard(props) {
  const { window } = props;
//   const { logOut,admin} = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography sx={{color:'info.main'}} variant="h5">
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button  variant="contained">Back To Home</Button>
          </NavLink>
      </Typography>
      </Toolbar>
      <Divider />
      {/* {
        admin && <Box>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProducts`}>
            <Button sx={{ my: 1, px: 4 }} variant="contained" color="inherit">Add Products</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/addCategories`}>
            <Button sx={{ my: 1, px: 4 }} variant="contained" color="inherit">Add Categories</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProduct`}>
            <Button sx={{ my: 1}}variant="contained" color="inherit" >Manage Product</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Make Admin</Button>
          </NavLink>
          
          <NavLink style={{ textDecoration: 'none',color:'red' }} to="/">
            <Button sx={{ my: 1, px: 7.5 }} onClick={logOut} variant="contained" color="inherit">LogOut</Button>
          </NavLink>
      
        </Box>
      }
      {
        !admin && <Box>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Dashboard</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/reviews`}>
            <Button sx={{ my: 1}}variant="contained" color="inherit">Product Review</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/myOrder`}>
            <Button sx={{ my: 1, px: 6 }} variant="contained" color="inherit">My Order</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/payMent`}>
            <Button sx={{ my: 1}} variant="contained" color="inherit" >PayMent System</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none',color:'red' }} to="/">
            <Button sx={{ my: 1, px: 7.5 }} onClick={logOut} variant="contained" color="inherit">LogOut</Button>
          </NavLink>
        </Box>
          } */}
          
          <NavLink style={{ textDecoration: 'none' }} to={`${url}`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Dashboard</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/register`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">Register</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`${url}/userList`}>
            <Button sx={{ my: 1, px: 5 }} variant="contained" color="inherit">UserList</Button>
          </NavLink>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
           <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/register`}>
           <Register></Register>
          </Route>
          <Route path={`${path}/userList`}>
            <UserList></UserList>
        </Route>

        </Switch>
      </Box>
    </Box>
  );
}


DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;