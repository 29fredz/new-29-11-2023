import {configureStore, combineReducers} from '@reduxjs/toolkit'
import ressourceReducer, { loadImage } from './ressources'
import currentReducer from './current'

export const store = configureStore({
    reducer: combineReducers ({ressources:ressourceReducer, current: currentReducer}),
    devTools: true
})

//store.subscribe(() => console.trace(store.getState()))
console.log('chargement du store');
console.log(store.getState());

store.dispatch(loadImage())
