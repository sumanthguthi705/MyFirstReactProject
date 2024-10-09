import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home  from './Auth/Home';
import StudentID from './StudentID';
import UserRegistration from './Fitness/UserRegistration';
import SignIn from './Fitness/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ExerciseOptions from './Fitness/ExerciseOptions';
import FitnessTab from './Fitness/FitnessTab';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={SignIn}/>
        <Route path='login' Component={UserRegistration}/>
        <Route path='signin' Component={SignIn}/>
        <Route path='navbar' Component={NavBar}/>
        <Route path='ExerciseOptions' Component={ExerciseOptions}/>
        <Route path='FitnessTab' Component={FitnessTab}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
