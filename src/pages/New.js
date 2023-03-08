import { useNavigate } from "react-router-dom";

import DiaryEditor from "../components/DiaryEditor";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

const New = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyHeader
        headtext={"새로운 일기 쓰기"}
        leftchild={
          <MyButton text={"< 뒤로 가기"} onClick={() => navigate(-1)} />
        }
      />
      <DiaryEditor />
    </div>
  );
};

export default New;
