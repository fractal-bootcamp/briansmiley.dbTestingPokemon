import express from "express";
import cors from "cors";
import "dotenv/config";

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Express listening on port ${port}`));
