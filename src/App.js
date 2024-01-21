import "./App.css";
import ToDoListContainer from "./components/ToDoListContainer";

export function App() {
  return <ToDoListContainer />;
}

export default App;

//NOTE - 진행, 완료를 나누는 방법.
// 완료가 됐는지 안됐는지 불리언 값을 넣어놓고 if문으로 true는 진행중, false는 완료
