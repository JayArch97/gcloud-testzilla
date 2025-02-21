import express from "express";
import { getData , getQuestions } from "./functions/database.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", async (req, res) => { 
    const questions = await getData();
    res.send(questions);
 });

 app.get("/questions/:contains", async (req, res) => {
    const contains = req.params.contains;
    const questions = await getQuestions(`%${contains}%`);
    console.log(contains)
    res.send(questions);
 });  
 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port 8080");
    }); 