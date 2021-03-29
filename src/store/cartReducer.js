const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';
const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT';
const DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT';

export const cartReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      newItem.count = 1;
      newItem.total = newItem.price;
      return [...store, newItem];

    case REMOVE_FROM_CART:
      return [...store.filter((product) => product.id !== action.payload)];

    case REMOVE_ALL_FROM_CART:
      return [];

    case INCREMENT_PRODUCT_COUNT:
      const newStoreInc = [...store];
      const idxInc = newStoreInc.findIndex(
        (prod) => prod.id === action.payload
      );
      const targetProductInc = { ...newStoreInc[idxInc] };

      targetProductInc.count += 1;
      targetProductInc.total += targetProductInc.price;
      newStoreInc[idxInc] = targetProductInc;
      return newStoreInc;

    case DECREMENT_PRODUCT_COUNT:
      const newStoreDec = [...store];
      const idxDec = newStoreDec.findIndex(
        (prod) => prod.id === action.payload
      );
      const targetProductDec = { ...newStoreDec[idxDec] };

      if (targetProductDec.count === 1)
        return [...store.filter((prod) => prod.id !== action.payload)];

      targetProductDec.count -= 1;
      targetProductDec.total -= targetProductDec.price;
      newStoreDec[idxDec] = targetProductDec;
      return newStoreDec;

    default:
      return store;
  }
};

export const addItemAction = (payload) => ({ type: ADD_TO_CART, payload });
export const removeItemAction = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const incrementItemAction = (id) => ({
  type: INCREMENT_PRODUCT_COUNT,
  payload: id,
});
export const decrementItemAction = (id) => ({
  type: DECREMENT_PRODUCT_COUNT,
  payload: id,
});

export const removeAllAction = () => ({ type: REMOVE_ALL_FROM_CART });
