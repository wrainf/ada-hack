const express = require("express");
require("dotenv").config();
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

const API_KEY = process.env.API_KEY;
const apiUrl = "https://api.openai.com/v1/chat/completions";

const getResponse = async (requestData) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log("Response:", response.data.choices[0].message);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

// Route to get phrases
app.get("/getPhrases/:language", async (req, res) => {
  const language = req.params.language;
  const requestData = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Suggest 3 phrases simple ${language} and english translate. Only output JSON and nothing else`,
      },
    ],
    temperature: 0.7,
  };

  let response = await getResponse(requestData);
  response = response.replace("\n", "");

  res.json({ response });
});

// Route to get a response based on an ID
app.get("/getResponse", async (req, res) => {
  const answer = req.query.answer;
  const question = req.query.question;
  console.log(question, answer);
  const requestData = {
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: `Is "${answer}" a good and suitable response to "${question}"? yes or no only`,
      },
    ],
    temperature: 0.7,
  };
  const response = await getResponse(requestData);
  res.json({ response });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
