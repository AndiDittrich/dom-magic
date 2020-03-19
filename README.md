dom-magic
=========================================

Simple ES6 utilities to manipulate DOM

## Features ##

* JSX compatible, standalone `createElement` method (no react)
* Show/hide elements
* Add event listeners
* Native ES6 module (requires babel/rollup to be used within browser)

## Install ##

```bash
$ npm install dom-magic --save
$ yarn add dom-magic
```

File: `gulpfile.js`

```js

const _rollup_babel = require('rollup-plugin-babel');
const _rollup_resolve = require('@rollup/plugin-node-resolve');

_gulp.task('es6-transpile', async function(){
    const bundle = await _rollup.rollup({
        input: './src/browser/EnlighterJS.js',
        plugins: [
            _rollup_resolve(),
            _rollup_babel()
        ]
    });

    // write the bundle to disk
    await bundle.write({
        format: 'iife',
        name: 'EnlighterJS',
        file: './.tmp/enlighterjs.js'
    });
});
```

File: `babel.config.json`

```json
{
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {
        }]
    ],
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": [
                        "safari >= 7",
                        "IE >= 9",
                        "ios >= 9",
                        "firefox >= 50",
                        "chrome >= 50",
                        "edge >= 11"
                    ]
                },
                "debug": false
            }
        ]
    ]
}
```

## Examples ##

* [EnlighterJS](https://github.com/EnlighterJS/EnlighterJS)

## License ##

dom-magic is OpenSource and licensed under the Terms of [MPL 2.0](https://opensource.org/licenses/mpl-2.0) - your're welcome to contribute