- Create a repositoty
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- Diffrence between ~ and ^
- what are dependencies
- what is the use of -g while npm install

- initialize git
- .gitignore
- create a remote repo on github
- push all the code to remote origin
- play with the routes and extensions, /hello and /hello/2, /xyz
- Order of the routes matter a lot.
- Install postman app and make a workspace / collection > test API call.
- Write logic to handle GET,POST, PATCH, DELETE API calls
- /ab?c, /ab+c, /ab\*c - pattern
- Use of regex /.\*fly$/
- /user?userId=102&pwd=testing - console.log(req.query); -> {firstName": "Sunitha","lastName": "G"}
- dynamic routes:
  http://localhost:7777/user/102/sunitha/testing
  console.log(req.params);
  {
  userId: '102',
  name: 'sunitha',
  pwd: 'testing'
  }

- Multiple route handlers
- next()
- next function and errors along with res.send()
- app.use("route", rH, [rH2,rH3], rH4,rH5)
