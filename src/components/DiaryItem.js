import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  //이미지가 안 뜰 경우
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  //   const prev =
  //     content.length >= 25 ? `{content.slice(0, 25)} ...` : { content };

  const goDetail = () => {
    navigate("/diary/${id}");
  };

  const goEdit = () => {
    navigate("/edit/${id}");
  };

  return (
    <div className="DiaryItem">
      <div
        className={["emotion_img", `emotion_img_${emotion}`].join(" ")}
        onClick={goDetail}
      >
        <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrap" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_prev">
          {content.length <= 30 ? content : `${content.slice(0, 30)}...`}
        </div>
      </div>
      <div className="btn_wrap">
        <MyButton text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
