import { useRef, useState } from "react";
import axios from "axios";

import enemy from "./images/lugia 1.png"
import ash from "./images/red-1.png"

const Fight = ({language, handleExit, data}) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [wins, setWins] = useState(0)

  
  const checkAnswer = async (event) => {
    event.preventDefault()
    console.log(currentQ)
    const response = await axios.get(`http://localhost:3000/getResponse?question=${data[currentQ][language]}&answer=${event.target.value}`);
    const result = response.data.response;
    console.log(result);
    if(result.includes("Yes")){
      alert("Good job!")
      setWins(prev => prev + 1)
    } else {
      alert("Not exactly right...")
    }
    setCurrentQ(prev => prev + 1)
   
  }

  return (
  <>
  <div className="explain">Enter the appropriate response to the given prompt</div>
  <div className="Fight">
    {data && data.length == currentQ && <div className="outcome">{wins}/{data.length} Correct Answers!</div>}
    {data && currentQ < data.length && <><div className="question">"{data[currentQ][language]}"</div>
    <input type="text" onBlur={checkAnswer} /></>}
    <img className="enemy" src={enemy} alt="" />
    <img className="ash" src={ash} alt="" />
    
  </div>
  
  <button onClick={handleExit}>Exit</button>
  </>)
}
export default Fight;