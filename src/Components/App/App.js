import React from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import ChooseVoiceForm from '../ChooseVoiceForm/ChooseVoiceForm'
import AddSubcategoryForm from '../AddSubcategoryForm/AddSubcategoryForm'
import AddPhraseForm from '../AddPhraseForm/AddPhrase'
import AddSocialSettingForm from '../AddSocialSettingForm/AddSocialSetting'
import MainPage from '../MainPage/MainPage'
import PhrasePage from '../PhrasesPage/PhrasePage'
import SubCategoriesPage from '../SubCategoriesPage/SubCategoriesPage'
import useApp from './useApp'


function App() {
  useApp()

  return (
    <div className="App">
      <h1 className='header'>Gift of Gab</h1>
      <Navigation />
      <Switch>
        <Route
          path="/AddSocialSetting/"
          render={() => {
            // const { params } = routeProps.match
            // const { name } = params
            return (
            <AddSocialSettingForm />
              )
          }}
       />
        <Route
          path="/AddSubcategoryForm/:name"
          render={(routeProps) => {
            const { params } = routeProps.match
            const { name } = params
            return (
            <AddSubcategoryForm id={ name }/>
              )
          }}
       />
        <Route
          exact path='/choose-voice'
          render={() => {
            return (
              <ChooseVoiceForm />
              )
            }}
        />
        <Route
          path={'/addPhrase/:key/:name'}
          render={(routeProps) => {
            const { params } = routeProps.match
            const { name, key } = params
            return (
              <AddPhraseForm name={name} id={key}/>
            )
          }}
        />
        <Route
          path={'/phrase-page/:name/:key'}
          render={(routeProps) => {
            const { params } = routeProps.match
            const { name, key } = params
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
