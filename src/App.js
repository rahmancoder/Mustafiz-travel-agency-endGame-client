// import logo from './logo.svg';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        {/* <Home></Home> */}
        {/* <DashBoard></DashBoard> */}

      </AuthProvider>
    </div>
  );
}

export default App;
