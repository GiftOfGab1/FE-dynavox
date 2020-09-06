import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm';
import MainPage from '../MainPage/MainPage.js';
import PhrasesPage from '../PhrasesPage/PhrasePage.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PhrasesPage />
      {/* <MainPage /> */}
      {/* <ChooseVoiceForm /> */}
    </div>
  );
}

export default App;
