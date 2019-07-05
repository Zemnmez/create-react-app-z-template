def jsdoc: "/**\n" + (. | split("\n") | map(" * " + .) | join("\n")) + "\n */";

("
@module \(.name)
@preferred
\(.requirements | map("@requires " + .) | join("\n") )
@summary \(.description)
@version \(.version)
@author \(.author)
@copyright \(.author) \(.year)
@license \(.license)
## Installation

```bash
yarn add \(.name)
```
\(.documentation)

" | ltrimstr("\n") | rtrimstr("\n") | jsdoc) + "\n\n" + (" " |jsdoc) + "\n\n"
