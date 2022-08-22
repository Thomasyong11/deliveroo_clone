import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //payload is whatever i want to keep track of eg Id,name,price,image etc
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product(id:${action.payload.id} as it's not in basket)`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
// fxn to get all basket items for cart
export const selectBasketItems = (state) => state.basket.items;
// filter fxn to get only selected items else everything we map through will get added to basket
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
//get basket Total
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export default basketSlice.reducer;
