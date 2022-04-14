import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/logo.png'
import './TopPanel.css'
import { useNavigate } from 'react-router-dom'
function TopPanel(props) {
    const pages = ['HOME', 'DOCS', 'WEB'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [openNavmenu, setopenNavMenu] = React.useState(false)

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const nav = useNavigate()

    const handleOpenNavMenu = (event) => {
        setopenNavMenu(true)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        if (e.target.innerText === pages[0]) {
            nav('/')
        } else if (e.target.innerText === pages[1]) {
            nav('/docs')
        } else if (e.target.innerText === pages[2]) {
            nav('/web')
        }
        setopenNavMenu(false)
        setAnchorElUser(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar style={{ background: '#ffffff', color: '#000000' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={openNavmenu}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography style={{ color: '#000000' }} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontWeight: 'bolder' }}
                    >
                        SMS SERVICE
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bolder' }}
                    >
                        SMS SERVICE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => {
                            let active = props.active
                            if (page===active) {
                                return (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        variant='contained'
                                        sx={{ my: 2, color: 'white', display: 'block', marginRight: '20px', borderRadius: '20px' }}
                                    >
                                        {page}
                                    </Button>
                                )
                            }else{
                                return (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        variant='outlined'
                                        sx={{ my: 2, color: 'black', display: 'block', marginRight: '20px', borderRadius: '20px' }}
                                    >
                                        {page}
                                    </Button>
                                )
                            }
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <img className='logo' src={Logo} alt='logo' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography style={{ color: '#000000' }} textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopPanel