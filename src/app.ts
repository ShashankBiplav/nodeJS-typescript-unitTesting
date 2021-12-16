import express, {Application} from "express";
// import your routes here
import homeRoutes from "./routes";

const app:Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", homeRoutes);

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;