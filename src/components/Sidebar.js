import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
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
import { Dashboard, Dvr, JoinFull, LeakAdd, ManageSearch, PersonAdd, PostAdd, Store  } from '@mui/icons-material';
import styled from 'styled-components'
import { ListItem } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddNewItems from './AddNewItems';
import AddSuppliers from './Addsuppliers';
import DashboardIcon from '@mui/icons-material/Dashboard';



const drawerWidth = 280;

function Sidebar(props) {

    const Links = styled(Link)`
    width:100%;
    height:35px;
    padding:4px 0 0 6px;
    text-decoration:none;
    color:black;
    line-height:30px;
    &:hover{
        color:white;
    `
    const List = styled.div`
    &:hover{
        background-color:#3596d9;
        color:white;
    }
    `



    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selector, setSelector] = useState('');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSelect = (event, index) => {
        setSelector(index)
    }




    const drawerList = (
        <div>
            <List>
                <ListItem >
                    <Dashboard />
                    <Links to='/home' >Dashboard</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <JoinFull />
                    <Links to='/' >New Combination</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <LeakAdd />
                    <Links to='/listbbp' >BBP</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <PersonAdd />
                    {/* <AddSuppliers /> */}
                    <Links to='/userformaddsupplier' >Add Supplier</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <PostAdd />
                    <Links to='/addnewitem' >Add New Item</Links>
                    {/* <AddNewItems /> */}
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ManageSearch />
                    <Links to='/inquiry' >Inquiry</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <Dvr /><Links to='/ordertosupplier' >Order To Supplier</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <Store /><Links to='/purchaseordernew' >Purchase Order New</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem >
                    <ReceiptIcon />
                    <Links to='/BullionInvoice' >Invoice</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem >
                    <ReceiptIcon />
                    <Links to='/BullionReciept' >Receipt</Links>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem >
                    <PersonOutlineIcon />
                    <Links to='/clientdata' >Client</Links>
                </ListItem>
            </List>
            <Divider />
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
                     style={{overflow:"auto"}}
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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: "64px", zIndex: "45",overflowY:"scroll",height:"88vh" },
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