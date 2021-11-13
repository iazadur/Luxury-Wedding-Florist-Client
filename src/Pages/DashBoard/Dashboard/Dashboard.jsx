import * as React from 'react';
import useAuth from '../../../Hooks/useAuth';

import { Switch, Route, useRouteMatch, Link, NavLink } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Toolbar, IconButton, Divider, Typography, List, Container, Avatar, CardHeader } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { Menu, ChevronLeft, ShoppingCart, People, BarChart, Logout } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard'
import MyOrders from '../Order/MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../Product/AddProduct/AddProduct';
import ManageProducts from '../Product/ManageProducts/ManageProducts';
import ManageOrders from '../Order/ManageOrders/ManageOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PaymentIcon from '@mui/icons-material/Payment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Review from '../Review/Review/Review';


const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const useStyles = makeStyles({
  logo: {
    color: "#fff",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "600",

  },
  logoSpan: {
    fontSize: "16px",
    color: "#F1C40F"
  },
  textD: {
    textDecoration: "none !important",
    color: "rgba(0, 0, 0, 0.87) !important"
  }
})
const mdTheme = createTheme();

const Dashboard = () => {
  const { user, logout, admin } = useAuth()
  let { path, url } = useRouteMatch();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { logo, logoSpan } = useStyles()



  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{ background: 'linear-gradient(120deg, #FF8CAB ,#7366FF)' }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <Menu />
            </IconButton>
            <NavLink to="/">
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography className={logo} variant="h6body1">TRE<span className={logoSpan}>ND</span></Typography>
              </Box>
            </NavLink>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>

            <CardHeader
              avatar={
                <Avatar src={user.photoURL}></Avatar>
              }
              title={user.displayName}
              subheader={user.email}
            />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <div>
              <Link to={`${url}`}>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>

              {user && !admin && <Link to={`${url}/myOrders`}>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="My Orders" />
                </ListItem>
              </Link>}

              {user && !admin && <Link to={`${url}/addReview`}>
                <ListItem button>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary="Add Review" />
                </ListItem>
              </Link>}
              {user && !admin && <Link to={`${url}/payment`}>
                <ListItem button>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payment" />
                </ListItem>
              </Link>}

              {/* Admin section */}
              {admin && <Link to={`${url}/manageAllOrders`}>
                <ListItem button>
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText primary="Manage All Orders" />
                </ListItem>
              </Link>
              }


              {admin && <Link to={`${url}/manageProducts`}>
                <ListItem button>
                  <ListItemIcon>
                    <ProductionQuantityLimitsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manage Products" />
                </ListItem>
              </Link>}

              {admin && <Link to={`${url}/addProduct`}>
                <ListItem button>
                  <ListItemIcon>
                    <AddBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Product" />
                </ListItem>
              </Link>}
              {admin && <Link to={`${url}/makeAdmin`}>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Make Adimn" />
                </ListItem>
              </Link>}
            </div>

          </List>
          <Divider />
          <List>
            <div>

              <ListItem button onClick={logout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>

            </div></List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>


            <Switch>
              {/* Normal User */}
              <Route exact path={path}>
                <AdminDashboard />
              </Route>
              <Route path={`${path}/myOrders`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/addReview`}>
                <Review />
              </Route>
              <Route path={`${path}/payment`}>
                <Pay />
              </Route>

              {/* Admin */}
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct />
              </AdminRoute>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageOrders />
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts />
              </AdminRoute>
            </Switch>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard