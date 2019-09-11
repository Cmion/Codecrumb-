"use strict";

function _typeof8(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof8 = function _typeof8(obj) { return typeof obj; }; } else { _typeof8 = function _typeof8(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof8(obj); }

function _typeof7(obj) {
  if (typeof Symbol === "function" && _typeof8(Symbol.iterator) === "symbol") {
    _typeof7 = function _typeof7(obj) {
      return _typeof8(obj);
    };
  } else {
    _typeof7 = function _typeof7(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof8(obj);
    };
  }

  return _typeof7(obj);
}

function _typeof6(obj) {
  if (typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol") {
    _typeof6 = function _typeof6(obj) {
      return _typeof7(obj);
    };
  } else {
    _typeof6 = function _typeof6(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof7(obj);
    };
  }

  return _typeof6(obj);
}

function _typeof5(obj) {
  if (typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol") {
    _typeof5 = function _typeof5(obj) {
      return _typeof6(obj);
    };
  } else {
    _typeof5 = function _typeof5(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof6(obj);
    };
  }

  return _typeof5(obj);
}

function _typeof4(obj) {
  if (typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol") {
    _typeof4 = function _typeof4(obj) {
      return _typeof5(obj);
    };
  } else {
    _typeof4 = function _typeof4(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof5(obj);
    };
  }

  return _typeof4(obj);
}

function _typeof3(obj) {
  if (typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol") {
    _typeof3 = function _typeof3(obj) {
      return _typeof4(obj);
    };
  } else {
    _typeof3 = function _typeof3(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof4(obj);
    };
  }

  return _typeof3(obj);
}

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

(function () {
  var path = window.parent.location.href;

  function a(x) {
    window.parent.postMessage({
      console: true,
      message: x
    }, path);
  }

  function parentLog(type, arg) {
    var _methods$type;

    var _console = window.parent.console;
    var _methods = {
      log: window.parent.console.log,
      warn: window.parent.console.warn,
      dir: window.parent.console.dir,
      info: window.parent.console.info,
      error: window.parent.console.error
    };

    (_methods$type = _methods[type]).call.apply(_methods$type, [_console].concat(_toConsumableArray(arg)));
  }

  var _console = window.console;
  var _methods = {
    log: window.console.log,
    error: window.console.error,
    info: window.console.info,
    warn: window.console.warn,
    clear: window.console.clear,
    dir: window.console.dir
  };

  function clear() {
    window.parent.postMessage({
      clear: true
    }, path);

    _methods.clear.call(_console);
  }

  function stringify(o, buffer) {
    var arr = [];
    buffer = buffer || "";
    var type = "";

    try {
      type = Object.prototype.toString.call(o);
    } catch (e) {
      type = "[object Object]";
    }

    var typeString = type.split(" ")[1].split("]")[0];

    if (type === "[object String]") {
      var str = o.split("\n");

      if (str.length > 200) {
        return "# Your log is too long for these console, please use the browser console instead.";
      } else {
        return '"'.concat(str.join("\n"), '"');
      }
    }

    if (o === null) {
      return "null";
    }

    if (o === undefined) {
      return "undefined";
    }

    if (type === "[object Boolean]") {
      return o ? "true" : "false";
    }

    if (type === "[object Number]") {
      return "" + o;
    }

    if (type === "[object Date]") {
      return '"'.concat(o.toString(), '"');
    }

    if (type === "[object Array]") {
      for (var i in o) {
        arr.push(stringify(o[i]));
      }

      return "[" + arr.join(", ") + "]";
    }

    if (type.match(/Array/)) {
      return type;
    }

    if (type === "[object Function]") {
      var tot = o.toString();

      if (tot.split("\n").length > 100) {
        return "# Your log is too long for these console, please use the browser console instead.";
      } else {
        return tot;
      }
    }

    if (type === "[object Null]") {
      return "null";
    }

    if (_typeof(o) === "object" && (o !== null || o !== undefined) && o.outerHTML) {
      var _tot = "".concat(typeString, "{\n").concat(String(o.outerHTML), "\n}");

      return _tot.split("\n").length > 50 ? "# Your log is too long for these console, please use the browser console instead." : _tot;
    } // allows object to go four level deep


    var newBuffer = buffer + "    ";

    if (type.match(/Event+/gi)) {
      var x = [],
          y = [];

      try {
        for (var _i in o) {
          x.push(_i);
        }
      } catch (e) {}

      for (var j = 0; j < 24; j++) {
        y.push(newBuffer + x[j] + ": " + stringify(o[x[j]], newBuffer));
      }

      if (!y.length) return "".concat(typeString, " {...}");
      return "".concat(typeString, " {\n").concat(y.join(",\n"), "\n}");
    }

    if (buffer.length / 4 < 4) {
      var _x = [],
          _y = [];

      try {
        for (var _i2 in o) {
          _x.push(_i2);
        }
      } catch (e) {}

      for (var _j = 0; _j < _x.length; _j++) {
        _y.push(newBuffer + _x[_j] + ": " + stringify(o[_x[_j]], newBuffer));
      }

      if (!_y.length) return "".concat(typeString, " {...}");

      var _tot2 = "".concat(typeString, " {\n").concat(_y.join(",\n"), "\n}");

      if (_tot2.split("\n").length > 50) {
        return "Your log is too long for these console, please use the browser console instead.";
      } else {
        return _tot2;
      }
    }
  }

  function print(key) {
    return function () {
      Function.prototype.call(_methods[key], _console, arguments);
      parentLog(key, arguments);
      console.a;

      if (arguments.length > 1) {
        for (var i in arguments) {
          a(stringify(arguments[i]));
        }
      } else {
        a(stringify(arguments[0]));
      }
    };
  }

  window.console.log = print("log");
  window.console.error = print("error");
  window.console.warn = print("warn");
  window.console.info = print("info");
  window.console.clear = clear;
  window.console.dir = print("dir");
  window.addEventListener("error", function (e) {
    window.parent.postMessage({
      error: true,
      message: e.message,
      lineno: e.lineno,
      colno: e.colno
    }, path);
  });
})();