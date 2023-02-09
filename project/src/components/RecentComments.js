import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function RecentComments({ userReply, userReplyLength }) {
  let [muteHeart, setMuteHeart] = useState("link-muted");
  let [dangerHeart, setDangerHeart] = useState("link-danger");

  return (
    <section>
      <MDBTypography tag="h4">댓글</MDBTypography>
      <p>댓글들 마음껏 쓰셔용 오홍홍</p>
      <MDBContainer className="py-5" style={{ maxWidth: "1200px" }}>
        <MDBRow className="justify-content-center">
          <MDBTextArea
            label="Message"
            id="textAreaExample"
            rows={4}
            style={{ backgroundColor: "#fff" }}
            wrapperClass="w-50"
            className="p-5"
          />
          <MDBCol md="12" lg="10" style={{ marginTop: "50px" }}>
            <MDBCard className="text-dark">
              {userReply
                ? userReply.map((value) => {
                    return (
                      <>
                        <MDBCardBody className="p-4">
                          <div className="d-flex flex-start">
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                              alt="avatar"
                              width="60"
                              height="60"
                            />
                            <div>
                              <MDBTypography tag="h6" className="fw-bold mb-1">
                                닉네임 : {value.reply_user_id}
                              </MDBTypography>
                              <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">{value.createdAt}</p>
                                <a href="#!" className="link-muted">
                                  <MDBIcon fas icon="pencil-alt ms-2" />
                                </a>
                                <a href="#!" className="link-muted">
                                  <MDBIcon fas icon="redo-alt ms-2" />
                                </a>
                                <a href="#!" className="link-muted">
                                  <MDBIcon fas icon="heart ms-2" />
                                </a>
                              </div>
                              <MDBTextArea
                                label={`${value.reply_content}`}
                                cols={150}
                                style={{ backgroundColor: "#fff" }}
                                className="p-5"
                              />
                            </div>
                          </div>
                        </MDBCardBody>
                        <hr className="my-0" />
                      </>
                    );
                  })
                : "댓글이 아직 없어요 ㅠ"}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
