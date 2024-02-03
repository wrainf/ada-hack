import { useEffect, useState } from "react";
import axios from 'axios';
import Phrase from "./Phrase";
import Fight from "./Fight";
import Loader from "./Loader";

import styles from './Learn.module.css'

const Learn = ({language}) => {
  const [data, setData] = useState();
  const [fightMode, setFightMode] = useState(false)




  useEffect(() => {
    const parseData = (rawData) => {
      console.log(rawData)
      const rawJson = JSON.parse(rawData.data.response);
      const phrases = rawJson.phrases
      setData(phrases)
    }

    const fetchData = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/getPhrases/${language}`);
          parseData(response)
        
        
      } catch (error) {
        setData(null)
      }
    };

    fetchData();
  }, []);


  return (
  <div className="Learn">
    <div className="title">Learn {language}</div>
    {!data && <Loader/>}
    {data && !fightMode && <div className="Phrase-container">{data.map((phrase) => <Phrase english={phrase.english} foreign={phrase[language]} />)}</div>}
    {fightMode && <Fight language={language} data={data} handleExit={() => setFightMode(false)}/>}
    {data && !fightMode && <button onClick={() => setFightMode(true)}>Ready</button>}
      
    
  </div>
  ) 
}
    

export default Learn;