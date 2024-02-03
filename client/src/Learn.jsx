import { useEffect, useState } from "react";
import axios from 'axios';
import Phrase from "./Phrase";

import styles from './Learn.module.css'

const Learn = ({language}) => {
  const [data, setData] = useState();
  let count = 0;



  useEffect(() => {
    const parseData = (rawData) => {
      console.log(rawData)
      const rawJson = JSON.parse(rawData.data.response);
      const phrases = rawJson.phrases
      setData(phrases)
    }

    const fetchData = async () => {
      try {
        if(count < 1) {
          const response = await axios.get(`http://localhost:3000/getPhrases/${language}`);
          parseData(response)
        }
        
      } catch (error) {
        setData(null)
      }
    };

    fetchData();
  }, []);


  return (
  <div>
    <div className={styles.container}>Learn {language}</div>
    {data && <div>{data.map((phrase) => <Phrase english={phrase.english} foreign={phrase[language]} />)}</div>}
  </div>
  ) 
}
    

export default Learn;