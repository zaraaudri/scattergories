import express from "express";
import {PrismaClient} from "@prisma/client";
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000);
console.log("Server running on http://localhost:3000");

const topics = ["Animals", "Foods", "Countries", "Movies", "Sports"];
const letters = "ABCDEFGHIJKLMNOPRSTW".split("");

const letter = letters[Math.floor(Math.random() * letters.length)];
const topic = topics[Math.floor(Math.random() * topics.length)];