dom-magic
=========================================

Simple ES6 utilities to manipulate DOM

## Features ##

* JSX compatible, standalone `createElement` method (no react)
* Show/hide elements
* Add event listeners
* Native ES6 module (requires babel/rollup to be used within browser)

## Installation ##

```bash
$ npm install dom-magic --save
$ yarn add dom-magic
```

### ES6 Transpiler Setup ###

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

### JSX Component ###

File: `button.jsx`

```jsx
// Internal "ReactDOM"
import * as React from 'dom-magic';

export function Button(props){

    // button css classes
    const classes = ['enlighter-btn'];

    // name set ?
    if (props.name){
        classes.push('enlighter-btn-' + props.name);
    }

    // create button
    return <div 
            className={classes.join(' ')} 
            onClick={props.onClick}
        >
            {props.text||null}
        </div>
}
```

### Transpiled JSX ###

`createElement` is provided by **dom-magic**

```js
function Button(props) {
    // button css classes
    var classes = ['enlighter-btn']; // name set ?

    if (props.name) {
    classes.push('enlighter-btn-' + props.name);
    } // create button


    return createElement("div", {
    className: classes.join(' '),
    onClick: props.onClick
    }, props.text || null);
}
```

### Browser (abstract example) ###

```js
var domMagic = require('dom-magic');

// get target container
var targetEl = domMagic.getElement('#container-a');

// create element
var buttonEl = Button({
    text: "hello world",
    name: "test"
});

// inject
domMagic.insertBefore(targetEl, buttonEl);
```


### Full Examples ###

* [EnlighterJS](https://github.com/EnlighterJS/EnlighterJS)

## License ##

dom-magic is OpenSource and licensed under the Terms of [MPL 2.0](https://opensource.org/licenses/mpl-2.0) - your're welcome to contribute