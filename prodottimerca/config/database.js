module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce96pqcgqg46koouppbg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'prodmerc'),
      user: env('DATABASE_USERNAME', 'prodmerc_user'),
      password: env('DATABASE_PASSWORD', 'xdzRCbVVoIEI7ruENfGwovQTMUMManfm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
