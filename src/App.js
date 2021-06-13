import axios from "axios";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data.results)

    setQuestions(data.results);
  };

  return (
    <div className="app">
      <Header />
      <Switch>
        
        <Route
          path="/quiz"
          render={(props) => (
            <Quiz
              {...props}
              questions={questions}
              name={name}
              score={score}
              setQuestions={setQuestions}
              setScore={setScore}
            />
          )}
        />

        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              fetchQuestions={fetchQuestions}
              name={name}
              setName={setName}
            />
          )}
          exact
        />
        <Route path="/result" exact >
          <Result score={score} name={name}   />

        </Route>
      </Switch>
    </div>
  );
};

export default App;
