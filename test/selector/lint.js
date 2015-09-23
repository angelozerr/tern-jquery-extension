var util = require('../util-lint')

exports['test querySelector syntax validation'] = function () {
  // CSS Selector => OK
  util.assertLint("<html><input id='MyInput' /><script>$('div a');</script>", {
    'messages': []
  }, ['browser', 'jquery'])

  // syntax error for CSS selector
  util.assertLint("<html><input id='MyInput' /><script>$('> div a');</script>", {
    'messages': [{'message': "Invalid CSS selectors '> div a': Unexpected token '>' at line 1, col 1.",
      'from': 38,
      'to': 39,
      'severity': 'error',
    'file': 'test1.html'}]
  }, ['browser', 'jquery'])

}

exports['test querySelector #ID exist validation'] = function () {
  // Unknown XXXX element id
  util.assertLint("<html><input id='MyInput' /><script>$('#XXXX');</script>", {
    messages: [{'message': "Unknown element id '#XXXX'",
      'from': 39,
      'to': 44,
      'severity': 'warning',
    'file': 'test1.html'}]
  }, ['browser', 'jquery'])

  // known element id
  util.assertLint("<html><input id='MyInput' /><script>$('#MyInput');</script>", {
    messages: []
  }, ['browser', 'jquery'])

}

if (module == require.main) require('test').run(exports)
