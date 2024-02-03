const express = require("express");
const app = express();

// Sample phrases data
const phrasesData = [
  { id: 1, malay: "Apa khabar?", english: "How are you?" },
  { id: 2, malay: "Terima kasih", english: "Thank you" },
  // Add more phrases as needed
];

// Route to get phrases
app.get("/getPhrases", (req, res) => {
  res.json({ phrases: phrasesData });
});

// Route to get a response based on an ID
app.get("/getResponse/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phrase = phrasesData.find((p) => p.id === id);

  if (phrase) {
    res.json({ response: phrase });
  } else {
    res.status(404).json({ error: "Phrase not found" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
