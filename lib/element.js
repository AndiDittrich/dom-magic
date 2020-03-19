// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getDocument} from './navigator';

// set the elements visibility
export function displayElement(el, visible = true){
    el.style.display = (visible === true ? 'block' : 'none');
}

// remove element
export function disposeElement(el){
    el.parentNode.removeChild(el);
}

// get array of matched elements
export function getElements(selector){
    return (selector != null && selector.length > 0) ? getDocument().querySelectorAll(selector) : [];
}

// get first matched element
export function getElement(selector){
    return (selector != null && selector.length > 0) ? getDocument().querySelector(selector) : null;
}

// get data attribute
export function getElementDataAttribute(el, attb){
    return el.getAttribute('data-' + attb) || null;
}

// get attribute
export function getElementAttribute(el, attb){
    return el.getAttribute(attb) || null;
}

// add element before the original container
export function insertBefore(origin, element){
    return origin.parentNode.insertBefore(element, origin);
}
