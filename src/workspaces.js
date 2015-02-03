// Back [home](../index.md) or [annotated source](../annotated_source.md)

var assert = require("assert");
var expandHome = require('expand-home-dir');
var path = require('path');
var fs = require('fs');

// Merges a set of paths on the filesystem into workspaces. Calls errorHandler
// with paths that don't exist.
function addPaths(workspaces, paths, depth, errHandler) {
  // Poor man's type check on arguments
  assert(typeof workspaces === "object", "workspaces must be an object");
  assert(paths instanceof Array, "paths must be an array");
  assert(typeof depth === "number", "depth must be an integer");

  // If no error handler provided, a log each missing path as a warning.
  if (errHandler === undefined) {
    errHandler = function (path) {
      console.warn("Could not find path:", path);
    };
  }


  // Add each path to workspaces if it exists, otherwise invoke errorHandler
  // with the path.
  paths.forEach(function(workspacePath) {
    // Get the absolute path on the filesystem.
    var expandedPath = path.resolve(expandHome(workspacePath));
    if (fs.existsSync(expandedPath)) {
      workspaces[expandedPath] = { depth: depth };
    } else {
      errHandler(expandedPath);
    }
  });

  return workspaces;
}

// ### Public API
module.exports = {
  addPaths: addPaths
};
