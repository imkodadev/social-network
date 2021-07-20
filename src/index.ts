import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger';

import config from 'config';
import router from './router';

import { NotFoundError, IApiError } from './apierror';

const app = express();
const server = http.createServer(app);

// use body parser
app.use(bodyParser.json({
  limit: "100kb"
}));

// use router
app.use("/v1", router);

// catch 404's
app.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
  next(new NotFoundError("No Endpoint Found"));
});

// Error Hanlder
app.use((err: IApiError, req:express.Request, res:express.Response, next:express.NextFunction) => {
  res.status(err.code).json({statusCode:err.code,error:err.error,message:err.message});
});

// start server
server.listen(config.get("port"), () => logger("success", "HTTP", `Now listening on port ${config.get("port")}}`));

export default app;