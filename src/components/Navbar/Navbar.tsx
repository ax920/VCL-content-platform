import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NAV, TEXT, CONSTANTS, ROUTES } from '@statics';
import { useHandleLogout } from '@services/authService';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { appActions } from '@redux/slices/AppRedux';
import { selectIsLoggedIn } from '@redux/slices/AuthRedux';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link';
import './Navbar.css';

const Navbar: React.FC<{}> = () => {
  const location = useLocation();
  const { logout } = useHandleLogout();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleOpenLoginModal = () => {
    dispatch(
      appActions.openModal({
        key: CONSTANTS.MODALS.LOGIN,
      })
    );

    handleMenuClose();
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const [projectAnchorEl, setProjectAnchorEl] = React.useState<null | HTMLElement>(null);
  const projectOpen = Boolean(projectAnchorEl)

  // change text color of button to blue when clicked
  const handleProjectMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProjectAnchorEl(event.currentTarget);
    let target = event.target as HTMLElement;
    if (target.style.color !== '#4C6199') {
      target.style.color = '#4C6199';
    } else {
      target.style.color = 'black';
    }
  };

  const handleProjectMenuClose = () => {
    setProjectAnchorEl(null);
  };

  window.addEventListener('handlePageChange', (event) => {

  });

  const projects = useAppSelector(selectProjects)

  const renderedLinks = NAV.map(({ TITLE, REF }) => {
    const active = REF === location.pathname ? 'active' : '';
    const projectsButtonStyle: React.CSSProperties = {
      color: 'black',
	    fontFamily: 'Poppins',
	    fontStyle: 'normal',
	    fontWeight: '600',
	    fontSize: '15px',
	    lineHeight: '22.5px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      paddingBottom: '10px',
      letterSpacing: '-0.4px'
    };

    if (TITLE === TEXT.PAGE_TITLES.PROJECTS) {
        return (
              <React.Fragment key={REF}>
                <Button
                    id='basic-button'
                    onClick={handleProjectMenuClick}
                    aria-controls={projectOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={projectOpen ? 'true' : undefined}
                    style={projectsButtonStyle}
                >
                    {TEXT.PAGE_TITLES.PROJECTS} 
                </Button>
                <Menu
                    id="basic-menu" 
                    anchorEl={projectAnchorEl}
                    open={projectOpen}
                    onClose={handleProjectMenuClose}
                    MenuListProps={{
                        'aria-labelledby' : 'basic-button'
                    }}
                >
                    <MenuItem onClick={handleProjectMenuClose}>
                                <GenericLink name="All Projects" to={`${ROUTES.PROJECT.BASE}`}/>
                    </MenuItem>
                    {
                        projects.map((e, i) => {
                            return (
                                <MenuItem 
                                key={i}
                                onClick={handleProjectMenuClose}>
                                    <GenericLink
                                        name={e.name}
                                        to={`${ROUTES.PROJECT.BASE}/${e.name}`}
                                    />
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
              </React.Fragment>
            )
    } else {
        return (
            <GenericLink 
                key={REF} 
                name={TITLE} 
                to={REF} 
                className={`nav-link ${active}`}
            />
            )
    };
  });

  return (
    <div>
      <AppBar position="sticky" className="nav-appbar">
        <Toolbar className="nav-toolbar">
          <Typography className="nav-title">{TEXT.COMMON.TITLE}</Typography>
          <span className="nav-rendered-links">{renderedLinks}</span>
          <IconButton onClick={handleMenuClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}>
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout}>{TEXT.COMMON.LOGOUT}</MenuItem>
            ) : (
              <MenuItem onClick={handleOpenLoginModal}>
                {TEXT.COMMON.LOGIN}
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
