import express from "express";
import {PrismaClient} from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());


const topics = ["Animals", "Foods", "Countries", "Movies", "Sports"];
const letters = "ABCDEFGHIJKLMNOPRSTW".split("");

const letter = letters[Math.floor(Math.random() * letters.length)];
const topic = topics[Math.floor(Math.random() * topics.length)];
function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomRoomCode() {
    return Math.floor(Math.random() * 10000);
}
app.get("/", (req, res) => {
  res.send("Hello, game!");
}); 

app.post("/games", async (req, res) => {
  const roomCode = randomRoomCode();
  const letter = randomItem(letters);
  const topic = randomItem(topics);

  const game = await prisma.games.create({
    data: {
      roomCode: roomCode,
      letter: letter,
      topic: topic,
    },
  });

  res.json({
    roomCode: game.roomCode,
    letter: game.letter,
    topic: game.topic,
  });
});





app.listen(3000);
console.log("Server running on http://localhost:3000");



