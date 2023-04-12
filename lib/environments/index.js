/**
 * @fileoverview ESLint config for wix/detox
 * @author @AndrewDongminYoo
 * @repository https://github.com/AndrewDongminYoo/eslint-plugin-wix-detox
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  environments: {
    detox: {
      globals: {
        detox: false,
        device: false,
        expect: false,
        waitFor: false,
        element: false,
        by: false,
      },
    },
  },
};
