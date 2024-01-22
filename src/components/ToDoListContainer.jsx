import ToDoListAppend from "./ToDoListAppend";
import { useState } from "react";

export default function ToDoListContainer() {
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
        <div className="cards" key={todo.id}>
        <p className="cardsTitle">{todo.toDoTitle}</p>
        <p>{todo.toDoContent}</p>
        <div className="cardButton">
          <button onClick={() => deleteCard(todo.id)}>삭제</button>
          <button onClick={() => isDone(todo.id)}>
            {todo.done ? "취소" : "완료"}
          </button>
        </div>  
        
        </div>

    );
  };

  return (
    <ToDoListAppend
    TempToDoCards= {tempToDoCards}
    SubmitChange= {submitChange}
    DeleteCard= {deleteCard}
    IsDone= {isDone}
    ToDoListCard= {toDoListCard}
    ToDoContent= {toDoContent}
    ToDoTitle= {toDoTitle}
    SetTodoContent= {setTodoContent}
    SetToDoTitle= {setToDoTitle}
    />
  )
}
