test: lint
	node test/all.js

lint:
	./node_modules/jshint/bin/jshint src/* test/* libexec/*

docs: man-pages api-docs usage-docs replace-md-with-html

replace-md-with-html:
	find . -type f -iname "*.html" -not -path "./node_modules/*" -exec sed -i ''  's/\.md/\.html/g' {} +

usage-docs:
	find . -name "*.md" -not -path "./node_modules/*" -not -iname "readme.md" | xargs ./node_modules/docco/bin/docco
	find libexec -type f | xargs ./node_modules/docco/bin/docco -e ".js"

api-docs:
	./scripts/create_annotated_source_index
	find src -name "*.js" | xargs ./node_modules/docco/bin/docco -o docs/src

man-pages:
	./node_modules/marked-man/bin/marked-man README.md > man/hop.1

publish-docs:
	git subtree push --prefix docs origin gh-pages

publish:
	npm publish

build: test docs
