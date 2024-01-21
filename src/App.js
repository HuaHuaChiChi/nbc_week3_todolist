import "./App.css";
import { useState } from "react";

function App() {
  const [toDoListCard, setToDoListCard] = useState([
    { id: 0, toDoTitle: "임의", toDoContent: "false 입니다", done: false },
    { id: 1, toDoTitle: "임의", toDoContent: "true 입니다", done: true },
  ]);
  const [toDoContent, setTodoContent] = useState("");
  const [toDoTitle, setToDoTitle] = useState("");

  const submitChange = () => {
    const newToDoList = {
      id: toDoListCard.length + 1,
      toDoTitle: toDoTitle,
      toDoContent: toDoContent,
      done: false,
    };
    setToDoListCard([...toDoListCard, newToDoList]);
  };

  const deleteCard = (id) => {
    const deleteToDoList = toDoListCard.filter((todo) => todo.id !== id);
    setToDoListCard(deleteToDoList);
  };

  //NOTE - isDone 함수 이거 그냥 네이버에서 찾아서 한거임.. true false 바꾸는 부분..
  const isDone = (id) => {
    const isDoneToDoList = toDoListCard.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setToDoListCard(isDoneToDoList);
  };

  const tempToDoCards = (todo) => {
    return (
      <div key={todo.id}>
        {todo.toDoTitle} - {todo.toDoContent}
        <button onClick={() => deleteCard(todo.id)}>삭제</button>
        <button onClick={() => isDone(todo.id)}>
          {todo.done ? "취소" : "완료"}
        </button>
      </div>
    );
  };

  return (
    <div>
      <input
        placeholder="제목"
        type="text"
        value={toDoTitle}
        onChange={(e) => {
          setToDoTitle(e.target.value);
        }}
      ></input>
      <input
        placeholder="내용"
        type="text"
        value={toDoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      ></input>
      <button onClick={submitChange}>추가해</button>

      <h2>해야해</h2>
      {toDoListCard
        .filter((todo) => {
          return !todo.done;
        })
        .map((todo) => tempToDoCards(todo))}

      <h2>완료함</h2>
      {toDoListCard
        .filter((todo) => {
          return todo.done;
        })
        .map((todo) => tempToDoCards(todo))}

      {/* {toDoListCard.map((todo) => {
        if (todo.done === true) {
          return (
            <div key={todo.id}>
              {todo.toDoTitle} - {todo.toDoContent}
              <button onClick={() => deleteCard(todo.id)}>삭제</button>
              <button onClick={() => isDone(todo.id)}>
                {todo.done ? "취소" : "완료"}
              </button>
            </div>
          );
        }
      })} */}
    </div>
  );
}

export default App;

//NOTE - 진행, 완료를 나누는 방법.
// 완료가 됐는지 안됐는지 불리언 값을 넣어놓고 if문으로 true는 진행중, false는 완료

//FIXME - 컴포넌트 나누기,,,, 이거 이상하게 <br /> 이게 아니라 컴포넌트로 해야할 것 같은데,,
