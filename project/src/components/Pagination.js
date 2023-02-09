import styled from 'styled-components';
// 100    10     1      1
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  // const numPages = 10
  return (
    <>
      <Nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          // _는 index 즉 해당 값 위치를 알아내기 위해서 그냥 쓴거임
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;


export default Pagination;
