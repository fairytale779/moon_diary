import React, { useReducer, useRef } from "react";
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      // const newItem = {
      //   ...action.data,
      // };
      // newState = [newItem, ...state];
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
  return newState;
};

// 데이터 스테이트를 컴포넌트 트리 전역에 공급
export const DiaryStateContext = React.createContext();

//dispatch 함수들도 context로 공급
export const DiaryDispatchContext = React.createContext();

//더미데이터로 일기 자료 임시 저장
const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1",
    date: 1678172343286,
    // date의 값은 밀리세컨 값으로 넣어야 해서 newDate().getTime() 을 콘솔에ㅈ 찍어서 확인한다.
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2",
    date: 1678172343287,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3",
    date: 1678172343288,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4",
    date: 1678172343289,
  },
  {
    id: 5,
    emotion: 5,
    content:
      "오늘의 일기5라고 적었지만 사실 나는 엄청나게 긴 일기내용을 가지고 있지 왜냐하면 실험을 위해서야 ",
    date: 1678172343290,
  },
];

function App() {
  // const [data, dispatch] = useReducer(reducer, []);
  // 더미데이터를 기초값으로 넣기
  const [data, dispatch] = useReducer(reducer, dummyData);

  // console.log(new Date().getTime());

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current++;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    // 전역에 주기 위해서 provider 로 감싸준다.
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
