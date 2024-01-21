export default function ToDoListAppend(props) {
  return (
    <div className="wrap">
    <input
      placeholder="제목"
      type="text"
      value={props.TodoTitle}
      onChange={(e) => {
        props.SetToDoTitle(e.target.value);
      }}
    ></input>
    <input
      placeholder="내용"
      type="text"
      value={props.ToDoContent}
      onChange={(e) => {
        props.SetTodoContent(e.target.value);
      }}
    ></input>
    <button onClick={props.SubmitChange}>추가해</button>

    <h2>해야해</h2>
    {props.ToDoListCard
      .filter((todo) => {
        return !todo.done;
      })
      .map((todo) => props.TempToDoCards(todo))}

    <h2>완료함</h2>
    {props.ToDoListCard
      .filter((todo) => {
        return todo.done;
      })
      .map((todo) => props.TempToDoCards(todo))}
  </div>
  )
}
