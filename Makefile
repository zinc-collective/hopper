test: lint
	node test/all.js

lint:
	./node_modules/jshint/bin/jshint src test libexec

