(function() {
  const path = window.parent.location.href;
  function a(x) {
    window.parent.postMessage(
      {
        console: true,
        message: x
      },
      path
    );
  }
  function parentLog(type, arg) {
    const _console = window.parent.console;
    const _methods = {
      log: window.parent.console.log,
      warn: window.parent.console.warn,
      dir: window.parent.console.dir,
      info: window.parent.console.info,
      error: window.parent.console.error
    };
    _methods[type].call(_console, ...arg);
  }
  const _console = window.console;
  const _methods = {
    log: window.console.log,
    error: window.console.error,
    info: window.console.info,
    warn: window.console.warn,
    clear: window.console.clear,
    dir: window.console.dir
  };
  function clear() {
    window.parent.postMessage(
      {
        clear: true
      },
      path
    );
    _methods.clear.call(_console);
  }
  function stringify(o) {
    let arr = [];

    const value =
      typeof o == "number" ||
      typeof o == "string" ||
      typeof o == "boolean" ||
      typeof o == "undefined";
    try {
      if (value) {
        return o;
      } else if (typeof o == "object") {
        if ((o != null || o != undefined) && o.outerHTML) {
          const h = `[object ${o.constructor.name}]\n\t${o.outerHTML};`;
          return h;
        } else if (o == null) {
          return null;
        } else if (o.constructor.name.match(/Event+/gi)) {
          let event;
          if (o.constructor.name === "KeyboardEvent") {
            event = `${{}.toString.call(o)} \n{\n\t'type' => ${
              o.type
            }, \n\t'isTrusted' => ${o.isTrusted}, \n\t'key' => ${
              o.key
            }, \n\t'code' => ${o.code}, \n\t'keyCode' => ${
              o.keyCode
            },  \n\t'shiftKey' => ${o.shiftKey}, \n\t'ctrlKey' => ${
              o.ctrlKey
            }, \n\t'altKey' => ${o.altKey}, \n\t'which' => ${o.which}\n}`;
            //return event;
          } else if (o.constructor.name == "MouseEvent") {
            event = `${{}.toString.call(o)} \n{\n\t'type' => ${
              o.type
            }, \n\t'isTrusted' => ${o.isTrusted}, \n\t'screenX' => ${
              o.screenX
            }, \n\t'screenY' => ${o.screenY}, \n\t'clientX' => ${
              o.clientX
            }, \n\t'clientY' => ${o.clientY}, \n\t'pageX' => ${
              o.pageX
            }, \n\t'pageY' => ${o.pageY}, \n\t'offsetX' => ${
              o.offsetX
            }, \n\t'offsetY' => ${o.offsetY}, \n\t'x' => ${o.x}, \n\t'y' => ${
              o.y
            }\n}`;
          } else {
            event = `${{}.toString.call(0)} type => ${o.type}, isTrusted => ${
              o.isTrusted
            }`;
          }
          return event;
        } else {
          try {
            if (o.constructor.name === "Array") {
              for (let i in o) {
                arr.push(stringify(o[i]));
              }
              return "[" + arr.join(", ") + "]";
            } else {
              const m =
                JSON.stringify(o) !== "{}" ? JSON.stringify(o) : o.toString();
              return m;
            }
          } catch (e) {
            return o.toString();
          }
        }
      } else if (typeof o == "function") {
        return o.toString();
      } else {
        return Array.prototype.slice.call(o);
      }
    } catch (e) {
      return null;
    }
  }
  function print(key) {
    return function() {
      Function.prototype.call(_methods[key], _console, arguments);
      parentLog(key, arguments);
      if (arguments.length > 1) {
        for (let i in arguments) {
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

  window.addEventListener("error", function(e) {
    window.parent.postMessage(
      {
        error: true,
        message: e.message,
        lineno: e.lineno,
        colno: e.colno
      },
      path
    );
  });
})();
