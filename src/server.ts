import express from "express";

const app = express()

// http://localhost:3000
app.listen(3000, () => console.log("Server is running."))

app.get("/test", (request, response) => {
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW Método Post")
})