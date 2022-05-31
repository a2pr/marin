import express from "express";
import cors from "cors";
import loadEnvironment from './Config/environment.js'
import * as orderController from './Controller/OrderController.js'

loadEnvironment()


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
    res.json({message: "Welcome to application@@222@"});
});

app.get("/order/:id", orderController.getById)
app.get("/orders", orderController.getOrders)
app.get("/orders/title", orderController.getByTitle)
app.post("/order", orderController.postNew)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});