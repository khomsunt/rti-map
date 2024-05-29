"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
// import { useAuth } from '../context/AuthContext';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{ menu: 'Home', href: "/" }, { menu: 'Map', href: "/map" }, { menu: 'About', href: "/about" }, { menu: 'Contact', href: "/contact" }, { menu: "seem", href: "/seem" }, { menu: "Artpage", href: "/ArtPage" }];


export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }; // const handleLogout = () => {
  //   logout(); // นี่คือฟังก์ชันที่ต้องการสำหรับการ logout และล้างข้อมูลผู้ใช้
  // };

 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.menu} disablePadding>
            <Link href={item.href} className='w-screen'>
              <ListItemButton sx={{ textAlign: 'center' }}>
                {item.menu}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        {/* {!user && (
          <ListItem disablePadding>
            <Link href="/component" className='w-screen'>
              <ListItemButton sx={{ textAlign: 'center' }}>
                Login
              </ListItemButton>
            </Link>
          </ListItem>
        )} */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.menu} sx={{ color: '#fff' }}>
                <Link href={item.href}>{item.menu}</Link>
              </Button>
            ))}
            
          </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
