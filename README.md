# eslint-plugin-wix-detox

This plugin is for users of Wix&#39;s Detox, a graybox end-to-end testing and automation framework for React Native apps.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-wix-detox`:

```sh
npm install eslint-plugin-wix-detox --save-dev
```

## Usage

Add `wix-detox` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wix-detox"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wix-detox/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


