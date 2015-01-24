// Back [home](../index.md) or [annotated source](../annotated_source.md)

// Configuration, by default, is stored in `~/.hop/config`

var fs = require('fs')
,   expandHomeDir = require('expand-home-dir');

var DEFAULT_CONFIG_FILE = expandHomeDir('~/.hop/config');

// Loads configuration from path, parses JSON and returns POJO
function fromFile(configFilePath) {
  if (!fs.existsSync(configFilePath)) {
    return {};
  }
  var contents = fs.readFileSync(configFilePath);
  return JSON.parse(contents);
}

// Stringifies POJO to JSON and overwrites the config file
function toFile(configFilePath, config) {
  fs.writeFileSync(configFilePath, JSON.stringify(config));
}

// ### Public API
module.exports  = {
  DEFAULT_CONFIG_FILE: DEFAULT_CONFIG_FILE
, fromFile: fromFile
, toFile: toFile
};
