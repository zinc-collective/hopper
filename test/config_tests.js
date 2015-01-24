var c      = require('../src/config')
,   fs     = require('fs')
,   path   = require('path')
,   assert = require('assert');


// Test setup, with them there fixtures
var workspaceA = path.resolve('test/fixtures/workspace-a');
var workspaceB = path.resolve('test/fixtures/workspace-b');

var config = { workspaces: { } };
config.workspaces[workspaceA] = { depth: 1 };
config.workspaces[workspaceB] = { depth: 2 };



// Writing and loading seems to work
var configFilePath = path.resolve('test/fixtures/boring-config');
c.toFile(config, configFilePath);

var loadedConfig = c.fromFile(configFilePath);
assert.deepEqual(loadedConfig, config);


// Loads an empty object if the config file doesn't exist
var configFilePath = path.resolve('test/fixtures/nonexistant-config');
var loadedConfig = c.fromFile(configFilePath);
assert.deepEqual(loadedConfig, {});

// Create config and config directory if it doesn't exist
ensureNonexistantConfigDoesntExist();
var configFilePath = path.resolve('test/fixtures/nonexistant-directory/nonexistant-config');
c.toFile({}, configFilePath);
ensureNonexistantConfigDoesntExist();

console.log("OK!");

function ensureNonexistantConfigDoesntExist() {
  try {
    fs.unlinkSync('test/fixtures/nonexistant-directory/nonexistant-config');
    fs.rmdirSync('test/fixtures/nonexistant-directory');
  } catch(err) {
    // We expect this not to exist, unless something else failed;
  }
}
