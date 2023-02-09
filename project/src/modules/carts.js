import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CART_DATALOAD = "carts/CART_DATALOAD";

export const cartsData = createAction(
  CART_DATALOAD,
  (cartList, totalValue) => ({
    cartList,
    totalValue,
  })
);

const initialState = {
  userCartsList: null,
  userCartsLength: null,
  userCartsAllLength: null,
};

const carts = handleActions(
  {
    [CART_DATALOAD]: (state, { payload: cartData }) =>
      produce(state, (draft) => {
        draft.userCartsList = cartData.cartList;
        draft.userCartsLength = cartData.cartList.length;
        draft.userCartsAllLength = cartData.totalValue;
      }),
  },
  initialState
);

export default carts;
