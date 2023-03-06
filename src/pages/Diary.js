import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>일기 목록</h1>
      <p>여기는 일기 목록입니당</p>
    </div>
  );
};

export default Diary;
