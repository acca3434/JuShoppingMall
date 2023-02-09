import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import "./detail.css";
import $ from "jquery";
const Posts = ({ userPosts, userPostsLength }) => {
  $(document).ready(function () {
    $("#search").keyup(function () {
      search_table($(this).val());
    });
    function search_table(value) {
      $("#employee_table tr").each(function () {
        let found = "false";
        $(this).each(function () {
          if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            found = "true";
          }
        });
        if (found === "true") {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <>
      <div className="table-responsive p-5">
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="전체게시물을 검색하려면 페이지 당 표시할 게시물 수를 전체 게시물로 선택하여 검색하세요"
        />
        <h1 className="fw-light">자유게시판</h1>
        <p className="lead text-muted">언제든 문의하세영</p>
        <div className="board">
          <label
            className="float-start
          "
          >
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value={userPostsLength}>전체게시물</option>
            </select>
          </label>
          <button className="btn btn-primary float-end m-3">글쓰기</button>
        </div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">글 개수</th>
              <th scope="col">올린 유저</th>
              <th scope="col">상품 이름</th>
              <th scope="col">올린 날짜</th>
              <th scope="col">수정 날짜</th>
            </tr>
          </thead>
          <tbody id="employee_table">
            {userPosts
              ? userPosts
                  .slice(offset, offset + limit)
                  .map(
                    ({
                      id,
                      post_id,
                      post_title,
                      post_content,
                      createdAt,
                      updatedAt,
                    }) => {
                      return (
                        <tr key={id}>
                          <th scope="row">{id}</th>
                          <td>{post_id}</td>
                          <td>
                            <Link
                              to={`/detail/${id}/${post_id}/${post_title}/${post_content}`}
                            >
                              {post_title}
                            </Link>
                          </td>
                          <td>{createdAt}</td>
                          <td>{updatedAt}</td>
                        </tr>
                      );
                    }
                  )
              : "게시판 잘못 연결됐습니다 고객센터에 문의하세요"}
          </tbody>
        </table>
      </div>
      {userPosts ? (
        <footer>
          <Pagination
            total={userPosts.length} // 100
            limit={limit} // 10
            page={page} // 1
            setPage={setPage}
          />
        </footer>
      ) : (
        ""
      )}
    </>
  );
};

export default Posts;
