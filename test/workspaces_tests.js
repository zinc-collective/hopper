var workspaces = require("../src/workspaces");
var assert = require("assert");
var path = require("path");

function ensureThrows(f, msg) {
  var threw = false;
  try {
    f();
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error("Expected function to throw", msg);
  }
}

// addPaths

ensureThrows(function () {
  workspaces.addPaths();
}, "Improper arguments");

// addPaths adds a workspace to the workspaces if it exists
var newPath = path.resolve("./test/fixtures/workspace-a");
var result = workspaces.addPaths({}, [newPath], 1);
assert(result[newPath], "result didn't add a workspace for " + newPath);
assert(result[newPath].depth === 1, "result didn't set the depth properly");

// addPaths does not add a workspace if it does not exist
var handledErr;
var handler = function (arg) { handledErr = arg; };
var newPath = path.resolve("./test/fixtures/workspace-that-does-not-exist");
var result = workspaces.addPaths({}, [newPath], 1, handler);
assert(result[newPath] === undefined, "A path was added even though it did not exist");
assert(handledErr, "The error handler was not called");
assert(handledErr === newPath, "The error handler was not called with the correct path");
