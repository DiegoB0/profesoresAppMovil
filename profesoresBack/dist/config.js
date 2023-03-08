"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.SECRET = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var SECRET = 'profesores-api';
exports.SECRET = SECRET;
var config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.config = config;