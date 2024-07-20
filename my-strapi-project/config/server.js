module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', env('NODE_ENV') === 'development' ? 'http://localhost:1337' : 'https://ivfusa-init-wp.onrender.com'),
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
  environment: env('NODE_ENV', 'development'),
});
