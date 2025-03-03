import React from 'react';
import ExcuseGenerator from './excuseGenerator'; // Importing the generator component
import './App.css';
import LandingPage from './landingPage';
import LoginPage from '../src/components/loginPage.jsx';
import SignupPage from './signupPage.jsx';
import FeedbackPage from './components/feedbackPage.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ExcuseGenerator />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path='/feedback' element={<FeedbackPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;