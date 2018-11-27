/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nwindow.addEventListener(\"load\", function(){\r\n\r\n \r\n  var txtbtn = document.querySelector(\"#textbutton\");\r\n   \r\n  let counter = 0;\r\n  txtbtn.addEventListener(\"click\", function creatediv()  {\r\n   \r\n    document.getElementById('formattingbar').style.display = \"block\";\r\n\r\n    var input =  document.getElementById('richTextArea');\r\n    var newdiv = document.createElement(\"div\");\r\n    newdiv.id = \"mydiv\" + counter;\r\n    newdiv.style.backgroundColor = \"Antiquewhite\";\r\n    newdiv.style.textAlign =  \"center\";\r\n    newdiv.style.position = \"absolute\";\r\n    newdiv.contentEditable = \"true\";\r\n    newdiv.style.zIndex = \"9\";\r\n    newdiv.className = \"resizable\";\r\n\r\n    var lastdiv = document.createElement(\"div\");\r\n    lastdiv.setAttribute(\"id\", \"mydivheader\" + counter);\r\nlastdiv.contentEditable = \"true\";\r\nlastdiv.style.zIndex = \"10\";\r\nlastdiv.style.padding = \"0px\";\r\nlastdiv.style.cursor =  \"move\";\r\nlastdiv.style.backgroundColor =  \"Antiquewhite\";\r\nlastdiv.style.color = \"black\";\r\nlastdiv.className = \"resizers\";\r\nlastdiv.style.overflow = \"hidden\";\r\n\r\nvar resizetl = document.createElement(\"div\"); //handletl\r\nresizetl.setAttribute(\"class\", \"resizer top-left\"  );\r\nresizetl.contentEditable = \"false\";\r\n\r\nvar resizetr = document.createElement(\"div\");\r\nresizetr.setAttribute(\"class\", \"resizer top-right\" );\r\nresizetr.contentEditable = \"false\";\r\n\r\nvar resizebl = document.createElement(\"div\");\r\nresizebl.setAttribute(\"class\", \"resizer bottom-left\"  );\r\nresizebl.contentEditable = \"false\";\r\n\r\nvar resizebr = document.createElement(\"div\");\r\nresizebr.setAttribute(\"class\", \"resizer bottom-right\" );\r\nresizebr.contentEditable = \"false\";\r\n\r\nlastdiv.appendChild(resizetl);\r\nlastdiv.appendChild(resizetr);\r\nlastdiv.appendChild(resizebl);\r\nlastdiv.appendChild(resizebr);\r\nnewdiv.appendChild(lastdiv);\r\ninput.appendChild(newdiv);\r\n    \r\n\r\n const element = document.getElementById(\"mydiv\" + counter);  \r\n const resizers = document.querySelectorAll( \".resizer\");\r\n    let original_width = 0;\r\n    let original_height = 0;\r\n    let original_x = 0;\r\n    let original_y = 0;\r\n    let original_mouse_x = 0;\r\n    let original_mouse_y = 0;\r\n    for (let i = 0 ;i < resizers.length; i++) {\r\n      const currentResizer = resizers[i];\r\n      currentResizer.addEventListener('mousedown', function(e) {\r\n       \r\n        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));\r\n        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));\r\n        original_x = element.getBoundingClientRect().left;\r\n        original_y = element.getBoundingClientRect().top;\r\n        original_mouse_x = e.pageX;\r\n        original_mouse_y = e.pageY;\r\n        window.addEventListener('mousemove', resize)\r\n        window.addEventListener('mouseup', stopResize)\r\n      })\r\n      \r\n      function resize(e) {\r\n        if (currentResizer.classList.contains('bottom-right')) {\r\n          element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'\r\n          element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'\r\n        }\r\n        else if (currentResizer.classList.contains('bottom-left')) {\r\n          element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'\r\n          element.style.height = original_height + (e.pageY - original_mouse_y)  + 'px'\r\n          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'\r\n        }\r\n        else if (currentResizer.classList.contains('top-right')) {\r\n          element.style.width = original_width + (e.pageX - original_mouse_x)  + 'px'\r\n          element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'\r\n          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'\r\n        }\r\n        else {\r\n          element.style.width = original_width - (e.pageX - original_mouse_x)  + 'px'\r\n          element.style.height = original_height - (e.pageY - original_mouse_y)  + 'px'\r\n          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'\r\n          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'\r\n        }\r\n      }\r\n      function stopResize() {\r\n        window.removeEventListener('mousemove', resize)\r\n      }\r\n    }\r\n  \r\n    var offset = [0,0];\r\n    var divOverlay = document.getElementById (\"mydiv\" + counter);\r\n    var isDown = false;\r\n    divOverlay.addEventListener('mousedown', function(e) {\r\n        isDown = true;\r\n        offset = [\r\n            divOverlay.offsetLeft - e.clientX,\r\n            divOverlay.offsetTop - e.clientY\r\n        ];\r\n    }, true);\r\n    document.addEventListener('mouseup', function() {\r\n        isDown = false;\r\n    }, true);\r\n    \r\n    document.addEventListener('mousemove', function(e) {\r\n        event.preventDefault();\r\n        if (isDown) {\r\n            divOverlay.style.left = (e.clientX + offset[0]) + 'px';\r\n            divOverlay.style.top  = (e.clientY + offset[1]) + 'px';\r\n        }\r\n    }, true);\r\n    \r\n      // x.setAttribute(\"src\", \"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg\");\r\n       \r\n      var inputdiv  =  document.getElementById(\"mydivheader\" + counter);\r\n      document.getElementById(\"fileuploader\").addEventListener(\"change\",  function(event) { \r\n    var createimg = document.createElement(\"img\");\r\n    createimg.id = \"output\";\r\n            var reader = new FileReader();\r\n            reader.onload = function(){\r\n              \r\n              createimg.src = reader.result;\r\n            };\r\n            reader.readAsDataURL(event.target.files[0]);\r\n      inputdiv.append(createimg);\r\n    \r\n    });\r\n    document.getElementById('richTextArea').style.display = \"block\";\r\n    counter++;\r\n});\r\n document.querySelector(\"#boldbutton\").addEventListener(\"click\", function() {\r\n    document.execCommand ('bold');\r\n  });\r\n  document.querySelector(\"#italicButton\").addEventListener(\"click\", function() {\r\n    document.execCommand(\"Italic\");\r\n    },false);\r\n\r\n    document.querySelector(\"#underlineButton\")\r\n    underlineButton.addEventListener(\"click\", function() {\r\n        document.execCommand(\"Underline\");\r\n        },false);\r\n        \r\n        document.querySelector(\"#fontChanger\").addEventListener(\"click\", function(event){\r\ndocument.execCommand(\"FontName\", false, event.target.value);\r\n},false);\r\n\r\ndocument.querySelector(\"#fontsizeChanger\").addEventListener(\"click\", function(event){\r\ndocument.execCommand(\"FontSize\", false, event.target.value);\r\n},false);\r\n\r\ndocument.querySelector(\"#strikeButton\").addEventListener(\"click\", function(event){\r\n  document.execCommand(\"Strikethrough\", false, event.target.value);\r\n  },false);\r\n\r\n  document.querySelector(\"#undoButton\").addEventListener(\"click\", function(event){\r\n    document.execCommand(\"undo\", false, event.target.value);\r\n    },false);\r\n\r\n    document.querySelector(\"#redoButton\").addEventListener(\"click\", function(event){\r\n      document.execCommand(\"redo\", false, event.target.value);\r\n      },false);\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });