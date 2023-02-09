/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Production.css";
const Production = ({ userProduction, onShoppingCart, userSignInInfor }) => {
  return (
    <>
      <MDBContainer fluid>
        <section className="text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">상품</h1>
              <p className="lead text-muted">상품을 자유롭게 선택해보세용</p>
              {/* <p>
              <Link href="#" className="btn btn-primary my-2">
                상품등록
              </Link>
              <Link href="#" className="btn btn-secondary my-2">
                상품해제
              </Link>
            </p> */}
            </div>
          </div>
        </section>
        {userProduction
          ? userProduction.map((value) => {
              return (
                <MDBRow className="justify-content-center mb-0" key={value.id}>
                  <MDBCol md="12" xl="10">
                    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image rounded hover-zoom hover-overlay"
                            >
                              <MDBCardImage
                                src={require(`./img/${value.product_image}.png`)}
                                fluid
                                className="w-100"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCol>
                          <MDBCol md="6">
                            <h5>{value.product_name}</h5>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>100% cotton</span>
                              <span className="text-primary"> • </span>
                              <span>Light weight</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Best finish
                                <br />
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                              <span className="text-primary"> • </span>
                              <span>For men</span>
                              <span className="text-primary"> • </span>
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              {value.product_content}
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="6"
                            lg="3"
                            className="border-sm-start-none border-start"
                          >
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">
                                {value.product_price}원
                              </h4>
                              <span className="text-danger">
                                {/* <s></s>  이거 풀고 여기 안에다가 가격 넣으면 할인가격임 */}
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <MDBBtn color="primary" size="sm">
                                자세히 보기
                              </MDBBtn>
                              <MDBBtn
                                outline
                                color="primary"
                                size="sm"
                                className="mt-2"
                                onClick={() =>
                                  onShoppingCart({
                                    value: value,
                                    userSignInInfor: userSignInInfor,
                                  })
                                }
                              >
                                장바구니 담기
                              </MDBBtn>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              );
            })
          : ""}
      </MDBContainer>
    </>
  );
};

export default Production;
