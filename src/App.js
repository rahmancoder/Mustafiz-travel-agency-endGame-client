// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TravelList from './components/TravelList/TravelList';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        {/* <Home></Home> */}
        {/* <DashBoard></DashBoard> */}

        <Router>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/travelblog">
              <TravelList></TravelList>

            </Route>

            {/* <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route> */}
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
