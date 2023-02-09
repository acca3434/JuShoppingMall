import React, { useCallback, useState } from "react";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
const CartModal = ({ userCartsList, userCartsLength, userCartsAllLength }) => {
  const [cartModalState, setCartModalState] = useState(false);

  const cartModalToggle = useCallback(() => {
    setCartModalState(!cartModalState);
  }, [cartModalState]);

  return (
    <>
      <button
        className="btn btn-primary position-relative"
        onClick={() => cartModalToggle()}
      >
        장바구니
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          {userCartsAllLength}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <MDBModal
        isOpen={cartModalState}
        toggle={() => cartModalToggle()}
        size="fullscreen"
        overflowScroll={false}
      >
        <MDBModalHeader toggle={() => cartModalToggle()}>
          Your cart
        </MDBModalHeader>

        <MDBModalBody>
          <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="10">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBTypography
                      tag="h3"
                      className="fw-normal mb-0 text-black"
                    >
                      Shopping Cart
                    </MDBTypography>
                    <div>
                      <p className="mb-0">
                        <span className="text-muted">Sort by:</span>
                        <a href="#!" className="text-body">
                          price <i className="fas fa-angle-down mt-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {userCartsList
                    ? userCartsList.map((value) => {
                        return (
                          <MDBCard className="rounded-3 mb-4" key={value.id}>
                            <MDBCardBody className="p-4">
                              <MDBRow className="justify-content-between align-items-center">
                                <MDBCol md="2" lg="2" xl="2">
                                  <MDBCardImage
                                    className="rounded-3"
                                    fluid
                                    src={require(`./img/${value.cart_image}.png`)}
                                    alt="Cotton T-shirt"
                                  />
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                  <p
                                    className="lead fw-normal mb-2"
                                    style={{ color: "black" }}
                                  >
                                    {value.cart_name}
                                  </p>
                                  <p>
                                    <span className="text-muted">사이즈: </span>
                                    M<span className="text-muted">Color: </span>
                                    Grey
                                  </p>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="3"
                                  xl="2"
                                  className="d-flex align-items-center justify-content-around"
                                >
                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="minus" />
                                  </MDBBtn>

                                  <MDBInput
                                    min={0}
                                    defaultValue={value.cart_quantity}
                                    type="number"
                                    size="sm"
                                  />
                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="plus" />
                                  </MDBBtn>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="2"
                                  xl="2"
                                  className="offset-lg-1"
                                >
                                  <MDBTypography
                                    tag="h5"
                                    className="mb-0"
                                    style={{ color: "black" }}
                                  >
                                    {value.cart_price}원
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  <a href="#!" className="text-danger">
                                    <MDBIcon
                                      fas
                                      icon="trash text-danger"
                                      size="lg"
                                    />
                                  </a>
                                </MDBCol>
                              </MDBRow>
                            </MDBCardBody>
                          </MDBCard>
                        );
                      })
                    : ""}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBModalBody>
        <MDBModalFooter className="justify-content-end">
          <MDBBtn color="primary" onClick={() => cartModalToggle()}>
            닫기
          </MDBBtn>
          <MDBBtn color="primary" onClick={() => cartModalToggle()}>
            주문하기
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </>
  );
};

export default React.memo(CartModal);
