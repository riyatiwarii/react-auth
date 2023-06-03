  import Home from './pages/home';
  import SignUp from './pages/signup';
  import './App.css';
  import { Outlet, createBrowserRouter } from "react-router-dom"
  import SignIn from './pages/signin';
  import Header from './pages/header';
  import HeroSection from './pages/herosection';
  import { Provider } from 'react-redux';
  import store from './redux/store';
  import ProtectedRoute from "./utils/protectedroute";

  function App() {
    return (
      <Provider store={store}>
      <Header/>
      <Outlet/>
      </Provider>
    );
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <HeroSection/>
        },  
        {
          path: "/signin",
          element: <SignIn/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/home",
          element: <ProtectedRoute element={<Home/>} />,
        },
      ]
    },
  ])

  export default appRouter;
