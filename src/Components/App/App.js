import React from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm'
import MainPage from '../MainPage/MainPage'
import PhrasePage from '../PhrasesPage/PhrasePage'
import SubCategoriesPage from '../SubCategoriesPage/SubCategoriesPage'
import useApp from './useApp'
import { useSelector } from 'react-redux'


function App() {
  useApp()
  const User = useSelector(state => state.AppState.userDetails)


  return (
    <div className="App">
      <h1 className='header'>Gift of Gab</h1>
      <Navigation />
      <Switch>
        <Route
          exact path='/choose-voice'
          render={() => {
            return (
              <ChooseVoiceForm />
              )
            }}
        />
        <Route
          path={'/phrase-page/:name/:key'}
          render={(routeProps) => {
            const { params } = routeProps.match
            const { name, key } = params
            console.log(params);
            return (
              <PhrasePage name={name} id={key}/>
            )
          }}
        />
        <Route
          path={'/subCategories-page/:name'} 

          render={(routeProps) => {
            const { params } = routeProps.match
            const { name } = params
            return (
              <SubCategoriesPage name={name} /> 
              )
            }}
        />
      </Switch>
      <Route
        exact path='/'
        render={() => {
          return (
            <MainPage />
          )
        }}
      />
    </div>
  );
}


export default withRouter(App);
