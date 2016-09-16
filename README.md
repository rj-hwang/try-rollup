# rollup guide

## Setup
```
$ npm install -g rollup
$ rollup --help
```

## Tags
- [01-first-bundle](http://rollupjs.org/guide/#creating-your-first-bundle)
	```
	$ rollup -o bundle.js -f es (default)
	$ rollup -o bundle.js -f cjs
	$ rollup -o bundle.js -f amd
	$ rollup -o bundle.js -f umd
	```
- [02-use-config-file](http://rollupjs.org/guide/#using-config-files): rollup.config.js
	```
	$ rollup -c
	$ rollup -c rollup.config.dev.js
	$ rollup -c rollup.config.prod.js
	```
- [03-plugin-json](http://rollupjs.org/guide/#getting-started-with-plugins) -  [tree-shaking](http://rollupjs.org/guide/#what-is-tree-shaking-) in action
	```
	$ rollup i -D rollup-plugin-json
	```
	package.json:
	```
	{
	  "name": "try-rollup",
	  "version": "1.0.0",
	  "devDependencies": {
	    "rollup-plugin-json": "^2.0.2"
	  }
	}
	```