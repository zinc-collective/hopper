fs = require('fs');

function fromFile(configFilePath) {
  var contents = fs.readFileSync(configFilePath);
  return JSON.parse(contents);
}

function toFile(configFilePath, config) {
  fs.writeFileSync(configFilePath, JSON.stringify(config));
}

module.exports  = {
  fromFile: fromFile
, toFile: toFile
};
