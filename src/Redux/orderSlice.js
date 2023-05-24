import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  
  name: 'order',
  
  initialState: {
    border: {},
    device: {},
    background: {}
  },
  
  reducers: {
    setBorder(state, action) {
      const border = {...action.payload}
      delete border['active'];
      state.border = border;
    },

    removeBorder(state, action) {
      state.border = {}
    },

    setDevice(state, action) {
      const device = {...action.payload}
      delete device['active'];
      state.device = device;
    },

    removeDevice(state, action) {
      state.device = {}
    },

    setBackground(state, action) {
      const background = {...action.payload}

      if ( state.background.id === background.id) {
        state.background = {}
      } else {
        delete background['active'];
        state.background = background;
      }
    },

    removeBackground(state, action) {
      state.background = {}
    },
  }
});

export const {setBorder, setDevice, setBackground, 
  removeBorder, removeDevice, removeBackground } = orderSlice.actions;

export default orderSlice.reducer;
