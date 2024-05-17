"use client"
// components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        {
            text: 'Services', href: '/services', submenu: [
                { text: 'Web Development', href: '/services/web-development' },
                { text: 'SEO', href: '/services/seo' },
            ]
        },
        { text: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        MyWebsite
                    </Typography>
                    <div>
                        {menuItems.map((item, index) => (
                            <Button key={index} color="inherit" onClick={item.submenu ? handleMenuOpen : null}>
                                {item.submenu ? item.text : <Link href={item.href}>{item.text}</Link>}
                            </Button>
                        ))}
                    </div>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        {anchorEl && menuItems.find(item => item.text === anchorEl.textContent)?.submenu?.map((subitem, index) => (
                            <MenuItem key={index} onClick={handleMenuClose}>
                                <Link href={subitem.href}>{subitem.text}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={toggleDrawer(false)}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
