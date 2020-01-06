'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'message': 'Berhasil',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.created = function(values, res) {
  var data = {
      'status': 201,
      'message': 'Berhasil Di buat.',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.badrequest = function(values, res) {
  var data = {
      'status': 400,
      'message': 'Bad request',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.unauthorized = function(values, res) {
  var data = {
      'status': 401,
      'message': 'Token anda tidak valid.',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.forbidden = function(values, res) {
  var data = {
      'status': 403,
      'message': 'Data tidak ada',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.notfound = function(values, res) {
  var data = {
      'status': 404,
      'message': 'Url not Found',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.servererror = function(values, res) {
  var data = {
      'status': 500,
      'message': 'Internal Server Eror',
      'data': values
  };
  res.json(data);
  res.end();
};

exports.unavailable = function(values, res) {
  var data = {
      'status': 503,
      'message': 'Service tidak tersedia',
      'data': values
  };
  res.json(data);
  res.end();
};