import express from "express";
import { getData , getQuestions } from "./database.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/questions", async (req, res) => { 
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
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }); 