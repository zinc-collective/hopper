var assert = require("assert");
var expandHome = require('expand-home-dir');
var path = require('path');
var fs = require('fs');

// Augment a `workspaces` object with new `paths`
// workspaces: a workspace object
// paths: an array of paths to add to the workspaces
// depth: the depth parameter for each supplied workspace. Default: 1
// errHandler: A handler which is invoked if a directory does not exist
function addPaths(workspaces, paths, depth, errHandler) {
  if (depth === undefined) {
    depth = 1;
  }

  // Install a default handler which simply warns on the console
  if (errHandler === undefined) {
    errHandler = function (path) {
      console.warn("Could not find path:", path);
    };
  }

  // Poor man's type check
  assert(typeof workspaces === "object", "workspaces must be an object");
  assert(paths instanceof Array, "paths must be an array");
  assert(typeof depth === "number", "depth must be an integer or undefined");

  // Append each argument as a path
  paths.forEach(function(workspacePath) {
    var expandedPath = path.resolve(expandHome(workspacePath));
    // Check that the path exists
    if (fs.existsSync(expandedPath)) {
      workspaces[expandedPath] = { depth: depth };
    } else {
      // Invoke an error handler if the path is not found.
      errHandler(expandedPath);
    }
  });

  return workspaces;
}

module.exports = {
  addPaths: addPaths
};
