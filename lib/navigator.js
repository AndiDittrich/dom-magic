// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

/* eslint no-undef: 0 */
export const globals = {
    document: document,
    window: window
};

// wrapper
export function getDocument(){
    return document;
}

// wrapper
export function getWindow(){
    return window;
}