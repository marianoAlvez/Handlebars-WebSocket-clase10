import express from 'express';
import __dirname from './utils.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import handlebars from "express-handlebars";
import ProductsManager from "./managers/products.js";

const app = express();

const productsManager = new ProductsManager();
const PORT = 3000;

const server = createServer(app);
const socketServer = new Server(server);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+'/public'));

app.get("/", async (req, res) => {
    const id = req.params.id;
    const limit = req.query.limit;
    try {
        if (!!id) {
            res.send(await productsManager.getProductById(id));
        } else {
            return res.render("home", { products: await productsManager.getAllProducts(limit) });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: -1, description: "Error fetching products" });
    }
});

app.get("/realtimeproducts", async (req, res) => {
    return res.render("realtimeproducts");
});

socketServer.on('connection', (socket) => {
    console.log('User connected');
  
    socket.on('new-product', async (product) => {
        console.log('New product:', product);
        await productsManager.saveProduct(product);
        socket.emit('new-product-list', await productsManager.getAllProducts());
    });
  
    socket.on('delete-product', (productId) => {
        console.log('Delete product:', productId);
    });
  
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


app.use(express.json());

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
