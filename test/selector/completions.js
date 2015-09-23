'use strict'

var util = require('../util')

exports['test querySelector completion'] = function () {
  util.assertCompletion("<html><input id='MyInput' /><script>$(''",
    {'name': "'#MyInput'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    , "'#MyInput'", 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('#'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 41},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'#MyInput'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    ]
  }, null, 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('M'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 41},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'#MyInput'",'type': 'Attr','origin': 'test1.html','displayName': '#MyInput'},
      {'name': "'map'",'type': 'HTMLMapElement','origin': 'test1.html','displayName': 'map'},
      {'name': "'mark'",'type': 'HTMLMarkElement','origin': 'test1.html','displayName': 'mark'},
      {'name': "'menu'",'type': 'HTMLMenuElement','origin': 'test1.html','displayName': 'menu'},
      {'name': "'meta'",'type': 'HTMLMetaElement','origin': 'test1.html','displayName': 'meta'},
      {'name': "'meter'",'type': 'HTMLMeterElement','origin': 'test1.html','displayName': 'meter'}
    ]
  }, null, 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('X'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 41},
    'isProperty': false,
    'isObjectKey': false,
    'completions': []
  }, null, 1)

}

exports['test querySelector completion with before content'] = function () {
  util.assertCompletion("<html><input id='MyInput' /><script>$('div '",
    {'name': "'div #MyInput'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    , "'div #MyInput'", 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div #'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'div #MyInput'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    ]
  }, null, 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div M'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'div #MyInput'",'type': 'Attr','origin': 'test1.html','displayName': '#MyInput'},
      {'name': "'div map'",'type': 'HTMLMapElement','origin': 'test1.html','displayName': 'map'},
      {'name': "'div mark'",'type': 'HTMLMarkElement','origin': 'test1.html','displayName': 'mark'},
      {'name': "'div menu'",'type': 'HTMLMenuElement','origin': 'test1.html','displayName': 'menu'},
      {'name': "'div meta'",'type': 'HTMLMetaElement','origin': 'test1.html','displayName': 'meta'},
      {'name': "'div meter'",'type': 'HTMLMeterElement','origin': 'test1.html','displayName': 'meter'}
    ]
  }, null, 1)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div X'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': []
  }, null, 1)

}

exports['test querySelector completion with after content'] = function () {
  util.assertCompletion("<html><input id='MyInput' /><script>$(' div'",
    {'name': "'#MyInput div'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    , "'#MyInput div'", 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('# div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'#MyInput div'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    ]
  }, null, 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('M div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'#MyInput div'",'type': 'Attr','origin': 'test1.html','displayName': '#MyInput'},
      {'name': "'map div'",'type': 'HTMLMapElement','origin': 'test1.html','displayName': 'map'},
      {'name': "'mark div'",'type': 'HTMLMarkElement','origin': 'test1.html','displayName': 'mark'},
      {'name': "'menu div'",'type': 'HTMLMenuElement','origin': 'test1.html','displayName': 'menu'},
      {'name': "'meta div'",'type': 'HTMLMetaElement','origin': 'test1.html','displayName': 'meta'},
      {'name': "'meter div'",'type': 'HTMLMeterElement','origin': 'test1.html','displayName': 'meter'}
    ]
  }, null, 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('X div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 45},
    'isProperty': false,
    'isObjectKey': false,
    'completions': []
  }, null, 5)

}

exports['test querySelector completion with before+after content'] = function () {
  util.assertCompletion("<html><input id='MyInput' /><script>$('div  div'",
    {'name': "'div #MyInput div'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    , "'div #MyInput div'", 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div # div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 49},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'div #MyInput div'",'type': 'Attr', 'origin': 'test1.html', 'displayName': '#MyInput'}
    ]
  }, null, 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div M div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 49},
    'isProperty': false,
    'isObjectKey': false,
    'completions': [{'name': "'div #MyInput div'",'type': 'Attr','origin': 'test1.html','displayName': '#MyInput'},
      {'name': "'div map div'",'type': 'HTMLMapElement','origin': 'test1.html','displayName': 'map'},
      {'name': "'div mark div'",'type': 'HTMLMarkElement','origin': 'test1.html','displayName': 'mark'},
      {'name': "'div menu div'",'type': 'HTMLMenuElement','origin': 'test1.html','displayName': 'menu'},
      {'name': "'div meta div'",'type': 'HTMLMetaElement','origin': 'test1.html','displayName': 'meta'},
      {'name': "'div meter div'",'type': 'HTMLMeterElement','origin': 'test1.html','displayName': 'meter'}
    ]
  }, null, 5)

  util.assertCompletion("<html><input id='MyInput' /><script>$('div X div'", {
    'start': {'line': 0,'ch': 38},
    'end': {'line': 0,'ch': 49},
    'isProperty': false,
    'isObjectKey': false,
    'completions': []
  }, null, 5)

}

if (module == require.main) require('test').run(exports)
