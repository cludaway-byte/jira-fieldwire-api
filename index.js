const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Jira ↔ Fieldwire API is running ✅");
});

// Example webhook
app.post("/webhook", (req, res) => {
  console.log("Received payload:", req.body);
  res.json({ status: "ok", data: req.body });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
