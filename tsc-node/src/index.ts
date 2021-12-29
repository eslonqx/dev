import app from "./app";
import { PORT, ENV } from "./utils/secrets";

/**
 * Start Express server.
 */
const server = app.listen(PORT, () => {
  console.log(`  App is running at port ${PORT} in ${ENV} mode`);
  console.log("  Press CTRL-C to stop\n");
});

export default server;
