import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Production } from "../components";
import { cartsActions } from "../middleware/cartsActions";
import { productionAction } from "../middleware/productionAction";

const ProductionContainer = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productionAction.mainProductionData());
  }, [dispatch]);

  const { userProduction } = useSelector(({ production }) => ({
    userProduction: production.userProduction,
  }));
  const { userSignInInfor } = useSelector(({ signs }) => ({
    userSignInInfor: signs.userSignInInfor,
  }));

  const onShoppingCart = useCallback(
    ({ value, userSignInInfor }) => {
      dispatch(cartsActions.cartsDataUpdate(value, userSignInInfor, nav));
    },
    [dispatch, nav]
  );

  return (
    <div>
      <Production
        userProduction={userProduction}
        onShoppingCart={onShoppingCart}
        userSignInInfor={userSignInInfor}
      />
    </div>
  );
};

export default ProductionContainer;
