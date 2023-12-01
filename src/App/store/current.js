import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';
import { RESSOURCES_NAME, REST_ADDR } from '../../config';

const initialState = emptyMeme

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    clear:(state, action) => {
        delete state.id;
        Object.assign(state, emptyMeme);
    },
    update:(state, action) => {
        Object.assign(state, action.payload);
    }
  },
  extraReducers:(builder) => {
    builder.addCase('current/saveImage/fulfilled', (s,a) => {
      Object.assign(s, a.payload);
    })
  }
});

export const {clear, update} = current.actions

const currentReducer = current.reducer;
export default currentReducer;

export const saveImage = createAsyncThunk(
  "current/saveImage",
  async(meme) => {
    const promise = await fetch(`${REST_ADDR}${RESSOURCES_NAME.memes}${meme.id!==undefined ? "/"+meme.id:""}`, {
      method:meme.id !== undefined ? "PUT":"POST",
      headers:{
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify(meme)
    })
    return await promise.json()
  }
)
