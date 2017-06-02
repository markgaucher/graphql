export default {
  connections: [
    {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3000
    }
  ],
  registrations: [
    {
      plugin: './graphql'
    }
  ]
};
