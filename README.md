Dependencies:
-Node
-MongoDB

To install packages
`npm install`

`npm i --save-dev gulp gulp-nodemon gulp-watch gulp-jshint gulp-livereload`

To run server, need to run have a mongodb server running as well:
`mkdir -p /data/db/`
`sudo chown -R <username> /data/db`
`mongod`


run server: 
`gulp`


Angular factory, responsible for interacting with the ExpressJS REST endpoints baby