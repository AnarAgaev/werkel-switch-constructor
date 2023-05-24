import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',

  initialState: {
    borders: [],
    devices: [],
    backgrounds: []
  },

  reducers: {
    initData(state, action) {
      state.borders = [...action.payload.borders]
      state.devices = [...action.payload.devices]
      state.backgrounds = [...action.payload.backgrounds]
    },

    activeBorder(state, action) {
        for (const border of state.borders) {
          border.active = border.id === action.payload.id;
        }
    },

    inactiveBorder(state, action) {
      for (const border of state.borders) {
        if (border.id === action.payload.id) {
          border.active = false;
        }
      }
    },

    activeDevice(state, action) {
      for (const device of state.devices) {
        device.active = device.id === action.payload.id;
      }
    },

    inactiveDevice(state, action) {
      for (const device of state.devices) {
        if (device.id === action.payload.id) {
          device.active = false;
        }
      }
    },

    activeBackground(state, action) {
      for (const background of state.backgrounds) {
        background.active = background.id === action.payload.id;
      }
    },

    inactiveBackground(state, action) {
      for (const background of state.backgrounds) {
        if (background.id === action.payload.id) {
          background.active = false;
        }
      }
    },
  }
});

export const {initData, activeBorder, inactiveBorder, inactiveDevice, 
  inactiveBackground, activeBackground, activeDevice } = dataSlice.actions;

export default dataSlice.reducer;