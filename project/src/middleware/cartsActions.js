import axios from "axios";
import { cartsData } from "../modules/carts";

function mainCartsData(userSignInInfor) {
  return async (dispatch, getState) => {
    const carts = await axios({
      method: "post",
      url: "http://localhost:8000/cartsData",
      data: {
        userSignInInfor,
      },
    });
    if (carts.data) {
      let a = carts.data.map((value) => {
        return value.cart_quantity;
      });
      let totalValue = a.reduce((a, b) => a + b, 0);
      dispatch(cartsData(carts.data, totalValue));
    } else {
      console.log("실패....");
    }
  };
}
function cartsDataUpdate(value, userSignInInfor, nav) {
  return async (dispatch, getState) => {
    const carts = await axios({
      method: "post",
      url: "http://localhost:8000/userCartsDataUpdate",
      data: {
        value,
        userSignInInfor,
      },
    }).then(() => {
      nav("/");
    });
  };
}
export const cartsActions = { mainCartsData, cartsDataUpdate };
