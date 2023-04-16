# express-mongo
[![build status](https://drone.io/github.com/sergeyt/express-mongo/status.png)](https://drone.io/github.com/sergeyt/express-mongo/latest)
[![package version](http://img.shields.io/npm/v/express-mongo.svg)](https://www.npmjs.org/package/express-mongo)
[![package downloads](http://img.shields.io/npm/dm/express-mongo.svg)](https://www.npmjs.org/package/express-mongo)

RESTful API to mongodb documents for expressjs applications

## Sample usage

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var api = require('express-mongo');

var db = mongoskin.db('mongodb://@localhost:27017/docs', {safe:true});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// register RESTful API in your express application
app.use(api({db: db}));

app.listen(8080);
```
