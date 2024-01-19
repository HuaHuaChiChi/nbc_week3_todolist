import "./App.css";
import { useState } from "react";

function App() {
  const [toDoListCard, setToDoListCard] = useState([
    { id: 1, toDoTitle: "임의", toDoContent: "야호" },
  ]);
  const [toDoContent, setTodoContent] = useState("");
  const [toDoTitle, setToDoTitle] = useState("");

  const submitChange = () => {
    const newToDoList = {
      id: toDoListCard.length + 1,
      toDoTitle: toDoTitle,
      toDoContent: toDoContent,
    };
    setToDoListCard([...toDoListCard, newToDoList]);
  };

  const deleteCard = (id) => {
    const deleteToDoList = toDoListCard.filter((todo) => todo.id !== id);
    setToDoListCard(deleteToDoList);
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

      {toDoListCard.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.toDoTitle} - {todo.toDoContent}
            <button onClick={() => deleteCard(todo.id)}>삭제</button>
            <button>완료</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
