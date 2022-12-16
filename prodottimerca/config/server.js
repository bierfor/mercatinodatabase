module.exports = ({ env }) => ({
  host: env('HOST', 'https://mercatinodatabase.onrender.com'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
