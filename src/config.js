// Back [home](../index.md) or [annotated source](../annotated_source.md)

var fs            = require('fs')
,   path          = require('path')
,   expandHomeDir = require('expand-home-dir');

// Configuration, by default, is stored in `~/.hop/config`
var DEFAULT_CONFIG_FILE = expandHomeDir('~/.hop/config');

// Loads configuration from path, parses JSON and returns POJO
function fromFile(configFilePath) {
  configFilePath = configFilePath || DEFAULT_CONFIG_FILE;

  if (!fs.existsSync(configFilePath)) {
    return {};
  }

  var contents = fs.readFileSync(configFilePath);

  return JSON.parse(contents);
}

// Stringifies POJO to JSON and overwrites the config file
function toFile(config, configFilePath) {
  configFilePath = configFilePath || DEFAULT_CONFIG_FILE;
  if (!fs.existsSync(path.dirname(configFilePath))) {
    fs.mkdirSync(path.dirname(configFilePath));
  }
  fs.writeFileSync(configFilePath, JSON.stringify(config));
}

// ### Public API
module.exports  = {
  DEFAULT_CONFIG_FILE: DEFAULT_CONFIG_FILE
, fromFile: fromFile
, toFile: toFile
};
