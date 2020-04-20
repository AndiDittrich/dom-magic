// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getWindow} from './navigator';

const _w = getWindow();

export function logInfo(...args){
    if (typeof _w.console !== 'undefined' && _w.console.log){
        _w.console.log(...args);
    }
}

export function logError(...args){
        if (typeof _w.console !== 'undefined' && _w.console.error){
            _w.console.error(...args);
    }else{
        logInfo(...args);
    }
}