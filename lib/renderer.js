// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------


export function renderComponent(stack, domTargetElement=null){

    // inject into target element ?
    if (domTargetElement !== null){
        domTargetElement.appendChild(stack);
    }

    return stack;
}