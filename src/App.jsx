import "./App.css";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand">Quiz</span>
        </div>
      </nav>

      <div className="container">
        <Quiz></Quiz>
      </div>
    </>
  );
}

export default App;
