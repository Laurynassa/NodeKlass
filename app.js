//npm express
//node.js express
//npm nodemon
//pasiklonavus npm i butinai kad veiktu
console.log("Hello from back!");
console.log("Hello from back!");
// const text = require("./modules/info");
// console.log(text);
const data = require("./data");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
console.log(data);
app.get("/cia/yra/mano/routas", (request, response) => {
  response.send(data);
});

app.get("/cia/yra/mano/routas/:id", (req, res) => {
  const porduct = data.find((prod) => prod.id === parseInt(req.params.id));
  if (!porduct) {
    res.status(404).send("Product not found");
  }
  res.send(porduct);
});

app.post("/cia/yra/mano/routas", (req, res) => {
  const newProduct = {
    id: 5,
    title: "watch",
  };
  data.push(newProduct);
  res.send(data);
});

app.put("/cia/yra/mano/routas/:id", (req, res) => {
  const porduct = data.find((prod) => prod.id === parseInt(req.params.id));
  if (!porduct) {
    res.status(404).send("Product not found");
  }
  porduct.title = req.body.title;
  res.send(porduct);
});

app.delete("/cia/yra/mano/routas/:id", (req, res) => {
  const porduct = data.find((prod) => prod.id === parseInt(req.params.id));
  if (!porduct) {
    res.status(404).send("Product not found");
  }

  const productIndex = data.indexOf(porduct);
  data.splice(productIndex, 1);

  res.send(porduct);
});
const PORT = 5000;
app.listen(PORT || 8000, () => {
  console.log("server is runing on prot " + PORT);
});
