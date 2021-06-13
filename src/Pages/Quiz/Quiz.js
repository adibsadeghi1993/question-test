
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Quiz.css";
import Question from "../../components/Qusetion/Question";

const Quiz = ({ setQuestions, questions, name, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleMix([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions,currQues]);
  console.log(options);

  const handleMix = (adib) => {
    return adib.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle"> welcome , {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <div> category: {questions[currQues].category}</div>
            <div> score: {score}</div>
          </div>
          <Question
            currQues={currQues}
            questions={questions}
            setScore={setScore}
            options={options}
            setOptions={setOptions}
            correct={questions[currQues]?.correct_answer}
            setQuestions={setQuestions}
            score={score}
            setCurrQues={setCurrQues}
          />
        </>
      ) : (
        <CircularProgress style={{ margin: 100 }} />
      )}

    </div>
  );
};

export default Quiz;
