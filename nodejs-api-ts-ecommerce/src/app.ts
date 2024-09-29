import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import customerRoute from "./routes/v1/customer.route";
import staffRoute from "./routes/v1/staff.route";
import orderRoute from "./routes/v1/order.route";
import newRoute from "./routes/v1/new.route";
const app: Express = express();
app.use(cors());
// Bắt dữ liệu từ body của request
app.use(express.json());
//mã hóa url
app.use(express.urlencoded({ extended: true }));
//khai báo thư mục chứa tài nguyên tĩnh
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/customers", customerRoute);
app.use("/api/v1/staffs", staffRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/news", newRoute);
export default app;
