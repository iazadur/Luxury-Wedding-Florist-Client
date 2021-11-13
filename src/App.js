import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import CheckOut from './Pages/CheckOut/CheckOut';
import OrderUpdate from './Pages/DashBoard/Order/OrderUpdate/OrderUpdate';
import UpdateProduct from './Pages/DashBoard/Product/UpdateProduct/UpdateProduct';
import PublicRoute from './Pages/Login/PublicRoute/PublicRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PublicRoute path="/login">
              <Login />
            </PublicRoute>
            <PublicRoute path="/register">
              <Register />
            </PublicRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <AdminRoute path="/orderUpdate/:id">
              <OrderUpdate />
            </AdminRoute>
            <AdminRoute path="/updateProduct/:id">
              <UpdateProduct />
            </AdminRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/">
              <Home />

            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
