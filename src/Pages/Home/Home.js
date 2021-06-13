import { Button, MenuItem, TextField } from "@material-ui/core";
import React,{useState} from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name,setName,fetchQuestions}) => {

  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [error, setError] = useState(false)

  const history=useHistory()

  const handleSubmit=()=>{
      if (!category || !difficulty || !name) {
          console.log("palese fill the form")
          setError(true)
          
      } else {
          setError(false)
          fetchQuestions(category,difficulty)
          history.push("/quiz")
          
      }
  }


  return (
    <div className="content">
      <div className="settings">
      

        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        {error &&  <ErrorMessage>please fill out all input</ErrorMessage>               }
        <div className="settings__select">
          <TextField
            id="outlined-basic"
            label="enter your name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
          />

          <TextField
            select
            label="select category"
            variant="outlined"
            style={{ marginTop: 15 }}
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            select
            label="select category"
            variant="outlined"
            style={{ marginTop: 15 }}
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button onClick={handleSubmit} variant="contained" color="primary" style={{marginTop:15}}  >Start Quiz</Button>
        </div>
      </div>
      <img src="/adib.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
