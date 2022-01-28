import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
// import AdminRoute from '../AdminRoute/AdminRoute';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAllBlogs from '../ManageAllBlogs/ManageAllBlogs';
import MyBlogs from '../MyBlogs/MyBlogs';
import AddNewTravel from '../AddNewTravel/AddNewTravel';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddTravelBlog from '../AddTravelBlog/AddTravelBlog';


const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar />
            {/* <img className="" src={user?.photo} alt="" /> */}
            {
                user?.email &&

                <Typography variant="h5" gutterBottom component="div">
                    {user.displayName}
                </Typography>

            }
            <Divider />
            {/* <Link to="/home"><Button color="inherit">Appointment</Button></Link> */}


            <Link className="text-decoration-none" to={`${url}`}><Button variant="contained" color="error">Dashboard</Button></Link><br /><br />
            <Link className="text-decoration-none mt-2" to="/home"><Button variant="contained" color="error">Home</Button></Link><br />

            {/* <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link><br />
            <Link to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link><br />
            <Link to={`${url}/myreview`}><Button color="inherit">Reviews</Button></Link><br /> */}
            {/* <Link to="/login"><Button onClick={logout} color="inherit">Logout</Button></Link> */}
            {/* <Link to={`${url}/addproducts`}><Button color="inherit">Add a Product</Button></Link> */}
            {/* {admin && <Box>

                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/manageallorders`}><Button color="inherit">Manage  all Orders</Button></Link>

            </Box>
            } */}

            {/* {!admin &&
                <Box>
                    <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link><br />
                    <Link to={`${url}/myblogs`}><Button color="inherit">My Blogs</Button></Link><br />

                </Box>
            } */}

            <Link to={`${url}/addblog`}><Button color="inherit">Add Travel Blog</Button></Link>
            {admin && <Box><Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link></Box>}
            <Link to={`${url}/addtravel`}><Button color="inherit">Add New Travel</Button></Link>
            <Link to={`${url}/manageallblogs`}><Button color="inherit">Manage  all Blogs</Button></Link>
            <Link to="/login"><Button onClick={logout} color="inherit">Logout</Button></Link> <LogoutIcon />

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
                        Dashboard
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
                        {/* <DashBoard></DashBoard> */}
                    </Route>
                    {/* <Route path={`${path}/addtravel`}>
                        <AddNewTravel></AddNewTravel>
                    </Route> */}

                    <Route path={`${path}/addblog`}>
                        <AddTravelBlog></AddTravelBlog>
                    </Route>

                    <AdminRoute path={`${path}/addtravel`}>
                        <AddNewTravel></AddNewTravel>
                    </AdminRoute>

                    <Route path={`${path}/myblogs`}>
                        <MyBlogs></MyBlogs>
                    </Route>


                    {/* <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route> */}
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    {/* <Route path={`${path}/manageallblogs`}>
                        <ManageAllBlogs></ManageAllBlogs>
                    </Route> */}


                    {/* path={`${path}/makeadmin`}
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallproducts`}>
                        <ManageAllProduct></ManageAllProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallblogs`}>
                        <ManageAllBlogs></ManageAllBlogs>
                    </AdminRoute> */}


                    {/* <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproducts`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
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