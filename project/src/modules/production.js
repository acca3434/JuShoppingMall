import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const PRODUCTION_DATALOAD = "production/PRODUCTION_DATALOAD";

export const productionData = createAction(
  PRODUCTION_DATALOAD,
  (production) => ({
    production,
  })
);

const initialState = {
  userProduction: null,
  // productionId: null,
  // productionUserId: null,
  // productionName: null,
  // productionPrice: null,
  // productionImage: null,
};

const production = handleActions(
  {
    [PRODUCTION_DATALOAD]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.userProduction = payload.production;
      }),
  },
  initialState
);

export default production;
