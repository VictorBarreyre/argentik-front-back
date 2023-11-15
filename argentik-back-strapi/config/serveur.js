module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    url: env('PUBLIC_URL', '/'),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
    server: {
      // Ajoutez la clé secrète de session ici
      keys: env('APP_KEYS', ['789179872189', '129019B']),
    },
  });