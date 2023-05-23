import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

const drawerWidth = 240
const navItems = ['Projects', 'About', 'Contact']
const pageNames = ['projects', 'about', 'contact']

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box className='drawer-box' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/" className='ek-logo'>
        {/* <Image
          src="/ek-logo-black.png"
          alt="13"
          width={80}
          height={80}
          priority
        /> */}
        EK
      </Link>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <Link href={pageNames[i]}>
                <ListItemText sx={{ fontSize: '2rem'}} primary={item} disableTypography />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='navbar__main' elevation={0} component="nav" sx={{ position: 'fixed' }} enableColorOnDark>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '2rem', marginLeft: '0.6rem' }}/>
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'left' },
              alignItems: 'center',
              position: 'relative',
              marginRight: '3rem',
            }}
            // <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/" className='ek-logo'>
              {/* <Image
                src="/ek-logo-white.png"
                alt="logo"
                width={60}
                height={60}
                priority
              /> */}
              EK
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, i) => (
              <Button key={item} className='app-bar__button' sx={{ color: '#fff' }}>
                <Link href={pageNames[i]}>{item}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar
