import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import cartReducer from "./cartSlice.js";

// Create the store
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,  },
});

// Subscribe to the store changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("myLocalStore", JSON.stringify(state.cart));
});

export default store;
