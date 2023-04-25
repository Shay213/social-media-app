import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.use("/api/users", userRoutes);


app.listen(8800, () => {
    console.log("API working!");
});