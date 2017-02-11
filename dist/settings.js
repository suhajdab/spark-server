

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable sorting/sort-object-props */
exports.default = {
  BUILD_DIRECTORY: _path2.default.join(__dirname, '../data/build'),
  DEVICE_DIRECTORY: _path2.default.join(__dirname, '../data/deviceKeys'),
  FIRMWARE_DIRECTORY: _path2.default.join(__dirname, '../data/knownApps'),
  FIRMWARE_REPOSITORY_DIRECTORY: _path2.default.join(__dirname, '../../spark-firmware'),
  SERVER_KEY_FILENAME: 'default_key.pem',
  SERVER_KEYS_DIRECTORY: _path2.default.join(__dirname, '../data'),
  USERS_DIRECTORY: _path2.default.join(__dirname, '../data/users'),
  WEBHOOKS_DIRECTORY: _path2.default.join(__dirname, '../data/webhooks'),

  ACCESS_TOKEN_LIFETIME: 7776000, // 90 days,
  API_TIMEOUT: 30000, // Timeout for API requests.
  CRYPTO_SALT: 'aes-128-cbc',
  LOG_REQUESTS: true,
  LOGIN_ROUTE: '/oauth/token',

  PORT: 5683,
  HOST: 'localhost',
}; /**
   *    Copyright (C) 2013-2014 Spark Labs, Inc. All rights reserved. -  https://www.spark.io/
   *
   *    This program is free software: you can redistribute it and/or modify
   *    it under the terms of the GNU Affero General Public License, version 3,
   *    as published by the Free Software Foundation.
   *
   *    This program is distributed in the hope that it will be useful,
   *    but WITHOUT ANY WARRANTY; without even the implied warranty of
   *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   *    GNU Affero General Public License for more details.
   *
   *    You should have received a copy of the GNU Affero General Public License
   *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
   *
   *    You can download the source here: https://github.com/spark/spark-server
   *
   *
   *
   */
