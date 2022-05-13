import express from "express";
import cors from "cors";
import loadEnvironment from './Config/environment.js'
import OrderController from './Controller/OrderController.js'

loadEnvironment()
import {connection} from "./Database/connection.js";
let controller = new OrderController(new connection());


const app = express();
const corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to application."});
});

app.get("/order/:id", controller.getById)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});