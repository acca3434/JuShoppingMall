import axios from "axios";
import { productionData } from "../modules/production";

function mainProductionData() {
  return async (dispatch, getState) => {
    const production = await axios({
      method: "get",
      url: "http://localhost:8000/productionData",
    });
    dispatch(productionData(production.data));
  };
}
export const productionAction = { mainProductionData };
