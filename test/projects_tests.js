var path     = require('path')
,   assert   = require('assert')
,   projects = require('../src/projects');

var workspaces = {};
var workspaceA = path.resolve('test/fixtures/workspace-a');
workspaces[workspaceA] = { depth: 1 };

var workspaceB = path.resolve('test/fixtures/workspace-b');
workspaces[workspaceB] = { depth: 2 };
var expectedProjects = [
  'workspace-a/project-a'
, 'workspace-a/project-b'
, 'workspace-b/client-a'
, 'workspace-b/client-a/project-1'
, 'workspace-b/client-a/project-2'
, 'workspace-b/client-b'
, 'workspace-b/client-b/project-alpha'
, 'workspace-b/client-b/project-beta'
].map(function(workspace) {
  return path.resolve('test/fixtures', workspace);
});

projects.config.workspaces = workspaces;

assert.deepEqual(projects.all(), expectedProjects);
