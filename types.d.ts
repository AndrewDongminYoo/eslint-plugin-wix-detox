// Generated by https://quicktype.io

export interface ESLintRCSchema {
  /**
   * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to
   * enable support for ECMAScript 6 as well as JSX by using configuration settings.
   */
  ecmaFeatures?: ECMAFeatures;
  /**
   * An environment defines global variables that are predefined.
   */
  env?: Env;
  /**
   * If you want to extend a specific configuration file, you can use the extends property and
   * specify the path to the file. The path can be either relative or absolute.
   */
  extends?: string[] | string;
  /**
   * Set each global variable name equal to true to allow the variable to be overwritten or
   * false to disallow overwriting.
   */
  globals?: { [key: string]: boolean | GlobalEnum };
  /**
   * Tell ESLint to ignore specific files and directories. Each value uses the same pattern as
   * the `.eslintignore` file.
   */
  ignorePatterns?: string[] | string;
  /**
   * Prevent comments from changing config or rules
   */
  noInlineConfig?: boolean;
  /**
   * Allows to override configuration for files and folders, specified by glob patterns
   */
  overrides?: Override[];
  parser?: string;
  /**
   * The JavaScript language options to be supported
   */
  parserOptions?: ParserOptions;
  /**
   * ESLint supports the use of third-party plugins. Before using the plugin, you have to
   * install it using npm.
   */
  plugins?: string[];
  /**
   * By default, ESLint will look for configuration files in all parent folders up to the root
   * directory. This can be useful if you want all of your projects to follow a certain
   * convention, but can sometimes lead to unexpected results. To limit ESLint to a specific
   * project, set this to `true` in a configuration in the root of your project.
   */
  root?: boolean;
  /**
   * ESLint comes with a large number of rules. You can modify which rules your project uses
   * either using configuration comments or configuration files.
   */
  rules?: Rules;
  /**
   * ESLint supports adding shared settings into configuration file. You can add settings
   * object to ESLint configuration file and it will be supplied to every rule that will be
   * executed. This may be useful if you are adding custom rules and want them to have access
   * to the same information and be easily configurable.
   */
  settings?: { [key: string]: any };
}

/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to
 * enable support for ECMAScript 6 as well as JSX by using configuration settings.
 */
export interface ECMAFeatures {
  arrowFunctions?: boolean;
  binaryLiterals?: boolean;
  blockBindings?: boolean;
  classes?: boolean;
  defaultParams?: boolean;
  destructuring?: boolean;
  /**
   * Enables support for the experimental object rest/spread properties (IMPORTANT: This is an
   * experimental feature that may change significantly in the future. It's recommended that
   * you do not write rules relying on this functionality unless you are willing to incur
   * maintenance cost when it changes.)
   */
  experimentalObjectRestSpread?: boolean;
  forOf?: boolean;
  generators?: boolean;
  /**
   * allow return statements in the global scope
   */
  globalReturn?: boolean;
  /**
   * enable global strict mode (if ecmaVersion is 5 or greater)
   */
  impliedStrict?: boolean;
  /**
   * enable JSX
   */
  jsx?: boolean;
  modules?: boolean;
  objectLiteralComputedProperties?: boolean;
  objectLiteralDuplicateProperties?: boolean;
  objectLiteralShorthandMethods?: boolean;
  objectLiteralShorthandProperties?: boolean;
  octalLiterals?: boolean;
  regexUFlag?: boolean;
  regexYFlag?: boolean;
  restParams?: boolean;
  spread?: boolean;
  superInFunctions?: boolean;
  templateStrings?: boolean;
  unicodeCodePointEscapes?: boolean;
}

/**
 * An environment defines global variables that are predefined.
 */
