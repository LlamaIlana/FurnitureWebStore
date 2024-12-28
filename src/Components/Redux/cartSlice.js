import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("myLocalStore")) || [];
let counter = 0; // Counter for unique id

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const id = `id-${Date.now()}-${counter++}`; // Increment counter for a unique id

      state.push({
        ...action.payload,
        id, // Assign the unique id to each product
      });
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id); // Filter by id to remove the correct item
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
