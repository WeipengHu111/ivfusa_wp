module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", env("NODE_ENV") === "production" ? "https://ivfusa-init-wp.onrender.com" : "http://localhost:1337"),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'yourAdminJwtSecret'),
    },
  },
  app: {
    keys: env.array('APP_KEYS', ['yourAppKey1', 'yourAppKey2']),
  },
});
