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
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import CheckOut from './Pages/CheckOut/CheckOut';
import OrderUpdate from './Pages/DashBoard/Order/OrderUpdate/OrderUpdate';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/checkout/:id">
              <CheckOut />
            </Route>
            <Route path="/orderUpdate/:id">
              <OrderUpdate />
            </Route>
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
