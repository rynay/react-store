import { products } from './products';

export const productReducer = (store = products, action) => {
  switch (action.type) {
    default:
      return store;
  }
};
