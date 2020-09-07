import React from 'react'
import './App.css'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm'
import MainPage from '../MainPage/MainPage.js'
import PhrasesPage from '../PhrasesPage/PhrasePage.js'

function App() {

  return (
    <div className="App">
      <h1 className='header'>Gift of Gab</h1>
      <Navigation/>
      {/* <PhrasesPage />
      <MainPage /> */}
      <ChooseVoiceForm />
      <Switch>
        <Route
          path='/choose-voice'
          render={() => {
            return (
              <ChooseVoiceForm />
              )
            }}
        />
        <Route
          path='/phrases-page'
          render={() => {
            return (
              <PhrasesPage /> 
              )
            }}
        />
        <Route
          path='/'
          render={() => {
            return (
              <MainPage />
            )
          }}
        />
      </Switch>
      
    </div>
  );
}

export default withRouter(App);
