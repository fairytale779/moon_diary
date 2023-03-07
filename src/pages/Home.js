import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
// ./ 한번 뒤로 가기
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "./../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  // 월 별로 다이어리 리스트 다르게 보이게 하기 위해 가공 작업
  const [data, setData] = useState([]);

  //헤더 날짜 저장하는 state
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      // 그냥 진행되면 매우 오래 걸리는 작업이므로 list가 없을 땐 실행 x
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      // 매달의 첫번째 날을 ms로 구해 줌

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
      // 매달의 마지막 날을 구해줌

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);
  // diaryList가 변경되었을 땐(글 추가,수정, 삭제 등)실행이 되지가 않기 때문에 꼭 diaryList를 넣어주어야 함

  useEffect(() => {
    console.log(data);
  }, [data]);
  // test -> data state 가 바뀔때마다 데이터 출력

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headtext={headText}
        leftchild={
          <MyButton
            text={"<"}
            onClick={() => {
              decreaseMonth();
            }}
          />
        }
        rightchild={
          <MyButton
            text={">"}
            onClick={() => {
              increaseMonth();
            }}
          />
        }
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
