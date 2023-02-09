import React, { useCallback, useEffect } from "react";
import WOW from "wowjs";
import "./isotope.css";
import "./style.css";
import $ from "jquery";
import Isotope from "isotope-layout";

const Product = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  useCallback(() => {
    $(".filters_menu li").on(function () {
      console.log("emfdjdhrlsgksi?");
      $(".filters_menu li").removeClass("active"); //클릭했을때 li의 모든 정보를 살펴본뒤 active 즉 처음 선택된것을 없앤다
      $(this).addClass("active");
      console.log("들어오냐고");
      let data = $(this).attr("data-filter");

      $filter_grid.isotope({
        filter: data,
      });
    });

    let filterGrid = document.querySelector(".filter_grid");
    console.log(filterGrid);
    let $filter_grid = new Isotope(filterGrid, {
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
        columnWidth: ".all",
      },
    });
  }, []);

  const onClick = (e) => {
    console.log(e.target.className);
  };
  return (
    <div>
      <div
        id="firstMenuSelect"
        className="wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          marginTop: "300px",
          marginBottom: "300px",
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <section className="head_list_section layout_padding-bottom">
          <div className="second_list_section">
            <div className="list_heading_con heading_center">
              <h2>우리 기능(기획)들을 소개합니당</h2>
            </div>
            <ul className="filters_menu">
              <li className="active" data-filter="*" onClick={onClick}>
                전체
              </li>
              <li data-filter=".caption" className="">
                주병현
              </li>
              <li data-filter=".mrKang" className="">
                안주영
              </li>
              <li data-filter=".mrHangeoul" className="">
                장지원
              </li>
            </ul>
            <div className="filters-content">
              <div
                className="row filter_grid"
                style={{ position: "relative", height: "3364px" }}
              >
                <div
                  className="col-sm-6 col-lg-4 all caption"
                  style={{ position: "absolute", left: "0px", top: "0px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f0.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>주병현</h5>
                        <p className="listp">페이지네이션 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            페이지를 누르면 웹 페이지 내에서 다른 이미지들을
                            보여주면서 넘어가는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop0"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop0"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel0"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f0.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all caption"
                  style={{ position: "absolute", left: "463px", top: "0px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f1.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>주병현</h5>
                        <p className="listp">가격 검색 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            가격의 최소와 최대를 설정하면 그 가격 내의 조건에
                            해당하는 상품을 보여주는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop1"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop1"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel1"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f1.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all caption"
                  style={{ position: "absolute", left: "926px", top: "0px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f2.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>주병현</h5>
                        <p className="listp">더 보기 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            더 보기 버튼을 누르면 상품들을 더 보여주는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop2"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop2"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel2"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f2.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all caption"
                  style={{ position: "absolute", left: "0px", top: "420px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f3.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>주병현</h5>
                        <p className="listp">장바구니 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            장바구니 및 견적서 인쇄 옵션 및 문의를 넣을 수 있는
                            버튼에 대한 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop3"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop3"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel3"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f3.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all caption"
                  style={{ position: "absolute", left: "463px", top: "420px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f4.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>주병현</h5>
                        <p className="listp">베스트 아이템 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            잘 나가는 상품들만 모아 슬라이드 형식으로 자동으로
                            넘어가는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop4"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop4"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel4"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f4.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "926px", top: "420px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f5.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">검색 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            검색창에 검색하면 검색어와 관련된 물품들이 나열된다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop5"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop5"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel5"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f5.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "0px", top: "841px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f6.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">페이지 추가 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            더 보기 버튼을 클릭하면 숨겨져 있던 창이 나오면서
                            상품들을 더 보여준다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop6"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop6"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel6"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f6.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "463px", top: "841px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f7.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">리모컨 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            스크롤 시 리모컨이 따라서 같이 움직인다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop7"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop7"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel7"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f7.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "926px", top: "841px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f8.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">애니메이션 스탑 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            이미지가 애니메이션될 때 이미지 위에 마우스가
                            올라오면 애니메이션이 멈춘다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop8"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop8"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel8"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f8.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "0px", top: "1261px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f9.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">메뉴 바 고정 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            스크롤을 내려도 메뉴 바가 사라지지않고 화면에
                            고정된다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop9"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop9"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel9"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f9.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "463px", top: "1261px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f10.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">
                          이미지 &amp; 글씨 슬라이스 &amp; 타이머 기능.
                        </p>
                        <div className="options">
                          <h6 className="listH6">
                            이미지가 슬라이드되면서 걸리는 시간을 나타내주고
                            이미지가 바뀌면 박스 안의 글씨도 바뀐다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop10"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop10"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel10"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f10.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "926px", top: "1261px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f11.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">TOP 버튼 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            페이지 위로 버튼 클릭시 화면이 상단으로 이동된다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop11"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop11"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel11"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f11.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "0px", top: "1682px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f12.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">챗봇 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            챗봇 아이콘을 클릭하면 대화창이 생성되고 간단한
                            대화가 가능하다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop12"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop12"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel12"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f12.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrKang"
                  style={{ position: "absolute", left: "926px", top: "1682px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f13.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>안주영</h5>
                        <p className="listp">최근 검색어 기능.</p>
                        <div className="options">
                          <h6 className="listH6">
                            검색하고 나서 최대 5개의 최근 검색어가 나타난다.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop13"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop13"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel13"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="images/f13.png"
                                    alt=""
                                    style={{ maxHeight: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "463px", top: "1730px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f14.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">최근 검색어.</p>
                        <div className="options">
                          <h6 className="listH6">
                            검색창 클릭 시 그 아래로 내가 검색하였던 검색어들을
                            나열해주는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop14"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop14"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel14"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f14.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "0px", top: "2102px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f15.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">방문자 수 애니메이션.</p>
                        <div className="options">
                          <h6 className="listH6">
                            페이지 로드 시마다 재생되는 방문자 수 애니메이션.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop15"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop15"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel15"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f15.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "926px", top: "2102px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f16.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">상품 영역 추가.</p>
                        <div className="options">
                          <h6 className="listH6">
                            스크롤 시 보이는 상품들의 영역을 늘림과 동시에 상품
                            목록을 추가적으로 보여주는 기능.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop16"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop16"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel16"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f16.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "463px", top: "2150px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f17.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">실시간 검색어 순위.</p>
                        <div className="options">
                          <h6 className="listH6">
                            실시간 검색어 순위에 대한 애니메이션.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop17"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop17"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel17"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f17.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "0px", top: "2523px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f18.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">
                          유저와의 작은 커뮤니케이션 요소.
                        </p>
                        <div className="options">
                          <h6 className="listH6">
                            작고 귀여운 아이콘을 내장하여 여기 저기로 이동시킬
                            수 있는 애니메이션 요소.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop18"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop18"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel18"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f18.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "926px", top: "2523px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f19.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">출석 체크 페이지.</p>
                        <div className="options">
                          <h6 className="listH6">
                            계속적인 고객 유치를 위한 일환 중 하나로 출석할 수
                            있는 이벤트 페이지.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop19"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop19"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel19"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f19.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "463px", top: "2547px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f20.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">화면 고정.</p>
                        <div className="options">
                          <h6 className="listH6">
                            페이지 이동 후 다시 돌아가도 초기화되지 않는 화면의
                            위치.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop20"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop20"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel20"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f20.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-4 all mrHangeoul"
                  style={{ position: "absolute", left: "0px", top: "2943px" }}
                >
                  <div className="box">
                    <div className="second_box">
                      <div className="img-box">
                        <img src="images/f21.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5 style={{ color: "white" }}>장지원</h5>
                        <p className="listp">남은 시간 애니메이션.</p>
                        <div className="options">
                          <h6 className="listH6">
                            할인 종료 시까지 남은 시간에 대한 애니메이션.
                          </h6>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#backDrop21"
                          >
                            크게보기
                          </button>
                          <div
                            className="modal fade"
                            id="backDrop21"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="backDropLabel21"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-fullscreen">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="image/f21.png"
                                    alt=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    닫기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
