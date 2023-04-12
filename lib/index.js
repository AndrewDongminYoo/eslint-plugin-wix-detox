// @ts-nocheck
/**
 * @fileoverview This plugin is for users of Wix&#39;s Detox, a gray-box end-to-end testing and automation framework for React Native apps.
 * @author dongmin,yu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// import all environments in lib/environments
module.exports = requireIndex(__dirname, ["/rules", "environments"]);
