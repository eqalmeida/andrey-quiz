import React, { useState } from "react";

const questions = [
  {
    title: "Qual das seguintes opções é uma fonte de energia renovável?",
    answers: ["Carvão", "Petróleo", "Gás natural", "Energia solar"],
    rightIdx: 3,
  },
  {
    title: "Qual é a forma comum de aproveitamento da energia eólica?",
    answers: [
      "Painéis solares",
      "Turbinas eólicas",
      "Usinas nucleares",
      "Geradores a diesel",
    ],
    rightIdx: 1,
  },
  {
    title:
      "Qual é uma fonte de energia renovável obtida a partir da queima de biomassa?",
    answers: [
      "Energia hidrelétrica",
      "Energia nuclear",
      "Energia geotérmica",
      "Bioenergia",
    ],
    rightIdx: 3,
  },
  {
    title: "Qual é uma forma comum de aproveitamento da energia hidrelétrica?",
    answers: [
      "Turbinas eólicas",
      "Painéis solares",
      "Geradores a diesel",
      "Barragens e usinas hidrelétricas",
    ],
    rightIdx: 3,
  },
];

const letters = ["a", "b", "c", "d", "e"];

export default function Quiz() {
  const [questionId, setQuestionId] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [chosen, setChosen] = useState(-1);

  const choose = () => {
    setChosen(selected);
  };
  const next = () => {
    setChosen(-1);
    setSelected(-1);
    if (questionId + 1 < questions.length) {
      setQuestionId(questionId + 1);
    } else {
      setQuestionId(0);
    }
  };

  return (
    <div className="container">
      <h1>Quiz</h1>
      <h4 className="mt-3">
        {questionId + 1}. {questions[questionId].title}
      </h4>
      <ul className="list-group mt-3">
        {questions[questionId].answers.map((item, index) => (
          <li
            className={`list-group-item ${index === selected ? "active" : ""} ${
              chosen >= 0 ? "disabled" : ""
            }`}
            onClick={() => setSelected(index)}
            key={"radio_" + index}
          >
            <b className="">{letters[index]})</b>
            <span className="ms-2">{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={choose}
          disabled={selected < 0 || chosen > -1}
          className="btn btn-primary mt-3"
        >
          Verificar resposta
        </button>
        <button
          onClick={next}
          hidden={chosen < 0}
          className="btn btn-primary mt-3"
        >
          Próxima
        </button>
      </div>

      <div
        hidden={chosen !== questions[questionId].rightIdx}
        className="mt-4 alert alert-success"
        role="alert"
      >
        Parabéns, resposta correta!
      </div>
      <div
        hidden={chosen < 0 || chosen === questions[questionId].rightIdx}
        className="mt-4 alert alert-danger"
        role="alert"
      >
        Você errou! A resposta correta seria:{" "}
        <b>
          {letters[questions[questionId].rightIdx]}){" "}
          {questions[questionId].answers[questions[questionId].rightIdx]}
        </b>
      </div>
    </div>
  );
}
