module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'tankedeling'),
        username: env('DATABASE_USERNAME', 'Erling'),
        password: env('DATABASE_PASSWORD', 'root'),
      },
      options: {},
    },
  },
});
