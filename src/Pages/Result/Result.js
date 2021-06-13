import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Result.css"

const Result = ({score,name}) => {
    return (
        <div className="resultpage">
            <div className="result">
            <div className="name">{name}</div>
            <div className="score">final score :{score<5?` your score is ${score} and you should try more`:` your score is ${score} and  is perffect`}</div>
          <div className="btn">
          <Link to="/">
          <Button
            variant="contained"
            color="primary"
           
            style={{ width: 185 }}
           
          >
        Go Home Page
          </Button>
          </Link>
          </div>
        </div>
        </div>
    )
}

export default Result
