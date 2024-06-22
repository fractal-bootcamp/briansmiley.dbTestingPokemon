import app from ".";
import "dotenv/config";
const port = process.env.PORT;

app.listen(port, () => console.log(`Express listening on port ${port}`));
