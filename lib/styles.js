// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// add class to element
export function addClass(element, name){
    if (!element.classList.contains(name)){
        element.classList.add(name);
    }
}

// remove class from element
export function removeClass(element, name){
    if (element.classList.contains(name)){
        element.classList.remove(name);
    }
}

// has class
export function hasClass(element, name){
    return (element.classList.contains(name));
}

// toggle element class
export function toggleClass(element, name){
    if (element.classList.contains(name)){
        element.classList.remove(name);
    }else{
        element.classList.add(name);
    }
}
