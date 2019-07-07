.INTERMEDIATE: example/package.json.merged

example/package.json.merged: package.json Makefile
	node scripts/gen_example.json.js \
		--packagejson package.json  \
		--examplepackagejson example/package.json \
		--out $@

example/package.json: example/package.json.merged
	cp '$<' '$@'
	cd example && yarn


dist: src $(wildcard src/*) tsconfig.json
	yarn run rollup -c


.PHONY: gh-pages
gh-pages: example/build
	gh-pages -d example/build

example/build: dist example/src $(wildcard example/src/*) example/package.json
	cd example && yarn run build

.INTERMEDIATE: docs/README.md
docs/README.md: src/doc.tsx $(wildcard src/*.ts*) $(wildcard node_modules/typedoc*) typedoc.js | src
	- rm README.md # for some reason it ignores --entrypoint if there's an existing readme...
	yarn run typedoc --logger console --out $(@D)

README.md: docs/README.md
	cp $< $@

src/doc.tsx: templates/pkgdoc_templ.jq pkginfo.json | src
	npx jq -r -f $^ > $@

.INTERMEDIATE: pkginfo.json
pkginfo.json: example/src/example.js DESC.md
	npx jq '[.,                                           \
		{documentation: $$docs},                    \
		{example: $$example, examplefile: $$examplefile},       \
		{requirements: [.peerDependencies | keys][0]  }, \
		{year: $$year}                                  \
		] | add' package.json                         \
		--arg docs "$$(cat DESC.md)"                  \
		--arg example "$$(cat $<)"  \
		--arg examplefile "$$(basename $<)" \
		--arg year "$$(date +%Y)" > $@
