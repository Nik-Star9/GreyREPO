export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RAILWAY_PUBLIC_URL', 'https://greyrepo-greyriversystem.up.railway.app/'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
