const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
//app.use(bodyparser.json);

//Rutas para el formulario

app.get("/", (req, res) => {
  res.send("Servidor listo");
});

app.post("/api/form", (req, res) => {
  const { name, email, phone, country } = req.body;
  console.log("Data resivida:", { name, email, phone, country });
  res.json({ message: "Datos enviados de manera exitosa" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server en http://localhost:${PORT}`));
