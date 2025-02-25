module.exports = ({ env }) => {
    const isProduction = env('NODE_ENV') === 'production';
  
    return {
      connection: {
        client: isProduction ? 'postgres' : 'sqlite',
        connection: isProduction
          ? {
              host: env('DATABASE_HOST'),
              port: env.int('DATABASE_PORT', 5432),
              database: env('DATABASE_NAME'),
              user: env('DATABASE_USERNAME'),
              password: env('DATABASE_PASSWORD'),
              ssl: env.bool('DATABASE_SSL', true),
            }
          : {
              filename: env('DATABASE_FILENAME', '.tmp/data.db'),
            },
        useNullAsDefault: !isProduction,
        debug: false,
      },
    };
  };
  