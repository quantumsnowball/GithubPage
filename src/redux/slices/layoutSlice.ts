import { createSlice } from '@reduxjs/toolkit'


const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    menu: false
  },
  reducers: {
    toggleMenu: s => {
      s.menu = !s.menu
    },
    closeMenu: s => {
      s.menu = false
    }
  }
})

export const layoutActions = layoutSlice.actions

export const layoutReducer = layoutSlice.reducer


