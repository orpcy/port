import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  title: "",
  description: "",
};

const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      let { name, value } = action.payload;
      const getName: keyof typeof initialState = name;
      state[getName] = value;
    },
    resetInputs: (state) => {
      state.name = "";
      state.email = "";
      state.title = "";
      state.description = "";
    },
  },
});

export const { handleChange, resetInputs } = inputsSlice.actions;

export default inputsSlice;
