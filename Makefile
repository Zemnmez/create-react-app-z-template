.INTERMEDIATE: example/package.json.merged
example/package.json.merged: package.json Makefile
	jq -r --slurp '[.[0],{ name: "\(.[1].name)-example"}]|add' 'example/package.json' '$<' > $@

example/package.json: example/package.json.merged
	cp '$<' '$@'


src: misc/inject_examples.js $(wildcard example/src/*) | example/src
	find "$@" -name "*.tsx" | xargs -t -I {} bash -c 'node $< {} > {}.tmp && cmp --silent {}.tmp {} || mv {}.tmp {}'


dist: src $(wildcard src/*) tsconfig.json
	yarn run rollup -c


.PHONY: gh-pages
gh-pages: example/build
	gh-pages -d example/build

example/build: dist example/src $(wildcard example/src/*) example/package.json
	cd example && yarn run build

typedoc.json: package.json Makefile
	jq '{ entryPoint: .name, theme: "markdown" }' package.json > $@

.INTERMEDIATE: docs/README.md
docs/README.md: src/doc.tsx $(wildcard src/*.ts*) $(wildcard node_modules/typedoc*) typedoc.json | src
	- rm README.md # for some reason it ignores --entrypoint if there's an existing readme...
	yarn run typedoc --out $(@D)

README.md: docs/README.md
	cp $< $@

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
