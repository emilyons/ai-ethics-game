import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;  // Change 5000 to 5001 or any other available port

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// Serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
