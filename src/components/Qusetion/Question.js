import React, { useState} from "react";
import "./Question.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";

const Question = ({
  questions,
  setOptions,
  currQues,
  setScore,
  options,
  correct,
  setQuestions,
  score,
  setCurrQues,
}) => {
  console.log(options);
  console.log(correct);

  const [selected, setSelected] = useState();

  const [error, setError] = useState(false);
  const history=useHistory()

  const handleback = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
      setError(false);
    }
  };

  const handleQuit=()=>{

  }


  const handleNext=()=>{
    if(currQues>8){
      history.push("/result")
    } else if(selected){
      setCurrQues(currQues+1)
      setSelected()
    }else{
      setError(true)
    }
  }

  return (
    <div className="question">
      <h1>Question: {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>please choose one</ErrorMessage>}

          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                key={i}
                disabled={selected}
                className={`singleOption ${selected && handleback(i)}`}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 100 }}
              onClick={handleQuit}
            >
              Quit
            </Button>
          </Link>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 150 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
