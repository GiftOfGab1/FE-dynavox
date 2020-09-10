import React, { useEffect } from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm'
import MainPage from '../MainPage/MainPage.js'
import PhrasesPage from '../PhrasesPage/PhrasePage.js'
import { getUserInfo } from '../../Api/getTextToSpeech'
import setUserDetails from '../../Store/Reducers/index'
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../Store/Actions/index'


function App () {
  const User = useSelector((state) => state.AppState.userDetails)
  console.log(User)
  const dispatch = useDispatch();

  
  const getUser = async () => {
    const user = await getUserInfo()    
    return dispatch(setUser(user.data.user, setUserDetails))
  }
  useEffect(() => {
    if(!User) getUser()
  })


  return (
    <div className="App">
      <h1 className='header'>Gift of Gab</h1>
      <Navigation />
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
