import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm';
import MainPage from '../MainPage/MainPage.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ChooseVoiceForm />
    </div>
  );
}

export default App;
