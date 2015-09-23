exports['test HTML CSS Selectors completions'] = require('./selector/completions')
exports['test HTML CSS Selectors definition'] = require('./selector/definition')
exports['test HTML CSS Selectors validation'] = require('./selector/lint')

if (require.main === module) require('test').run(exports)
