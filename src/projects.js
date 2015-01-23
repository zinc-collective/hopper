var path = require('path');
var fs = require('fs');

function findProjectsInWorkspace(workspace, depth, callback) {
  depth = depth || 1;

  var files = fs.readdirSync(workspace);

  for (var fileIndex in files) {
    var file = files[fileIndex];
    var filePath = workspace + "/" + file;
    var stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      callback(filePath);
      if (depth != 1) {
        findProjectsInWorkspace(filePath, depth - 1, callback);
      }
    }
  }
}

function all() {
  var projects = [];
  function addProject(project) {
    projects.push(project);
  }

  for (var workspace in this.config.workspaces) {
    findProjectsInWorkspace(workspace, this.config.workspaces[workspace].depth, addProject);
  }

  return projects;
}

module.exports = {
  all: all
    , config: {}
};
