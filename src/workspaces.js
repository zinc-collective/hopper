var assert = require("assert");
var expandHome = require('expand-home-dir');
var path = require('path');
var fs = require('fs');

function addPaths(workspaces, paths, depth, err) {
  if (depth === undefined) {
    depth = 1;
  }

  if (err === undefined) {
    err = function (path) {
      console.warn("Could not find path:", path);
    };
  }

  assert(typeof workspaces === "object", "workspaces must be an object");
  assert(paths instanceof Array, "paths must be an array");
  assert(typeof depth === "number", "depth must be an integer or undefined");

  // Append each argument as a path
  paths.forEach(function(workspacePath) {
    var expandedPath = path.resolve(expandHome(workspacePath));
    if (fs.existsSync(expandedPath)) {
      workspaces[expandedPath] = { depth: depth };
    } else {
      err(expandedPath);
    }
  });

  return workspaces;
}

module.exports = {
  addPaths: addPaths
};
