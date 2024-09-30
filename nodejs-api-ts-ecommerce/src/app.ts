import express, { Express, Request, Response } from "express";
import path from "path";

import authorsRoute from "./routes/v1/authors.route";
import productsRoute from "./routes/v1/products.route";
import suppliersRoute from "./routes/v1/suppliers.route";
import reviewProductsRoute from "./routes/v1/reviewProducts.route";

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
