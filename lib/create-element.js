// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getDocument} from './navigator';

// create a new dom element with given attributes / text / dom nodes
export function createElement(element, attributes, ...content){

    // is function ? passthrough
    if (typeof element === 'function'){
        return element(attributes || {}, ...content);
    }

    const _document = getDocument();

    // create new dom element
    const el = _document.createElement(element);

    // inner content set ?
    if (content.length > 0){

        // push nodes to parent element
        for (let i=0;i<content.length;i++){
            const node = content[i];

            // valid element ?
            if (!node){
                return;
            }

            // array ?
            if (node.push){

                for (let j=0;j<node.length;j++){
                    const node2 = node[j];
                    
                    // standard dom node ?
                    if (node2.appendChild){
                        el.appendChild(node2);

                    // text node
                    }else{
                        el.appendChild(_document.createTextNode(node2));
                    }
                }

            // standard dom node ?
            }else if (node.appendChild){
                el.appendChild(node);

            // text node
            }else{
                el.appendChild(_document.createTextNode(node));
            }
        }
    }

    // utility function to add event listener
    function addEventListener(event, cb){
         // register listener
         el.addEventListener(event, function(evt){
            // disable defaults, disable propagation
            evt.preventDefault();
            evt.stopPropagation();

            // bind this to event listener
            if (cb){
                cb.apply(el, [evt, el]);
            }
        });
    }

    // set attributes
    // iterate over object properties
    for (let attbName in attributes){
        // object property ?
        if (!Object.prototype.hasOwnProperty.call(attributes, attbName)){
            continue;
        }

        // extract value
        const attbValue = attributes[attbName];

        // event ?
        if (attbName.substr(0, 2) === 'on'){
            // ignore null events
            if (attbValue === null){
                return;
            }

            // extract event type
            const type = attbName.substr(2).toLowerCase();

            // register listener
            addEventListener(type, attbValue);

        // set attribute
        }else{
            // className set ? transform
            if (attbName === 'className'){
                attbName = 'class';
            }
            el.setAttribute(attbName, attbValue);
        }
    }

    // extend element
    el.on = addEventListener;

    return el;
}