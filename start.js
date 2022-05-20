// "scripts": {
//   "start": "NODE_ENV=development BABEL_ENV=development node bootstrap.js",
//   "serve": "NODE_ENV=production BABEL_ENV=production node bootstrap.js"
// }

process.env.NODE_ENV = "development"; process.env.BABEL_ENV="development"; require('./bootstrap');

// Now you can run your node app like this:
// In development: node run start or node start (because node start is an alias for node run start)
// and in production: node run serve (no shorthands here)

// require('./bootstrap.js')