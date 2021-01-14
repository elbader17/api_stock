module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'sql358.main-hosting.eu'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u724643927_stock'),
        username: env('DATABASE_USERNAME', 'u724643927_stock'),
        password: env('DATABASE_PASSWORD', 'Abc123abc123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
