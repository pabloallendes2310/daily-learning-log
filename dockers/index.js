import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  }),
);

const app = express();

mongoose.connect("mongodb://host.docker.internal:27017/local");

app.get("/", async (_req, res) => {
  console.log("Listando");
  const animales = await Animal.find();
  return res.send(animales);
});

app.get("/crear", async (_req, res) => {
  console.log("creando");
  const animales = await Animal.create({ tipo: "chanchito", estado: "feliz" });
  return res.send(animales);
});

app.listen(3000, () => console.log("listening"));
