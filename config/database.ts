import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Ensure PostgreSQL is the client

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'), // Uses Railway-provided DATABASE_URL
        ssl: env.bool('DATABASE_SSL', true) // Enable SSL for secure connection
          ? { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false) }
          : false,
        schema: env('DATABASE_SCHEMA', 'public'), // Use the default schema
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