export interface Env {
  /**
   * defines require() and define() as global variables as per the amd spec
   */
  amd?: boolean;
  /**
   * AppleScript global variables
   */
  applescript?: boolean;
  /**
   * Atom test helper globals
   */
  atomtest?: boolean;
  /**
   * browser global variables
   */
  browser?: boolean;
  /**
   * CommonJS global variables and CommonJS scoping (use this for browser-only code that uses
   * Browserify/WebPack)
   */
  commonjs?: boolean;
  /**
   * Ember test helper globals
   */
  embertest?: boolean;
  /**
   * enable all ECMAScript 6 features except for modules
   */
  es6?: boolean;
  /**
   * GreaseMonkey globals
   */
  greasemonkey?: boolean;
  /**
   * adds all of the Jasmine testing global variables for version 1.3 and 2.0
   */
  jasmine?: boolean;
  /**
   * Jest global variables
   */
  jest?: boolean;
  /**
   * jQuery global variables
   */
  jquery?: boolean;
  /**
   * Meteor global variables
   */
  meteor?: boolean;
  /**
   * adds all of the Mocha test global variables
   */
  mocha?: boolean;
  /**
   * MongoDB global variables
   */
  mongo?: boolean;
  /**
   * Java 8 Nashorn global variables
   */
  nashorn?: boolean;
  /**
   * Node.js global variables and Node.js scoping
   */
  node?: boolean;
  /**
   * PhantomJS global variables
   */
  phantomjs?: boolean;
  /**
   * Prototype.js global variables
   */
  prototypejs?: boolean;
  /**
   * Protractor global variables
   */
  protractor?: boolean;
  /**
   * QUnit global variables
   */
  qunit?: boolean;
  /**
   * Service Worker global variables
   */
  serviceworker?: boolean;
  /**
   * Globals common to both Node and Browser
   */
  "shared-node-browser"?: boolean;
  /**
   * ShellJS global variables
   */
  shelljs?: boolean;
  /**
   * WebExtensions globals
   */
  webextensions?: boolean;
  /**
   * web workers global variables
   */
  worker?: boolean;
}

export enum GlobalEnum {
  Off = "off",
  Readonly = "readonly",
  Writable = "writable",
}

