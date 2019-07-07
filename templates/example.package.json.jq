[
	.[0],
	{ name: "\(.[1].name)-example" },
	{ dependencies: [
			.[0].dependencies,
			{ "\(.[1].name)" : "link:.." },
			[ .[1].peerDependencies | keys[] | {
			"\(.)": "link:../node_modules/\(.)"
			}] | add
	] | add }
]|add
