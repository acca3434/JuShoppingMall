import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../components/CartModal";
import { cartsActions } from "../middleware/cartsActions";

const CartModalContainer = ({ userSignInInfor }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartsActions.mainCartsData(userSignInInfor));
  }, [dispatch, userSignInInfor]);

  const { userCartsList, userCartsLength, userCartsAllLength } = useSelector(
    ({ carts }) => ({
      userCartsList: carts.userCartsList,
      userCartsLength: carts.userCartsLength,
      userCartsAllLength: carts.userCartsAllLength,
    })
  );

  return (
    <div>
      <CartModal
        userCartsList={userCartsList}
        userCartsLength={userCartsLength}
        userCartsAllLength={userCartsAllLength}
      />
    </div>
  );
};

export default CartModalContainer;
