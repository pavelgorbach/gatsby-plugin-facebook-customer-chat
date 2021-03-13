'use strict';

var _templateObject = _taggedTemplateLiteral(['\n          fbAsyncInit = function() {\n            FB.init(', ');\n          };\n\n          (function(d, s, id, options){\n            var js, fjs = d.getElementsByTagName(s)[0];\n            if (d.getElementById(id)) {return;}\n            js = d.createElement(s); js.id = id;\n            var locale = options.chat.lang || \'us_US\'\n            js.src = "https://connect.facebook.net/" + locale + "/sdk/xfbml.customerchat.js";\n            fjs.parentNode.insertBefore(js, fjs);\n          }(document, \'script\', \'facebook-jssdk\', pluginOptions);\n        '], ['\n          fbAsyncInit = function() {\n            FB.init(', ');\n          };\n\n          (function(d, s, id, options){\n            var js, fjs = d.getElementsByTagName(s)[0];\n            if (d.getElementById(id)) {return;}\n            js = d.createElement(s); js.id = id;\n            var locale = options.chat.lang || \'us_US\'\n            js.src = "https://connect.facebook.net/" + locale + "/sdk/xfbml.customerchat.js";\n            fjs.parentNode.insertBefore(js, fjs);\n          }(document, \'script\', \'facebook-jssdk\', pluginOptions);\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonTags = require('common-tags');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//pluginOptions.chat.lang ? pluginOptions.chat.lang : 'us_US'

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPreBodyComponents = _ref.setPreBodyComponents;

  return setPreBodyComponents([_react2.default.createElement('script', {
    key: 'gatsby-plugin-facebook-customer-chat',
    dangerouslySetInnerHTML: {
      __html: (0, _commonTags.stripIndent)(_templateObject, JSON.stringify(pluginOptions.sdk)) }
  }), _react2.default.createElement('div', {
    key: 'fb-customer-chat',
    className: 'fb-customerchat',
    attribution: 'setup_tool',
    page_id: pluginOptions.chat.pageId,
    logged_in_greeting: pluginOptions.chat.loggedInGreeting ? pluginOptions.chat.loggedInGreeting : 'Hi! How can I help you?',
    logged_out_greeting: pluginOptions.chat.loggedOutGreeting ? pluginOptions.chat.loggedOutGreeting : 'Hi! How can I help you?'
  })]);
};