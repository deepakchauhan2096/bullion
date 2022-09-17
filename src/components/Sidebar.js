import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Biotech, Dvr, JoinFull, LeakAdd, ManageSearch, PersonAdd, PostAdd } from '@mui/icons-material';
import LinkBBP from './LinkBBP';



const drawerWidth = 280;

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

//     const [selected, setSelected] = useState({backgroundColor:'none'});
    
//    const handleSelected = (event, index) => {
//     if(selected ===  )
//         setSelected({backgroundColor:'whitesmoke'})
//    }


    const drawerList = (
        <div>
            {/* <Toolbar sx={{ backgroundColor: "#2196f3",color:"white",borderRight:"#2196f3" }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    Billion Dashboard
                </Typography></Toolbar> */}
            <Divider />
            <List>
                <Link to='/' className='link'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <JoinFull />
                            </ListItemIcon>
                            <ListItemText primary="New Combination" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/listbbp' className='link' >
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <LeakAdd />
                            </ListItemIcon>
                            <ListItemText primary="BBP" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/inquiry' className='link' >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ManageSearch />
                            </ListItemIcon>
                            <ListItemText primary="Inquiry" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/addnewitem' className='link'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PostAdd />
                            </ListItemIcon>
                            <ListItemText primary="Add New Item" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/userformaddsupplier' className='link'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonAdd />
                            </ListItemIcon>
                            <ListItemText primary="Add Supplier" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link to='/ordertosupplier' className='link'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Dvr />
                            </ListItemIcon>
                            <ListItemText primary="Order To Supplier" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
            </List>

            {/* <Divider /> */}

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `100%` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#2196f3"
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
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Bullion Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', }}>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: false, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, }
                        }}
                    >
                        {drawerList}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: "70px" },
                        }}
                        open
                    >
                        {drawerList}
                    </Drawer>
                </Box>

            </Box>
        </>
    );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Sidebar;
