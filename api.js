import express from "express";
import data from "./src/data/data.json";

const app = express();

app.get("/api/solutions", (req, res) => {
  res.json(data.solutions);
});

app.get("/api/letters", (req, res) => {
  res.json(data.letters);
});

export const handler = app;
