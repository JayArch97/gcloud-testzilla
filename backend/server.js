import express from "express";
import { getData as data , getQuestions, getUsers, getScores as scorecard} from "./functions/database.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", async (req, res) => { 
    const questions = await data();
    res.send(questions);
 });

 app.get("/questions/:contains", async (req, res) => {
    const contains = req.params.contains;
    const questions = await getQuestions(`%${contains}%`);
    console.log(contains)
    res.send(questions);
 });  
 
 app.get("/users" , async(req, res)=>{
   const users = await getUsers();
   res.send(users);
 })


  
 app.get("/scores" , async(req, res)=>{
   const users = await scorecard();
   res.send(users);
 })

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port 8080");
    }); 