import { useEffect, useState } from "react";

/*
    프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 이렇게
    src디렉터리에 lib 디렉터리를 만든 후 그 안에 작성합니다.

    방금 만든 usePromise Hook은 Promise의 대기 중, 완료 결과, 실패결과에
    대한 상태를 관리하며, usePromise의 의존 배열 deps를 파라미터로 받아 옵니다.
    파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한
    useEffect의 의존 배열로 설정되는데요.
    이 배열을 설정하는 부분에서 ESLint경고가 나타나게 됩니다

    이 경고를 무시하려면 특정 줄에서만 ESLint 규칙을 무시하도록
    주석을 작성해 주어야합니다.
    에디터에 초록색 경고 줄이 그어졌을 때
    그 위에 커서를 올리면 빠른수정...이라는 문구가 나타나는데
    이를 클릭하면 자동으로 ESLint 규칙을 비활성화시키는 주석을
    입력할 수 있습니다.
*/

export default function usePromise(promiseCreator, deps) {
  // 대기 중 완료/실패에 대한 상태관리

  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
