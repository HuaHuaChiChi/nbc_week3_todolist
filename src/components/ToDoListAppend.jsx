import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function ToDoListAppend(props) {
  return (
    <div className="wrap">
      <header>
        <p>Todo List</p>
        <p>React</p>
      </header>
      <div className="inputHeader">
      <p className="inputTitle">제목</p><input
        className="input"
        placeholder="제목 입력"
        type="text"
        value={props.TodoTitle}
        onChange={(e) => {
        props.SetToDoTitle(e.target.value);
      }}
    ></input>
    <p className="inputTitle">내용</p><input
    className="input"
      placeholder="내용 입력"
      type="text"
      value={props.ToDoContent}
      onChange={(e) => {
        props.SetTodoContent(e.target.value);
      }}
    ></input>
    <button className="inputButton" onClick={props.SubmitChange}>추가해</button>
    </div>
    

    <h2 className="done"> 해야해</h2>
    <div className="cardList">    
      {props.ToDoListCard
      .filter((todo) => {
        return !todo.done;
      })
      .map((todo) => props.TempToDoCards(todo))}
      </div>


    <h2 className="isDone">완료함</h2>
    <div className="cardList">    
      {props.ToDoListCard
      .filter((todo) => {
        return todo.done;
      })
      .map((todo) => props.TempToDoCards(todo))}
      </div>

      <footer className="footer"><FontAwesomeIcon icon={faSquareGithub} /></footer>
  </div>
  )
}
