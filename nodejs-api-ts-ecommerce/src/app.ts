import express, { Express, Request, Response } from "express";
import path from "path";

import authorsRoute from "./routes/authors.route";
import productsRoute from "./routes/products.route";
import suppliersRoute from "./routes/suppliers.route";
import reviewProductsRoute from "./routes/reviewProducts.route";

const app: Express = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/v1/authors", authorsRoute);
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/suppliers", suppliersRoute);
app.use("/api/v1/reviewProducts", reviewProductsRoute);
export default app;
