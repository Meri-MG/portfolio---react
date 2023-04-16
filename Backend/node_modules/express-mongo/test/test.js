var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoskin = require('mongoskin');
var api = require('../index.js');
var Q = require('q');
var should = require('should');
// TODO try supertest
var http = require('superagent');

var port = 9876;
var endpoint = 'http://localhost:' + port + '/test/';
var collectionName = 'testusers';

describe('with express-mongo rest api I can', function() {
  var app;


  before(function() {
    var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true});

    // clean test collection
    db.collection(collectionName).remove({}, function(err, res) {
    });

    app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(api({db: db}));

    app.listen(port);
  });

  after(function() {
    // TODO it seems no need to stop app
  });

  it('easily do CRUD operations', function(done) {
    var users = collection(collectionName);
    var user = {name: 'bob'};

    users.add(user)
      .then(function(docs) {
        docs.length.should.eql(1);
        docs[0]._id.length.should.eql(24);
        return users.get(docs[0]._id);
      })
      .then(function(doc) {
        var id = doc._id;
        delete doc._id;
        doc.should.eql(user);
        return promisify(http.get(endpoint)).then(function(list) {
          list.should.containEql(collectionName);
          return users.find({name: 'bob'});
        }).then(function(docs) {
          docs.length.should.eql(1);
          return id;
        });
      })
      .then(function(id) {
        user.name = 'rob';
        return users.put(id, user);
      })
      .then(function(res) {
        return users.del(res._id);
      })
      .then(function(res) {
        res.count.should.eql(1);
        return users.find();
      })
      .then(function(docs) {
        docs.length.should.eql(0);
        return users.add([{name: 'bob'}, {name: 'rob'}]);
      })
      .then(function(docs) {
        docs.length.should.eql(2);
        return users.del({name: 'rob'});
      })
      .then(function(res) {
        res.count.should.eql(1);
        return users.find();
      })
      .then(function(docs) {
        docs.forEach(function(d) { delete d._id; });
        docs.should.eql([{name: 'bob'}]);
        return docs;
      })
      .catch(function(err) {
        should.fail(err);
        done();
      })
      .done(function(){
        done();
      });
  });
});

// helpers

function collection(name) {
  var url = endpoint + name;
  return {
    find: function(query) {
      var req = http.get(url);
      if (query && Object.keys(query).length > 0) {
        req = req.query({query: query});
      }
      return promisify(req);
    },
    add: function(obj) {
      return promisify(http.post(url).send(obj));
    },
    get: function(id) {
      return promisify(http.get(url + '/' + id));
    },
    put: function(id, obj) {
      return promisify(http.put(url + '/' + id).send(obj));
    },
    del: function(id) {
      if (typeof id == "object") {
        return promisify(http.del(url).send({query: id}));
      }
      return promisify(http.del(url + '/' + id));
    }
  };
}

function promisify(req) {
  var d = Q.defer();
  req.end(function(err, res) {
    if (err) {
      d.reject(err);
    } else {
      d.resolve(res.body);
    }
  });
  return d.promise;
}
