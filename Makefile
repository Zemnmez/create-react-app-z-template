
src: misc/inject_examples.js $(wildcard example/src/*) | example/src
	find "$@" -name "*.tsx" | xargs -t -I {} bash -c 'node $< {} > {}.tmp && cmp --silent {}.tmp {} || mv {}.tmp {}'


dist: src $(wildcard src/*) tsconfig.json
	yarn run rollup -c


.PHONY: gh-pages
gh-pages: example/build
	gh-pages -d example/build

example/build: dist example/src $(wildcard example/src/*)
	cd example && yarn run build

typedoc.js: package.json Makefile
	jq '{ entryPoint: .name, theme: "markdown" }' package.json > $@

.PHONY: docs
docs: src/doc.tsx $(wildcard src/*.ts*) $(wildcard node_modules/typedoc*) typedoc.js | src
	- rm README.md # for some reason it ignores --entrypoint if there's an existing readme...
	yarn run typedoc

README.md: docs
	# by default, typedoc makes the header of the module a second-level
	# header and puts it in a quote. i have no explanation for why
	# but this does fix it.
	sed -E -i .backup '1s/^> *#*(.*)/# \1/' README.md
	rm $@.backup

src/doc.tsx: templates/pkgdoc_templ.jq pkginfo.json | src
	jq -r -f $^ > $@

.INTERMEDIATE: pkginfo.json
pkginfo.json: example/src/example.js DESC.md
	jq '[.,                                           \
		{documentation: $$docs},                    \
		{example: $$example, examplefile: $$examplefile},       \
		{requirements: [.peerDependencies | keys][0]  }, \
		{year: $$year}                                  \
		] | add' package.json                         \
		--arg docs "$$(cat DESC.md)"                  \
		--arg example "$$(cat $<)"  \
		--arg examplefile "$$(basename $<)" \
		--arg year "$$(date +%Y)" > $@
