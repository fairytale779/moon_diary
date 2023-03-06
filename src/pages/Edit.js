import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(`id:`, id);

  const mode = searchParams.get("mode");
  console.log(`mode:`, mode);

  return (
    <div>
      <h1>수정</h1>
      <p>여기는 수정입니당</p>
      <button onClick={() => setSearchParams({ who: "fairytale" })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
