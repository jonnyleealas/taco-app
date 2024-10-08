import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';

// import SignUp from './components/signUp/SignUp';
import ShowUsers from './components/showUsers/ShowUsers';
// import ShowUser from './components/showUser/showUser';
import Home from './components/home/Home'
import SignUp from './components/home/Header/SignUp/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/api/v1/users',
    element: <ShowUsers />
  },
  {
    path: '/api/v1/auth/signup',
    element: <SignUp />
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;

