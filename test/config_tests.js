var c      = require('../src/config')
,   path   = require('path')
,   assert = require('assert');


var workspaceA = path.resolve('test/fixtures/workspace-a');
var workspaceB = path.resolve('test/fixtures/workspace-b');

var config = { workspaces: { } };
config.workspaces[workspaceA] = { depth: 1 };
config.workspaces[workspaceB] = { depth: 2 };

var configFilePath = path.resolve('test/fixtures/boring-config');

c.toFile(configFilePath, config);
var loadedConfig = c.fromFile(configFilePath);
assert.deepEqual(loadedConfig, config);

var configFilePath = path.resolve('test/fixtures/nonexistant-config');
var loadedConfig = c.fromFile(configFilePath);
assert.deepEqual(loadedConfig, {});

console.log("OK!");
