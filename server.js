import express from "express";
import config from "./config.js";
import { printWelcome, logger, WELCOME_BANNER } from "./utils/log.js";
import showsRouter from "./routes/shows.js";
import episodeRouter from "./routes/episode.js"

const server = express();

// parse request's body as JSON
server.use(express.json());

server.get("/", (req, res) => {
    res.send(`<pre>${WELCOME_BANNER}</pre>`);
});

// register routes
server.use("/shows", showsRouter);
server.use("/episode", episodeRouter);

server.listen(config.SERVER.PORT, config.SERVER.HOST, () => {
    printWelcome();
    logger.info(`Server is running on ${config.SERVER.HOST}:${config.SERVER.PORT}`);
});
