"use strict";

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

var _React = React,
  Component = _React.Component,
  useState = _React.useState,
  createContext = _React.createContext,
  useEffect = _React.useEffect,
  Fragment = _React.Fragment,
  useContext = _React.useContext;

var logo = "http://127.0.0.1:8080/asset/logo.svg";
var apiLink = "http://127.0.0.1:8080/asset/state_capitals.json";
var StatesContext = createContext();

var StatesContextProvider = function StatesContextProvider(props) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    states = _useState2[0],
    setStates = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    find = _useState4[0],
    setFind = _useState4[1];

  var getStates = (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var response, data;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return fetch(apiLink);

                case 2:
                  response = _context.sent;
                  _context.next = 5;
                  return response.json();

                case 5:
                  data = _context.sent;

                  setStates(data);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined
        );
      })
    );

    return function getStates() {
      return _ref.apply(this, arguments);
    };
  })();

  var getFind = function getFind(result) {
    setFind(result);
  };
  useEffect(function() {
    getStates();
  }, []);

  return React.createElement(
    StatesContext.Provider,
    { value: { states: states, find: find, getFind: getFind } },
    props.children
  );
};

var AppHeader = function AppHeader() {
  return React.createElement(
    Fragment,
    null,
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      })
    ),
    React.createElement(
      "h3",
      { className: "App-link" },
      React.createElement("span", null, "React"),
      " US State/Capital Lookup ",
      React.createElement("span", null, "App"),
      "."
    )
  );
};

var AutoComplete = function AutoComplete() {
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    autocomplete = _useState6[0],
    getCompletion = _useState6[1];

  var _useContext = useContext(StatesContext),
    states = _useContext.states,
    getFind = _useContext.getFind;

  var matchStates = function matchStates(value) {
    var found = states.filter(function(data) {
      var regex = new RegExp("^" + value, "gi");
      return data.abbr.match(regex) || data.name.match(regex);
    });
    if (value == "") {
      getFind([]);
    } else {
      getFind(found);
    }
  };
  var handleCompletion = function handleCompletion(e) {
    getCompletion(e.target.value);
    matchStates(e.target.value);
  };

  return React.createElement(
    "div",
    { className: "AutoComplete" },
    React.createElement("input", {
      type: "text",
      value: autocomplete,
      className: "input",
      onChange: handleCompletion,
      autoFocus: true,
      spellCheck: false
    })
  );
};

var AutoCompleteResult = function AutoCompleteResult() {
  var _useContext2 = useContext(StatesContext),
    find = _useContext2.find;

  var states =
    find.length > 0
      ? find.map(function(state) {
          return React.createElement(
            "li",
            { className: "Result-card", key: state.name },
            React.createElement("span", { className: "abbr" }, state.abbr),
            ", ",
            state.name,
            " ",
            React.createElement(
              "span",
              { className: "capital" },
              state.capital
            ),
            "."
          );
        })
      : "";
  return React.createElement(
    "div",
    { className: "Results" },
    React.createElement("ul", { className: "Results-panel" }, states)
  );
};
var App = function App() {
  return React.createElement(
    StatesContextProvider,
    null,
    React.createElement(
      "div",
      { className: "App" },
      React.createElement(AppHeader, null),
      React.createElement(AutoComplete, null),
      React.createElement(AutoCompleteResult, null)
    )
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