export interface Override {
  ecmaFeatures?: ECMAFeatures;
  env?: Env;
  /**
   * If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration
   * won't apply
   */
  excludedFiles?: string[] | string;
  /**
   * If you want to extend a specific configuration file, you can use the extends property and
   * specify the path to the file. The path can be either relative or absolute.
   */
  extends?: string[] | string;
  /**
   * Glob pattern for files to apply 'overrides' configuration, relative to the directory of
   * the config file
   */
  files: string[] | string;
  globals?: { [key: string]: boolean | GlobalEnum };
  overrides?: Override[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: string[];
  /**
   * To specify a processor, specify the plugin name and processor name joined by a forward
   * slash
   */
  processor?: string;
  rules?: Rules;
  settings?: { [key: string]: any };
}

/**
 * The JavaScript language options to be supported
 */
export interface ParserOptions {
  ecmaFeatures?: ECMAFeatures;
  /**
   * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to specify the version
   * of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as
   * 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same
   * as 12), 2022 (same as 13) or 2023 (same as 14) to use the year-based naming. "latest"
   * always enables the latest supported ECMAScript version.
   */
  ecmaVersion?: number | ECMAVersionEnum;
  /**
   * set to "script" (default) or "module" if your code is in ECMAScript modules
   */
  sourceType?: SourceType;
}

export enum ECMAVersionEnum {
  Latest = "latest",
}

/**
 * set to "script" (default) or "module" if your code is in ECMAScript modules
 */
export enum SourceType {
  Module = "module",
  Script = "script",
}

/**
 * ESLint comes with a large number of rules. You can modify which rules your project uses
 * either using configuration comments or configuration files.
 */
export interface Rules {
  /**
   * Require or disallow trailing commas
   */
  "comma-dangle"?: any[] | RuleEnum | number;
  /**
   * Enforce "for" loop update clause moving the counter in the right direction
   */
  "for-direction"?: any[] | RuleEnum | number;
  /**
   * Enforce return statements in getters
   */
  "getter-return"?: any[] | RuleEnum | number;
  /**
   * Disallow await inside of loops
   */
  "no-await-in-loop"?: any[] | RuleEnum | number;
  /**
   * Disallow comparing against -0
   */
  "no-compare-neg-zero"?: any[] | RuleEnum | number;
  /**
   * Disallow assignment operators in conditional expressions
   */
  "no-cond-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of console
   */
  "no-console"?: any[] | RuleEnum | number;
  /**
   * Disallow constant expressions in conditions
   */
  "no-constant-condition"?: any[] | RuleEnum | number;
  /**
   * Disallow control characters in regular expressions
   */
  "no-control-regex"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of debugger
   */
  "no-debugger"?: any[] | RuleEnum | number;
  /**
   * Disallow duplicate arguments in function definitions
   */
  "no-dupe-args"?: any[] | RuleEnum | number;
  /**
   * Disallow duplicate keys in object literals
   */
  "no-dupe-keys"?: any[] | RuleEnum | number;
  /**
   * Disallow duplicate case labels
   */
  "no-duplicate-case"?: any[] | RuleEnum | number;
  /**
   * Disallow empty block statements
   */
  "no-empty"?: any[] | RuleEnum | number;
  /**
   * Disallow empty character classes in regular expressions
   */
  "no-empty-character-class"?: any[] | RuleEnum | number;
  /**
   * Disallow reassigning exceptions in catch clauses
   */
  "no-ex-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary boolean casts
   */
  "no-extra-boolean-cast"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary parentheses
   */
  "no-extra-parens"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary semicolons
   */
  "no-extra-semi"?: any[] | RuleEnum | number;
  /**
   * Disallow reassigning function declarations
   */
  "no-func-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow function or var declarations in nested blocks
   */
  "no-inner-declarations"?: any[] | RuleEnum | number;
  /**
   * Disallow invalid regular expression strings in RegExp constructors
   */
  "no-invalid-regexp"?: any[] | RuleEnum | number;
  /**
   * Disallow irregular whitespace outside of strings and comments
   */
  "no-irregular-whitespace"?: any[] | RuleEnum | number;
  /**
   * Disallow negating the left operand in in expressions (deprecated)
   */
  "no-negated-in-lhs"?: any[] | RuleEnum | number;
  /**
   * Disallow calling global object properties as functions
   */
  "no-obj-calls"?: any[] | RuleEnum | number;
  /**
   * Disallow calling some Object.prototype methods directly on objects
   */
  "no-prototype-builtins"?: any[] | RuleEnum | number;
  /**
   * Disallow multiple spaces in regular expressions
   */
  "no-regex-spaces"?: any[] | RuleEnum | number;
  /**
   * Disallow sparse arrays
   */
  "no-sparse-arrays"?: any[] | RuleEnum | number;
  /**
   * Disallow template literal placeholder syntax in regular strings
   */
  "no-template-curly-in-string"?: any[] | RuleEnum | number;
  /**
   * Disallow confusing multiline expressions
   */
  "no-unexpected-multiline"?: any[] | RuleEnum | number;
  /**
   * Disallow unreachable code after return, throw, continue, and break statements
   */
  "no-unreachable"?: any[] | RuleEnum | number;
  /**
   * Disallow control flow statements in finally blocks
   */
  "no-unsafe-finally"?: any[] | RuleEnum | number;
  /**
   * Disallow negating the left operand of relational operators
   */
  "no-unsafe-negation"?: any[] | RuleEnum | number;
  /**
   * Require calls to isNaN() when checking for NaN
   */
  "use-isnan"?: any[] | RuleEnum | number;
  /**
   * Enforce valid JSDoc comments
   */
  "valid-jsdoc"?: any[] | RuleEnum | number;
  /**
   * Enforce comparing typeof expressions against valid strings
   */
  "valid-typeof"?: any[] | RuleEnum | number;
  /**
   * Enforce getter and setter pairs in objects
   */
  "accessor-pairs"?: any[] | RuleEnum | number;
  /**
   * Enforce return statements in callbacks of array methods
   */
  "array-callback-return"?: any[] | RuleEnum | number;
  /**
   * Enforce the use of variables within the scope they are defined
   */
  "block-scoped-var"?: any[] | RuleEnum | number;
  /**
   * Enforce that class methods utilize this
   */
  "class-methods-use-this"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   */
  complexity?: any[] | RuleEnum | number;
  /**
   * Require return statements to either always or never specify values
   */
  "consistent-return"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent brace style for all control statements
   */
  curly?: any[] | RuleEnum | number;
  /**
   * Require default cases in switch statements
   */
  "default-case"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent newlines before and after dots
   */
  "dot-location"?: any[] | RuleEnum | number;
  /**
   * Enforce dot notation whenever possible
   */
  "dot-notation"?: any[] | RuleEnum | number;
  /**
   * Require the use of === and !==
   */
  eqeqeq?: any[] | RuleEnum | number;
  /**
   * Require for-in loops to include an if statement
   */
  "guard-for-in"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of alert, confirm, and prompt
   */
  "no-alert"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of arguments.caller or arguments.callee
   */
  "no-caller"?: any[] | RuleEnum | number;
  /**
   * Disallow lexical declarations in case clauses
   */
  "no-case-declarations"?: any[] | RuleEnum | number;
  /**
   * Disallow division operators explicitly at the beginning of regular expressions
   */
  "no-div-regex"?: any[] | RuleEnum | number;
  /**
   * Disallow else blocks after return statements in if statements
   */
  "no-else-return"?: any[] | RuleEnum | number;
  /**
   * Disallow empty functions
   */
  "no-empty-function"?: any[] | RuleEnum | number;
  /**
   * Disallow empty destructuring patterns
   */
  "no-empty-pattern"?: any[] | RuleEnum | number;
  /**
   * Disallow null comparisons without type-checking operators
   */
  "no-eq-null"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of eval()
   */
  "no-eval"?: any[] | RuleEnum | number;
  /**
   * Disallow extending native types
   */
  "no-extend-native"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary calls to .bind()
   */
  "no-extra-bind"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary labels
   */
  "no-extra-label"?: any[] | RuleEnum | number;
  /**
   * Disallow fallthrough of case statements
   */
  "no-fallthrough"?: any[] | RuleEnum | number;
  /**
   * Disallow leading or trailing decimal points in numeric literals
   */
  "no-floating-decimal"?: any[] | RuleEnum | number;
  /**
   * Disallow assignments to native objects or read-only global variables
   */
  "no-global-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow shorthand type conversions
   */
  "no-implicit-coercion"?: any[] | RuleEnum | number;
  /**
   * Disallow var and named function declarations in the global scope
   */
  "no-implicit-globals"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of eval()-like methods
   */
  "no-implied-eval"?: any[] | RuleEnum | number;
  /**
   * Disallow this keywords outside of classes or class-like objects
   */
  "no-invalid-this"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of the __iterator__ property
   */
  "no-iterator"?: any[] | RuleEnum | number;
  /**
   * Disallow labeled statements
   */
  "no-labels"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary nested blocks
   */
  "no-lone-blocks"?: any[] | RuleEnum | number;
  /**
   * Disallow function declarations and expressions inside loop statements
   */
  "no-loop-func"?: any[] | RuleEnum | number;
  /**
   * Disallow magic numbers
   */
  "no-magic-numbers"?: any[] | RuleEnum | number;
  /**
   * Disallow multiple spaces
   */
  "no-multi-spaces"?: any[] | RuleEnum | number;
  /**
   * Disallow multiline strings
   */
  "no-multi-str"?: any[] | RuleEnum | number;
  "no-native-reassign"?: any[] | RuleEnum | number;
  /**
   * Disallow new operators outside of assignments or comparisons
   */
  "no-new"?: any[] | RuleEnum | number;
  /**
   * Disallow new operators with the Function object
   */
  "no-new-func"?: any[] | RuleEnum | number;
  /**
   * Disallow new operators with the String, Number, and Boolean objects
   */
  "no-new-wrappers"?: any[] | RuleEnum | number;
  /**
   * Disallow octal literals
   */
  "no-octal"?: any[] | RuleEnum | number;
  /**
   * Disallow octal escape sequences in string literals
   */
  "no-octal-escape"?: any[] | RuleEnum | number;
  /**
   * Disallow reassigning function parameters
   */
  "no-param-reassign"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of the __proto__ property
   */
  "no-proto"?: any[] | RuleEnum | number;
  /**
   * Disallow var redeclaration
   */
  "no-redeclare"?: any[] | RuleEnum | number;
  /**
   * Disallow certain properties on certain objects
   */
  "no-restricted-properties"?: any[] | RuleEnum | number;
  /**
   * Disallow assignment operators in return statements
   */
  "no-return-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary return await
   */
  "no-return-await"?: any[] | RuleEnum | number;
  /**
   * Disallow javascript: urls
   */
  "no-script-url"?: any[] | RuleEnum | number;
  /**
   * Disallow assignments where both sides are exactly the same
   */
  "no-self-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow comparisons where both sides are exactly the same
   */
  "no-self-compare"?: any[] | RuleEnum | number;
  /**
   * Disallow comma operators
   */
  "no-sequences"?: any[] | RuleEnum | number;
  /**
   * Disallow throwing literals as exceptions
   */
  "no-throw-literal"?: any[] | RuleEnum | number;
  /**
   * Disallow unmodified loop conditions
   */
  "no-unmodified-loop-condition"?: any[] | RuleEnum | number;
  /**
   * Disallow unused expressions
   */
  "no-unused-expressions"?: any[] | RuleEnum | number;
  /**
   * Disallow unused labels
   */
  "no-unused-labels"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary calls to .call() and .apply()
   */
  "no-useless-call"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary concatenation of literals or template literals
   */
  "no-useless-concat"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary escape characters
   */
  "no-useless-escape"?: any[] | RuleEnum | number;
  /**
   * Disallow redundant return statements
   */
  "no-useless-return"?: any[] | RuleEnum | number;
  /**
   * Disallow void operators
   */
  "no-void"?: any[] | RuleEnum | number;
  /**
   * Disallow specified warning terms in comments
   */
  "no-warning-comments"?: any[] | RuleEnum | number;
  /**
   * Disallow with statements
   */
  "no-with"?: any[] | RuleEnum | number;
  /**
   * Require using Error objects as Promise rejection reasons
   */
  "prefer-promise-reject-errors"?: any[] | RuleEnum | number;
  /**
   * Enforce the consistent use of the radix argument when using parseInt()
   */
  radix?: any[] | RuleEnum | number;
  /**
   * Disallow async functions which have no await expression
   */
  "require-await"?: any[] | RuleEnum | number;
  /**
   * Require var declarations be placed at the top of their containing scope
   */
  "vars-on-top"?: any[] | RuleEnum | number;
  /**
   * Require parentheses around immediate function invocations
   */
  "wrap-iife"?: any[] | RuleEnum | number;
  /**
   * Require or Disallow "Yoda" conditions
   */
  yoda?: any[] | RuleEnum | number;
  /**
   * require or disallow strict mode directives
   */
  strict?: any[] | RuleEnum | number;
  /**
   * Require or disallow initialization in var declarations
   */
  "init-declarations"?: any[] | RuleEnum | number;
  /**
   * Disallow catch clause parameters from shadowing variables in the outer scope
   */
  "no-catch-shadow"?: any[] | RuleEnum | number;
  /**
   * Disallow deleting variables
   */
  "no-delete-var"?: any[] | RuleEnum | number;
  /**
   * Disallow labels that share a name with a variable
   */
  "no-label-var"?: any[] | RuleEnum | number;
  /**
   * Disallow specified global variables
   */
  "no-restricted-globals"?: any[] | RuleEnum | number;
  /**
   * Disallow var declarations from shadowing variables in the outer scope
   */
  "no-shadow"?: any[] | RuleEnum | number;
  /**
   * Disallow identifiers from shadowing restricted names
   */
  "no-shadow-restricted-names"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of undeclared variables unless mentioned in comments
   */
  "no-undef"?: any[] | RuleEnum | number;
  /**
   * Disallow initializing variables to undefined
   */
  "no-undef-init"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of undefined as an identifier
   */
  "no-undefined"?: any[] | RuleEnum | number;
  /**
   * Disallow unused variables
   */
  "no-unused-vars"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of variables before they are defined
   */
  "no-use-before-define"?: any[] | RuleEnum | number;
  /**
   * Require return statements after callbacks
   */
  "callback-return"?: any[] | RuleEnum | number;
  /**
   * Require require() calls to be placed at top-level module scope
   */
  "global-require"?: any[] | RuleEnum | number;
  /**
   * Require error handling in callbacks
   */
  "handle-callback-err"?: any[] | RuleEnum | number;
  /**
   * Disallow use of the Buffer() constructor
   */
  "no-buffer-constructor"?: any[] | RuleEnum | number;
  /**
   * Disallow require calls to be mixed with regular var declarations
   */
  "no-mixed-requires"?: any[] | RuleEnum | number;
  /**
   * Disallow new operators with calls to require
   */
  "no-new-require"?: any[] | RuleEnum | number;
  /**
   * Disallow string concatenation with __dirname and __filename
   */
  "no-path-concat"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of process.env
   */
  "no-process-env"?: any[] | RuleEnum | number;
  /**
   * Disallow the use of process.exit()
   */
  "no-process-exit"?: any[] | RuleEnum | number;
  /**
   * Disallow specified modules when loaded by require
   */
  "no-restricted-modules"?: any[] | RuleEnum | number;
  /**
   * Disallow synchronous methods
   */
  "no-sync"?: any[] | RuleEnum | number;
  /**
   * Enforce line breaks after opening and before closing array brackets
   */
  "array-bracket-newline"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing inside array brackets
   */
  "array-bracket-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce line breaks after each array element
   */
  "array-element-newline"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing inside single-line blocks
   */
  "block-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent brace style for blocks
   */
  "brace-style"?: any[] | RuleEnum | number;
  /**
   * Enforce camelcase naming convention
   */
  camelcase?: any[] | RuleEnum | number;
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   */
  "capitalized-comments"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before and after commas
   */
  "comma-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent comma style
   */
  "comma-style"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing inside computed property brackets
   */
  "computed-property-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent naming when capturing the current execution context
   */
  "consistent-this"?: any[] | RuleEnum | number;
  /**
   * Enforce at least one newline at the end of files
   */
  "eol-last"?: any[] | RuleEnum | number;
  /**
   * Require or disallow spacing between function identifiers and their invocations
   */
  "func-call-spacing"?: any[] | RuleEnum | number;
  /**
   * Require function names to match the name of the variable or property to which they are
   * assigned
   */
  "func-name-matching"?: any[] | RuleEnum | number;
  /**
   * Require or disallow named function expressions
   */
  "func-names"?: any[] | RuleEnum | number;
  /**
   * Enforce the consistent use of either function declarations or expressions
   */
  "func-style"?: any[] | RuleEnum | number;
  /**
   * Enforce line breaks between arguments of a function call
   */
  "function-call-argument-newline"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent line breaks inside function parentheses
   */
  "function-paren-newline"?: any[] | RuleEnum | number;
  /**
   * Disallow specified identifiers
   */
  "id-blacklist"?: any[] | RuleEnum | number;
  /**
   * Enforce minimum and maximum identifier lengths
   */
  "id-length"?: any[] | RuleEnum | number;
  /**
   * Require identifiers to match a specified regular expression
   */
  "id-match"?: any[] | RuleEnum | number;
  /**
   * Enforce the location of arrow function bodies
   */
  "implicit-arrow-linebreak"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent indentation
   */
  indent?: any[] | RuleEnum | number;
  /**
   * Enforce consistent indentation (legacy, deprecated)
   */
  "indent-legacy"?: any[] | RuleEnum | number;
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   */
  "jsx-quotes"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   */
  "key-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before and after keywords
   */
  "keyword-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce position of line comments
   */
  "line-comment-position"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent linebreak style
   */
  "linebreak-style"?: any[] | RuleEnum | number;
  /**
   * Require empty lines around comments
   */
  "lines-around-comment"?: any[] | RuleEnum | number;
  /**
   * Require or disallow newlines around directives
   */
  "lines-around-directive"?: any[] | RuleEnum | number;
  /**
   * Require or disallow an empty line between class members
   */
  "lines-between-class-members"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum depth that blocks can be nested
   */
  "max-depth"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum line length
   */
  "max-len"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum number of lines per file
   */
  "max-lines"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum depth that callbacks can be nested
   */
  "max-nested-callbacks"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum number of parameters in function definitions
   */
  "max-params"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum number of statements allowed in function blocks
   */
  "max-statements"?: any[] | RuleEnum | number;
  /**
   * Enforce a maximum number of statements allowed per line
   */
  "max-statements-per-line"?: any[] | RuleEnum | number;
  /**
   * Enforce a particular style for multiline comments
   */
  "multiline-comment-style"?: any[] | RuleEnum | number;
  /**
   * Enforce newlines between operands of ternary expressions
   */
  "multiline-ternary"?: any[] | RuleEnum | number;
  /**
   * Require constructor function names to begin with a capital letter
   */
  "new-cap"?: any[] | RuleEnum | number;
  /**
   * Require parentheses when invoking a constructor with no arguments
   */
  "new-parens"?: any[] | RuleEnum | number;
  /**
   * Require or disallow an empty line after var declarations
   */
  "newline-after-var"?: any[] | RuleEnum | number;
  /**
   * Require an empty line before return statements
   */
  "newline-before-return"?: any[] | RuleEnum | number;
  /**
   * Require a newline after each call in a method chain
   */
  "newline-per-chained-call"?: any[] | RuleEnum | number;
  /**
   * Disallow Array constructors
   */
  "no-array-constructor"?: any[] | RuleEnum | number;
  /**
   * Disallow bitwise operators
   */
  "no-bitwise"?: any[] | RuleEnum | number;
  /**
   * Disallow continue statements
   */
  "no-continue"?: any[] | RuleEnum | number;
  /**
   * Disallow inline comments after code
   */
  "no-inline-comments"?: any[] | RuleEnum | number;
  /**
   * Disallow if statements as the only statement in else blocks
   */
  "no-lonely-if"?: any[] | RuleEnum | number;
  /**
   * Disallow mixed binary operators
   */
  "no-mixed-operators"?: any[] | RuleEnum | number;
  /**
   * Disallow mixed spaces and tabs for indentation
   */
  "no-mixed-spaces-and-tabs"?: any[] | RuleEnum | number;
  /**
   * Disallow use of chained assignment expressions
   */
  "no-multi-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow multiple empty lines
   */
  "no-multiple-empty-lines"?: any[] | RuleEnum | number;
  /**
   * Disallow negated conditions
   */
  "no-negated-condition"?: any[] | RuleEnum | number;
  /**
   * Disallow nested ternary expressions
   */
  "no-nested-ternary"?: any[] | RuleEnum | number;
  /**
   * Disallow Object constructors
   */
  "no-new-object"?: any[] | RuleEnum | number;
  /**
   * Disallow the unary operators ++ and --
   */
  "no-plusplus"?: any[] | RuleEnum | number;
  /**
   * Disallow specified syntax
   */
  "no-restricted-syntax"?: any[] | RuleEnum | number;
  "no-spaced-func"?: any[] | RuleEnum | number;
  /**
   * Disallow tabs in file
   */
  "no-tabs"?: any[] | RuleEnum | number;
  /**
   * Disallow ternary operators
   */
  "no-ternary"?: any[] | RuleEnum | number;
  /**
   * Disallow trailing whitespace at the end of lines
   */
  "no-trailing-spaces"?: any[] | RuleEnum | number;
  /**
   * Disallow dangling underscores in identifiers
   */
  "no-underscore-dangle"?: any[] | RuleEnum | number;
  /**
   * Disallow ternary operators when simpler alternatives exist
   */
  "no-unneeded-ternary"?: any[] | RuleEnum | number;
  /**
   * Disallow whitespace before properties
   */
  "no-whitespace-before-property"?: any[] | RuleEnum | number;
  /**
   * Enforce the location of single-line statements
   */
  "nonblock-statement-body-position"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent line breaks inside braces
   */
  "object-curly-newline"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing inside braces
   */
  "object-curly-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce placing object properties on separate lines
   */
  "object-property-newline"?: any[] | RuleEnum | number;
  /**
   * Require or disallow method and property shorthand syntax for object literals
   */
  "object-shorthand"?: any[] | RuleEnum | number;
  /**
   * Enforce variables to be declared either together or separately in functions
   */
  "one-var"?: any[] | RuleEnum | number;
  /**
   * Require or disallow newlines around var declarations
   */
  "one-var-declaration-per-line"?: any[] | RuleEnum | number;
  /**
   * Require or disallow assignment operator shorthand where possible
   */
  "operator-assignment"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent linebreak style for operators
   */
  "operator-linebreak"?: any[] | RuleEnum | number;
  /**
   * Require or disallow padding within blocks
   */
  "padded-blocks"?: any[] | RuleEnum | number;
  /**
   * Require or disallow padding lines between statements
   */
  "padding-line-between-statements"?: any[] | RuleEnum | number;
  /**
   * Require quotes around object literal property names
   */
  "quote-props"?: any[] | RuleEnum | number;
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   */
  quotes?: any[] | RuleEnum | number;
  /**
   * Require JSDoc comments
   */
  "require-jsdoc"?: any[] | RuleEnum | number;
  /**
   * Require or disallow semicolons instead of ASI
   */
  semi?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before and after semicolons
   */
  "semi-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce location of semicolons
   */
  "semi-style"?: any[] | RuleEnum | number;
  /**
   * Requires object keys to be sorted
   */
  "sort-keys"?: any[] | RuleEnum | number;
  /**
   * Require variables within the same declaration block to be sorted
   */
  "sort-vars"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before blocks
   */
  "space-before-blocks"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before function definition opening parenthesis
   */
  "space-before-function-paren"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing inside parentheses
   */
  "space-in-parens"?: any[] | RuleEnum | number;
  /**
   * Require spacing around operators
   */
  "space-infix-ops"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before or after unary operators
   */
  "space-unary-ops"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing after the // or /* in a comment
   */
  "spaced-comment"?: any[] | RuleEnum | number;
  /**
   * Enforce spacing around colons of switch statements
   */
  "switch-colon-spacing"?: any[] | RuleEnum | number;
  /**
   * Require or disallow spacing between template tags and their literals
   */
  "template-tag-spacing"?: any[] | RuleEnum | number;
  /**
   * Require or disallow Unicode byte order mark (BOM)
   */
  "unicode-bom"?: any[] | RuleEnum | number;
  /**
   * Require parenthesis around regex literals
   */
  "wrap-regex"?: any[] | RuleEnum | number;
  /**
   * Require braces around arrow function bodies
   */
  "arrow-body-style"?: any[] | RuleEnum | number;
  /**
   * Require parentheses around arrow function arguments
   */
  "arrow-parens"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   */
  "arrow-spacing"?: any[] | RuleEnum | number;
  /**
   * Require super() calls in constructors
   */
  "constructor-super"?: any[] | RuleEnum | number;
  /**
   * Enforce consistent spacing around * operators in generator functions
   */
  "generator-star-spacing"?: any[] | RuleEnum | number;
  /**
   * Disallow reassigning class members
   */
  "no-class-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow arrow functions where they could be confused with comparisons
   */
  "no-confusing-arrow"?: any[] | RuleEnum | number;
  /**
   * Disallow reassigning const variables
   */
  "no-const-assign"?: any[] | RuleEnum | number;
  /**
   * Disallow duplicate class members
   */
  "no-dupe-class-members"?: any[] | RuleEnum | number;
  /**
   * Disallow duplicate module imports
   */
  "no-duplicate-imports"?: any[] | RuleEnum | number;
  /**
   * Disallow new operators with the Symbol object
   */
  "no-new-symbol"?: any[] | RuleEnum | number;
  /**
   * Disallow specified modules when loaded by import
   */
  "no-restricted-imports"?: any[] | RuleEnum | number;
  /**
   * Disallow this/super before calling super() in constructors
   */
  "no-this-before-super"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary computed property keys in object literals
   */
  "no-useless-computed-key"?: any[] | RuleEnum | number;
  /**
   * Disallow unnecessary constructors
   */
  "no-useless-constructor"?: any[] | RuleEnum | number;
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   */
  "no-useless-rename"?: any[] | RuleEnum | number;
  /**
   * Require let or const instead of var
   */
  "no-var"?: any[] | RuleEnum | number;
  /**
   * Require arrow functions as callbacks
   */
  "prefer-arrow-callback"?: any[] | RuleEnum | number;
  /**
   * Require const declarations for variables that are never reassigned after declared
   */
  "prefer-const"?: any[] | RuleEnum | number;
  /**
   * Require destructuring from arrays and/or objects
   */
  "prefer-destructuring"?: any[] | RuleEnum | number;
  /**
   * Disallow parseInt() in favor of binary, octal, and hexadecimal literals
   */
  "prefer-numeric-literals"?: any[] | RuleEnum | number;
  /**
   * Require Reflect methods where applicable
   */
  "prefer-reflect"?: any[] | RuleEnum | number;
  /**
   * Require rest parameters instead of arguments
   */
  "prefer-rest-params"?: any[] | RuleEnum | number;
  /**
   * Require spread operators instead of .apply()
   */
  "prefer-spread"?: any[] | RuleEnum | number;
  /**
   * Require template literals instead of string concatenation
   */
  "prefer-template"?: any[] | RuleEnum | number;
  /**
   * Require generator functions to contain yield
   */
  "require-yield"?: any[] | RuleEnum | number;
  /**
   * Enforce spacing between rest and spread operators and their expressions
   */
  "rest-spread-spacing"?: any[] | RuleEnum | number;
  /**
   * Enforce sorted import declarations within modules
   */
  "sort-imports"?: any[] | RuleEnum | number;
  /**
   * Require symbol descriptions
   */
  "symbol-description"?: any[] | RuleEnum | number;
  /**
   * Require or disallow spacing around embedded expressions of template strings
   */
  "template-curly-spacing"?: any[] | RuleEnum | number;
  /**
   * Require or disallow spacing around the * in yield* expressions
   */
  "yield-star-spacing"?: any[] | RuleEnum | number;
}

/**
 * ESLint rule
 *
 * "off" - turns the rule off
 * "warn" - turn the rule on as a warning (doesn't affect exit code)
 * "error" - turn the rule on as an error (exit code is 1 when triggered)
 */
export enum RuleEnum {
  Error = "error",
  Off = "off",
  Warn = "warn",
}
