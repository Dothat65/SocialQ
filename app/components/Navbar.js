// "use client";

// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import PersonIcon from '@mui/icons-material/Person';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'Home', icon: <HomeIcon /> },
//     { text: 'Add Flashcard', icon: <AddCircleIcon /> },
//     { text: 'Profile', icon: <PersonIcon /> },
//   ];

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {menuItems.map((item, index) => (
//           <ListItem button key={index}>
//             {item.icon && (
//               <Box sx={{ minWidth: 30, marginRight: 2 }}>
//                 {item.icon}
//               </Box>
//             )}
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="static" sx={{ bgcolor: '#11144c', boxShadow: 'none', padding: 1 }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           {/* Left Section: Hamburger Menu */}
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>

//           {/* Center Section: App Name */}
//           {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
//            SocialQ
//           </Typography> */}

//           {/* Right Section: Placeholder (can add more items or icons here) */}
//           <Box />
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {list()}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;



import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg" // Replace with your logo path
            alt="SocialQ Logo"
            className="h-10 w-auto"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

