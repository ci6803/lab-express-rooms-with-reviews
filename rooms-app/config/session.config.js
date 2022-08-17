const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

module.exports = (app) => {
  app.set("trust proxy", 1);

  //use session
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      store: new MongoStore({
        mongoUrl: "mongodb://localhost/rooms-app",
        ttl: 60 * 60 * 24,
      }),
    })
  );
};
