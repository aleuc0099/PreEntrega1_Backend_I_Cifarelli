import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
import cartsRouter from "./routes/carts.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();
const PORT = 2806;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.use("/", cartsRouter);
app.use("/", productsRouter);

const httpServer = app.listen(PORT, () => {
  setTimeout(() => {
    console.log(`Server running on port ${PORT}`);
  }, 1000);
});
const socketServer = new Server(httpServer);
socketServer.on("connection", (socketServer) => {
  console.log("new client connected successfully");
});
