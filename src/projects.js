// Back [home](../) or [annotated source](../annotated_source.html)


// [fs docs](http://nodejs.org/api/fs.html)
var fs = require('fs');

// Retrieves all projects from all the workspaces
function all() {
  var projects = [];

  // Callback to append a given project to our set of projects
  function addProject(project) {
    projects.push(project);
  }

  // Iterate over configured workspaces, appending each workspace's projects to
  // our list of projects
  for (var workspace in this.config.workspaces) {
    var depth = this.config.workspaces[workspace].depth;
    findProjectsInWorkspace(workspace, depth, addProject);
  }

  return projects;
}


// Find projects for a given workspace and pass them to the callback.
// If depth > 1, treat the project as a workspace and recur into it.
function findProjectsInWorkspace(workspace, depth, addProject) {
  // Default to treating a found project like a project.
  depth = depth || 1;
  var files = fs.readdirSync(workspace);

  // Add each directory as a project and, if we can still go deeper, find
  // projects within it.
  files.forEach(function(file) {
    var projectPath = workspace + "/" + file;
    if (isDir(projectPath)) {
      addProject(projectPath);
      if (depth !== 1) {
        // Treat the project like a workspace
        findProjectsInWorkspace(projectPath, depth - 1, addProject);
      }
    }
  });
}

// Syncronously check if a given path is a directory
function isDir(path) {
  return fs.statSync(path).isDirectory();
}



// ## Public API
module.exports = {
  all: all
    , config: {}
};
