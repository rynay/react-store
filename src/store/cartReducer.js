const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT';
const DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT';

export const cartReducer = ( store = [],  action ) => {
  switch(action.type){
    case ADD_TO_CART:
      return ([
        ...store,
        action.payload,
      ]);

    case REMOVE_FROM_CART:
      return ([
        ...store.filter(product => product.id !== action.payload.id),
      ]);

    case INCREMENT_PRODUCT_COUNT:
      const newStoreInc = [...store];
      const idxInc = newStoreInc.findIndex(prod => prod.id === action.payload.id);
      const targetProductInc = newStoreInc[idxInc];
      
      targetProductInc.count += 1;
      targetProductInc.total += targetProductInc.price;
      return (newStoreInc);

    case DECREMENT_PRODUCT_COUNT:
      const newStoreDec = [...store];
      const idxDec = newStoreDec.findIndex(prod => prod.id === action.payload.id);
      const targetProductDec = newStoreDec[idxDec];

      if(targetProductDec.count === 1) return [...store.filter(prod => prod.id !== action.payload.id)];
      
      targetProductDec.count -= 1;
      targetProductDec.total -= targetProductDec.price;
      return (newStoreDec);

    default: 
      return store;
  }
}
