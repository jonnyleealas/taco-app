import './App.css';
import './components/signUp/SignUp'
import SignUp from './components/signUp/SignUp';
import ShowUsers from './components/showUsers/ShowUsers';
// import ShowUser from './components/showUser/showUser';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
        <Login />
        <SignUp />
        {/* <ShowUsers /> */}
        {/* <ShowUser /> */}
    
    </div>
  );
}

export default App;

