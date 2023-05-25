
import React from "react";
import "../styles/components/App.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from '../containers/Home';
import CheckOut from '../containers/CheckOut';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layaout from "../components/Layaout";
import AppContext from "../context/AppContext";
import useInitialState from "../hoooks/useInitialState";
import initialState from "../initialState";

function App() {

  const useInitialState = useInitialState();
  
    
  const router = createBrowserRouter([
    
    {
      path:'', 
      element: <Layaout/>, 
      children:[
        {path:'/', element: <Home/>,  errorElement:<NotFound/> },
        {path:'/checkout', element: <CheckOut/> },
        {path:'/checkout/information', element: <Information/> },
        {path:'/checkout/payment', element: <Payment/> },
        {path:'/checkout/success', element: <Success/> },
      ]
    }
  ])

  </AppContext.Provider>
  
  return <RouterProvider router={router} />
  
}

export default App;