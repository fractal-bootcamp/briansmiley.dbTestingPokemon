import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./Routes/routes";
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => console.log(`Express listening on port ${port}`));

export default app;
