# Contributing to Hopper
Back [home](./index.md)

Hopper is written in javascript, and targets the nodejs runtime. If you'd like
to contribute to hopper development, there's a few things you should know:

* We have a [Code of Conduct](./CODE_OF_CONDUCT.md)
* We use [Github Flow](https://guides.github.com/introduction/flow/index.html)
  to manage contributions
* We have a [Work in Progress board](https://waffle.io/zincmade/hopper)
* We would love if you could report bugs, call out confusing documentation,
  and/or request features via our [issue
  tracker](./https://github.com/zincmade/hopper/issues)

## Submitting a Patch
The following is a reasonable approximation of what it takes to get a
contribution into hopper, from start to finish.

1. Ensure you've installed [node](http://nodejs.org).
2. [Fork and clone](https://guides.github.com/activities/forking/) the [hopper
   repository](http://github.com/zincmade/hopper)
3. `cd` into the directory you've clone the repository
4. Run `npm install` to install the dependencies
5. Run `make test docs` to run the tests and build the docs!
6. Run `./libexec/hop` to run your local version of hopper.
7. Create a branch that describes the feature you're building/bug you're fixing
8. Type Type Type!
9. Run `make test docs` frequently! (I recommend using
   [wach](https://github.com/quackingduck/wach) to re-run the tests and docs on
   every file save)
10. `git push` your branch to Github.
11. Submit a [pull
    request](https://help.github.com/articles/creating-a-pull-request/)
12. Adapt your code based on feedback given by project contributors.
13. Watch your patch get merged
14. Revel in the adoration of your peers and professional associates!

[home](./index.md)
