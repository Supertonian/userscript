// ==UserScript==
// @namespace     https://github.com/zerostrength
// @exclude       *

// ==UserLibrary==
// @name          App
// @description   App 스크립트
// @copyright     2022, zerostrength (https://github.com/zerostrength)
// @license       Apache-2.0
// @version       1.0.0

// ==/UserScript==

// ==/UserLibrary==

// ==OpenUserJS==
// @author zerostrength
// ==/OpenUserJS==
(function(window) {
    window.App = function(callback, preload) {
      function _requestIdleCallback(callback) {
          if(typeof requestIdleCallback == 'undefined') return setTimeout(callback, 1000);
          return requestIdleCallback(callback);
      }
      function checkForDOM() {
        let container = document.body;
        if(preload == 1) container = document.head;
        if(preload == 2) container = document.documentElement;
        return container ? callback() : _requestIdleCallback(checkForDOM);
      }
      _requestIdleCallback(checkForDOM);
    }
  })(window);