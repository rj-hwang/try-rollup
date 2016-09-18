# rollup
Rollup is a JavaScript module bundler. It only includes the code you actually need. 

## Setup
```
$ npm install -g rollup
$ rollup --help
```

## [plugins](https://github.com/rollup/rollup/wiki/Plugins)

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
	$ npm i -D rollup-plugin-json
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

	rollup.config.js:

	```
	import json from 'rollup-plugin-json';
	export default {
	  entry: 'src/main.js',
	  format: 'cjs',
	  plugins: [ json() ],
	  dest: 'bundle.js'
	};
	```

- [04-plugin-babel](http://rollupjs.org/guide/#using-rollup-with-babel)

	```
	$ npm i -D rollup-plugin-babel
	$ npm i -D babel-preset-es2015-rollup
	```

	src/.babelrc:

	```
	{
	  "presets": ["es2015-rollup"]
	}
	```

	1. putting `.babelrc` file in src, rather than the project root. This allows us to have a different `.babelrc` for things like tests, if we need that later – it's generally a good idea to have separate configuration for separate tasks.  
	2. using `es2015-rollup` instead of `es2015` – that's because otherwise Babel will convert our modules to CommonJS before Rollup gets a chance to do its thing, causing it to fail. `es2015-rollup` also includes the `external-helpers` plugin, which allows Rollup to include any 'helpers' just once at the top of the bundle, rather than including them in every module that uses them (which is the default behaviour).

- [05-use-npm](http://rollupjs.org/guide/#using-rollup-with-npm)

	```
	$ npm init
	$ npm i --save rollup
	```

	package.json:

	```
	...
	"dependencies": {
	  "rollup": "^0.35.13"
	},
	"scripts": {
	  "build": "rollup -c"
	},
	...
	```

	```
	$ npm run build
	```

- [06-multi-modules](https://github.com/rollup/rollup/wiki/JavaScript-API#external) with my goal
