import { createConnection } from "typeorm";

createConnection()

if (createConnection()) {
  console.log("we're connected!")
} else {
  console.log("connection error")
}