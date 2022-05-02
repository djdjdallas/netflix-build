import React from 'react';
import "./App.css";
import "./screens/homeScreen.css" ;
import Login from './screens/LoginScreen';

import HomeScreen from './screens/homeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function app() {
 const user = true;
 
  return (
    <div className="app">
        
       
        <BrowserRouter>
          { !user ? ( <Login /> ) : (  <Routes>
                
                <Route index element={<HomeScreen/>} />
                
            </Routes> )}
               
              </BrowserRouter>

        </div>
  );
}

export default app;
