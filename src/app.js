import express from "express";
import "dotenv/config";
import cors from "cors";
import personaRoute from "./router/personaRouter.js";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/personaAI", personaRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is listen at port ${process.env.PORT}`);
});
