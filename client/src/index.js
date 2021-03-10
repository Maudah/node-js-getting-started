import React from 'react'
import ReactDOM from 'react-dom'
import {provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './components/App'

const store=createStore(()=>[],{},applyMiddleware())

ReactDOM.render(
     <provider store={store}><App/></provider>
     , document.querySelector('#root'))