# tern-jquery-extension

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-browser-extension.png)](http://travis-ci.org/angelozerr/tern-jquery-extension)
[![NPM version](https://img.shields.io/npm/v/tern-jquery-extension.svg)](https://www.npmjs.org/package/tern-jquery-extension) 

Based on https://github.com/angelozerr/tern-browser-extension to support compeltion, validation for CSS selectors inside $() 

Install tern-jquery-extension with npm like this :

```
$ npm install tern-jquery-extension
``` 

.tern-project should looks like this:

```json
{
  "ecmaVersion": 5,
  "libs": ["browser", "jquery"],
  "plugins": {
    "lint": {},
    "browser-extension": {},
    "jquery-extension": {}
  }
}