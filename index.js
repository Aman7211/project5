const express = require("express");
const app = express();
const platformRoutes = require("./routes/PlatformRoutes");
const {fetchDataAndStoreInDB} = require('./Controllers/PlatformController');
const database = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
database.connect();
fetchDataAndStoreInDB();
app.use(express.json());

app.use(
  cors({
    origin: '*',
    credentials: true,
    maxAge: 14400,
  })
);

app.use("/api/v1", platformRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
