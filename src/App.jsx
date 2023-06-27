import "./App.css";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">
        <div className="container">
          <span className="navbar-brand">Quiz - Feira de Ciências</span>
        </div>
      </nav>

      <div className="container">
        <Quiz></Quiz>
      </div>
    </>
  );
}

export default App;
