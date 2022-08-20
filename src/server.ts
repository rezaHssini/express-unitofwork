import app from "./router/user.router";
import "reflect-metadata";

// Get Env variables
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`App listening on the http://localhost:${port}`);
});
