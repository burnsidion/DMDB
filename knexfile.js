module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bands-dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/bands-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
