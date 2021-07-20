import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

export default async () => {

  try {

    mongoose.connect(config.get("mongo"), {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

    logger("success", "Database", "Connected to mongo database server");

  } catch (err) {

    logger("error", "Database", "Unable to connect to postgres database");
    process.exit(1);

  }

}