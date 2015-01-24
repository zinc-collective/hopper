# hop -- shrink contribution overhead across languages, frameworks and teams
More information in the [online docs](http://zincmade.github.io/hopper).

## Synopsis
```
hop [-hV] <command>
```

## Description
Hopper is a modular, opinionated, convention-focused tool for your development
process.

Hopper streamlines switching between and contributing to a projects regardless
of language, team, testing library, architecture, deployment strategy, etc.

If it's a hopper-friendly project you can "hop" right in and get to work.

## Options
-V
  Prints version information for hopper and exits

-h
  Prints the synopsis and a list of commonly used commands

## Hop Commands
* **hop-projects** - List all projects in workspaces.

# hop-projects -- list all projects in your workspaces

## Synopsis
```
hop projects
```

## Description
Lists all projects in your workspaces. Useful when combined with
[selecta](https://github.com/garybernhardt/selecta) to fuzzy-find a project
quickly.

Example:
```
$ pwd
/Users/zee
$ cd $(hop projects | selecta)
> znmaho
/Users/zee/Projects/zincmade/hopper
$ pwd
/Users/zee/Projects/zincmade/hopper
```

