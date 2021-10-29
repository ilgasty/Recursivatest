import React from 'react'
import { MainRouter } from './components/MainRouter'
import { Provider } from 'react-redux'
//import { authContext } from '../../auth/authContext'
//import { authReducer } from '../../auth/authReducer'
import { store } from '../src/store/store'
export const MainApp = () => {
  return (
    
      <Provider store={store}>
      <MainRouter/>
      </Provider>
      
    
  )
}
