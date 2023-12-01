import {configureStore} from '@reduxjs/toolkit'
import ressourceReducer, { fillImages } from './ressources'

export const store = configureStore({
    reducer:ressourceReducer,
    devTools: true
})

store.subscribe(() => console.trace(store.getState()))
console.log('chargement du store');
console.log(store.getState());
