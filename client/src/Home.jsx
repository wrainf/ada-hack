import { useState } from "react";

const Home = ({onLanguageChange}) => {
  const [value, setValue] = useState("malay")

  const handleClick = (event) => {
    event.preventDefault();
    onLanguageChange(value)
  }

  const handleSelectChange = (event) => {
    // Update the selected value in the state
    setValue(event.target.value);
  };

  return (<div>   
    <h2>Welcome to LanguageMon</h2>
    <h2>Select Your Preferred Language</h2>
    <form>
        <label htmlFor="language">Choose a Language:</label>
        <select value={value} onChange={handleSelectChange} name="language" id="language">
            <option value="malay">Malay</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            
        </select>

        <button onClick={handleClick}>button</button>
    </form> 
  </div>)
}
export default Home;