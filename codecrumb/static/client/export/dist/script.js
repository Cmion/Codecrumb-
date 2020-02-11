"use strict";

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      const $THIS_IS_CC_LOOP_PROTECT_VARIABLE0 = Date.now();
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE0 > 1000) {
          throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
        }
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

var _extends =
  Object.assign ||
  function(target) {
    const $THIS_IS_CC_LOOP_PROTECT_VARIABLE2 = Date.now();
    for (var i = 1; i < arguments.length; i++) {
      if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE2 > 1000) {
        throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
      }
      var source = arguments[i];
      const $THIS_IS_CC_LOOP_PROTECT_VARIABLE1 = Date.now();
      for (var key in source) {
        if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE1 > 1000) {
          throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
        }
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _templateObject = _taggedTemplateLiteral(
    [
      "\n\tposition: relative; \n\tdisplay: flex; \n\talign-items: center;\n\tcursor: pointer; \n\tbox-sizing: border-box;\n"
    ],
    [
      "\n\tposition: relative; \n\tdisplay: flex; \n\talign-items: center;\n\tcursor: pointer; \n\tbox-sizing: border-box;\n"
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n\theight: 0;\n\twidth: 0;\n"],
    ["\n\theight: 0;\n\twidth: 0;\n"]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n\t0% {\n\t\tborder: ",
      "px solid ",
      ";\n\t}\n\t100% {\t\n\t\tborder: ",
      "px solid ",
      ";\n\t}\n"
    ],
    [
      "\n\t0% {\n\t\tborder: ",
      "px solid ",
      ";\n\t}\n\t100% {\t\n\t\tborder: ",
      "px solid ",
      ";\n\t}\n"
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n\twidth: ",
      "px;\n\theight: ",
      "px;\n\tborder-radius: ",
      "px;\n\tbackground: ",
      ";\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n\tbox-sizing: border-box;\n\ttransition: ",
      'ms cubic-bezier(0.75, 0, 0.5, 1);\n\t::before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\theight: ',
      "px;\n\t\twidth: ",
      "px;\n\t\tbackground: ",
      ";\n\t\tborder-radius: 50%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbox-sizing: border-box;\n\t\ttransform: ",
      ";\n\ttransition: ",
      'ms cubic-bezier(0.75, 0, 0.5, 1);\n\t}\n\t::after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\theight: ',
      "px;\n\t\twidth: ",
      "px;\n\t\tborder-radius: 50%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tleft: ",
      "px;\n\t\tanimation: ",
      " ",
      "ms cubic-bezier(0.75, 0, 0.5, 1) forwards;\n\t\tbox-sizing: border-box;\n\t\ttransform: ",
      ";\n\t\ttransition: ",
      "ms cubic-bezier(0.75, 0, 0.5, 1);\n\t}\n\n"
    ],
    [
      "\n\twidth: ",
      "px;\n\theight: ",
      "px;\n\tborder-radius: ",
      "px;\n\tbackground: ",
      ";\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n\tbox-sizing: border-box;\n\ttransition: ",
      'ms cubic-bezier(0.75, 0, 0.5, 1);\n\t::before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\theight: ',
      "px;\n\t\twidth: ",
      "px;\n\t\tbackground: ",
      ";\n\t\tborder-radius: 50%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbox-sizing: border-box;\n\t\ttransform: ",
      ";\n\ttransition: ",
      'ms cubic-bezier(0.75, 0, 0.5, 1);\n\t}\n\t::after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\theight: ',
      "px;\n\t\twidth: ",
      "px;\n\t\tborder-radius: 50%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tleft: ",
      "px;\n\t\tanimation: ",
      " ",
      "ms cubic-bezier(0.75, 0, 0.5, 1) forwards;\n\t\tbox-sizing: border-box;\n\t\ttransform: ",
      ";\n\t\ttransition: ",
      "ms cubic-bezier(0.75, 0, 0.5, 1);\n\t}\n\n"
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n\theight: 20px;\n\twidth: 45px;\n\tborder: none;\n\tbackground: #4b4c56;\n\tcolor: white;\n\tborder-radius: 1.5px;\n\toutline-color: #00ff89;\n\tpadding: 3px;\n\t:focus{\n\tborder: 1px solid #00ff89;\n}\n"
    ],
    [
      "\n\theight: 20px;\n\twidth: 45px;\n\tborder: none;\n\tbackground: #4b4c56;\n\tcolor: white;\n\tborder-radius: 1.5px;\n\toutline-color: #00ff89;\n\tpadding: 3px;\n\t:focus{\n\tborder: 1px solid #00ff89;\n}\n"
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n\tpadding: ",
      ";\n\n\n\t\n\tbackground: none;\n\tborder-radius: 3px;\n\tcursor: pointer;\n\tfont-size: 15px;\n\tfont-family: ",
      ";\n\t\tborder: 1.2px solid ",
      ";\n\t\tcolor: ",
      ";\n\t\ttransition: border ",
      ";\n\t\tbox-shadow: 0px 7px 10px rgba(0, 0, 0, 0.3);\n\t:hover{\n\t\tborder: 1.2px solid ",
      ";\n\t\tcolor: ",
      ";\n\t\ttransition:  color ",
      ", border ",
      ";\n\t}\n\t:focus{\n\t\toutline-color: ",
      "\n\n\t}\n"
    ],
    [
      "\n\tpadding: ",
      ";\n\n\n\t\n\tbackground: none;\n\tborder-radius: 3px;\n\tcursor: pointer;\n\tfont-size: 15px;\n\tfont-family: ",
      ";\n\t\tborder: 1.2px solid ",
      ";\n\t\tcolor: ",
      ";\n\t\ttransition: border ",
      ";\n\t\tbox-shadow: 0px 7px 10px rgba(0, 0, 0, 0.3);\n\t:hover{\n\t\tborder: 1.2px solid ",
      ";\n\t\tcolor: ",
      ";\n\t\ttransition:  color ",
      ", border ",
      ";\n\t}\n\t:focus{\n\t\toutline-color: ",
      "\n\n\t}\n"
    ]
  );

function _objectWithoutProperties(obj, keys) {
  var target = {};
  const $THIS_IS_CC_LOOP_PROTECT_VARIABLE3 = Date.now();
  for (var i in obj) {
    if (Date.now() - $THIS_IS_CC_LOOP_PROTECT_VARIABLE3 > 1000) {
      throw new RangeError(`Potential infinite loop prevented,
 if you want the loop to iterate a little longer, 
 use the custom panel in the settings panel to change the duration
note: these page might not be responsive if the duration is or more than 2000ms
`);
    }
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var _Redux = Redux,
  createStore = _Redux.createStore,
  compose = _Redux.compose,
  combineReducers = _Redux.combineReducers,
  applyMiddleware = _Redux.applyMiddleware;
var _ReactRedux = ReactRedux,
  Provider = _ReactRedux.Provider,
  connect = _ReactRedux.connect;
var _styled = styled,
  keyframes = _styled.keyframes;

var convert = function convert(unit, num) {
  return unit === "px"
    ? num
    : unit === "em" || unit === "rem"
    ? num * 16
    : unit === "pt"
    ? num * 1.33
    : unit === "vmin"
    ? num * 5.478333333333333
    : unit === "vmax"
    ? num * 7.886666666666667
    : num;
};
var fromPercent = function fromPercent(num, percent) {
  return (percent / 100) * num;
};
var getPercent = function getPercent(part, whole) {
  return (part / whole) * 100;
};

// constants

var getPasswordLength = "GET_PASSWORD_LENGTH";
var sensitivity = "SET_SENSITIVITY";
var generatedPassword = "GENERATED_PASSWORD";
// actions

var _getPasswordLengthAction = function _getPasswordLengthAction(payload) {
  return {
    type: getPasswordLength,
    payload: payload
  };
};

var _sensitivityAction = function _sensitivityAction(payload) {
  return {
    type: sensitivity,
    payload: payload
  };
};

var _generatedPasswordAction = function _generatedPasswordAction(payload) {
  return {
    type: generatedPassword,
    payload: payload
  };
};

// reducers
var passInitState = {
  value: "20"
};
var passwordLengthReducer = function passwordLengthReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : passInitState;
  var action = arguments[1];

  switch (action.type) {
    case getPasswordLength:
      return { value: action.payload };
    default:
      return state;
  }
};

var sensitivityInitState = [
  {
    name: "LOWERCASE",
    data: true
  },
  {
    name: "UPPERCASE",
    data: true
  },
  {
    name: "NUMBER",
    data: true
  },
  {
    name: "SYMBOL",
    data: true
  }
];
var sensitivityReducer = function sensitivityReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : sensitivityInitState;
  var action = arguments[1];

  switch (action.type) {
    case sensitivity:
      return state.map(function(value) {
        return value.name === action.payload.name
          ? _extends({}, value, { data: !value.data })
          : value;
      });
    default:
      return state;
  }
};

var generatedPasswordInitState = {
  value: ""
};
var generatedPasswordReducer = function generatedPasswordReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : generatedPasswordInitState;
  var action = arguments[1];

  switch (action.type) {
    case generatedPassword:
      return { value: action.payload };

    default:
      return state;
  }
};

// middlewares

var logMiddleware = function logMiddleware() {
  return function(next) {
    return function(action) {
      console.log("ACTION " + action.type, action.payload);
      next(action);
    };
  };
};
var middlewares = compose(applyMiddleware(logMiddleware));

var rootReducer = combineReducers({
  generatedPassword: generatedPasswordReducer,
  sensitivity: sensitivityReducer,
  passwordLength: passwordLengthReducer
});

var store = createStore(rootReducer, middlewares);

// PASSWORD - CONTAINER
var copyToClipboard = function copyToClipboard(value) {
  var textarea = document.createElement("textarea");
  if (!value) return;
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
};
var PasswordBox = function PasswordBox(props) {
  return React.createElement(
    "div",
    { className: "password--box" },
    React.createElement("span", { className: "password--value" }, props.value),
    React.createElement(
      "span",
      {
        className: "clipboard",
        onClick: function onClick() {
          return copyToClipboard(props.value);
        }
      },
      React.createElement("span", { className: "fa fa-clipboard icon" })
    )
  );
};

var mapPasswordStateToProps = function mapPasswordStateToProps(state) {
  var value = state.generatedPassword.value;

  return { value: value };
};

var Password = connect(mapPasswordStateToProps)(PasswordBox);

var CheckBoxLabel = styled.default.label(_templateObject);
var HiddenCheckbox = styled.default.input.attrs({ type: "checkbox" })(
  _templateObject2
);
var tinyup = function tinyup(prop) {
  return keyframes(
    _templateObject3,
    fromPercent(convert(prop.sizeUnit, prop.size), 48) / 6,
    prop.uncheckedFrontColor,
    fromPercent(convert(prop.sizeUnit, prop.size), 48) / 2,
    prop.frontColor
  );
};
var tinydown = function tinydown(prop) {
  return keyframes(
    _templateObject3,
    fromPercent(convert(prop.sizeUnit, prop.size), 48) / 2,
    prop.frontColor,
    fromPercent(convert(prop.sizeUnit, prop.size), 48) / 6,
    prop.uncheckedFrontColor
  );
};
var CustomTiny = styled.default.span(
  _templateObject4,
  function(prop) {
    return convert(prop.sizeUnit, prop.size);
  },
  function(prop) {
    return parseInt(fromPercent(convert(prop.sizeUnit, prop.size), 14), 10);
  },
  function(prop) {
    return fromPercent(convert(prop.sizeUnit, prop.size), 14);
  },
  function(prop) {
    return prop.backColor;
  },
  function(prop) {
    return prop.animate;
  },
  function(prop) {
    return fromPercent(convert(prop.sizeUnit, prop.size), 60);
  },
  function(prop) {
    return fromPercent(convert(prop.sizeUnit, prop.size), 60);
  },
  function(prop) {
    return prop.sliderColor;
  },
  function(prop) {
    return prop.checked
      ? "translateX(" +
          (convert(prop.sizeUnit, prop.size) -
            fromPercent(convert(prop.sizeUnit, prop.size), 60)) +
          "px)"
      : "translateX(0)";
  },
  function(prop) {
    return prop.animate;
  },
  function(prop) {
    return fromPercent(convert(prop.sizeUnit, prop.size), 48);
  },
  function(prop) {
    return fromPercent(convert(prop.sizeUnit, prop.size), 48);
  },
  function(prop) {
    return (
      (fromPercent(convert(prop.sizeUnit, prop.size), 60) -
        fromPercent(convert(prop.sizeUnit, prop.size), 48)) /
      2
    );
  },
  function(prop) {
    return prop.checked ? tinyup : tinydown;
  },
  function(prop) {
    return prop.animate;
  },
  function(prop) {
    return prop.checked
      ? "translateX(" +
          (convert(prop.sizeUnit, prop.size) -
            fromPercent(convert(prop.sizeUnit, prop.size), 60)) +
          "px)"
      : "translateX(0)";
  },
  function(prop) {
    return prop.animate;
  }
);
var TinyCheckbox = function TinyCheckbox(_ref) {
  var checked = _ref.checked,
    classname = _ref.classname,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, [
      "checked",
      "classname",
      "onClick",
      "onChange"
    ]);

  return React.createElement(
    CheckBoxLabel,
    { className: classname },
    React.createElement(HiddenCheckbox, _extends({ checked: checked }, props)),
    React.createElement(
      CustomTiny,
      _extends(
        {
          checked: checked
        },
        props,
        {
          onClick: onClick,
          onChange: onChange
        }
      )
    )
  );
};
TinyCheckbox.defaultProps = {
  checked: false,
  size: 50,
  frontColor: "#00ff89",
  backColor: "#4b4c56",
  sliderColor: "rgb(38, 42, 47)",
  uncheckedBackColor: "rgba(119,127,153,0.67)",
  uncheckedFrontColor: "rgba(255,255,255,0.2)",
  sizeUnit: "px",
  animate: 300,
  classname: "label"
};

var SensitivityContainer = function SensitivityContainer(props) {
  return React.createElement(
    "ul",
    { className: "sensitivity", onClick: props.onClick },
    props.children
  );
};

var SensitivityOptions = function SensitivityOptions(props) {
  return React.createElement(
    "li",
    { className: "sensitivity--options" },
    React.createElement("label", null, props.children)
  );
};

var Input = styled.default.input.attrs({ type: "number" })(_templateObject5);
var SensitivityBox = function SensitivityBox(props) {
  console.log(props);
  return React.createElement(
    "div",
    null,
    React.createElement(
      SensitivityContainer,
      null,
      React.createElement(SensitivityOptions, null, "Password Length"),
      React.createElement(Input, {
        value: props.length,
        onChange: function onChange(e) {
          return props.getPasswordLengthAction(e.target.value);
        }
      })
    ),
    React.createElement(
      SensitivityContainer,
      {
        onClick: function onClick() {
          return props.sensitivityAction({ name: "LOWERCASE" });
        }
      },
      React.createElement(
        SensitivityOptions,
        null,
        "Include Lowercase Letters"
      ),
      React.createElement(TinyCheckbox, {
        size: 35,
        checked: props.lowercase.data,
        onClick: function onClick() {
          return props.sensitivityAction({ name: "LOWERCASE" });
        }
      })
    ),
    React.createElement(
      SensitivityContainer,
      {
        onClick: function onClick() {
          return props.sensitivityAction({ name: "UPPERCASE" });
        }
      },
      React.createElement(
        SensitivityOptions,
        null,
        "Include Uppercase Letters"
      ),
      React.createElement(TinyCheckbox, {
        size: 35,
        checked: props.uppercase.data,
        onClick: function onClick() {
          return props.sensitivityAction({ name: "UPPERCASE" });
        }
      })
    ),
    React.createElement(
      SensitivityContainer,
      {
        onClick: function onClick() {
          return props.sensitivityAction({ name: "NUMBER" });
        }
      },
      React.createElement(SensitivityOptions, null, "Include Numbers"),
      React.createElement(TinyCheckbox, {
        size: 35,
        checked: props.number.data,
        onClick: function onClick() {
          return props.sensitivityAction({ name: "NUMBER" });
        }
      })
    ),
    React.createElement(
      SensitivityContainer,
      {
        onClick: function onClick() {
          return props.sensitivityAction({ name: "SYMBOL" });
        }
      },
      React.createElement(SensitivityOptions, null, "Include Symbols"),
      React.createElement(TinyCheckbox, {
        size: 35,
        checked: props.symbol.data,
        onClick: function onClick() {
          return props.sensitivityAction({ name: "SYMBOL" });
        },
        uncheckedBackColor: "rgba(0, 0, 0, 0.3)"
      })
    )
  );
};

var mapSensitivityStateToProps = function mapSensitivityStateToProps(state) {
  var _state$sensitivity = _slicedToArray(state.sensitivity, 4),
    lowercase = _state$sensitivity[0],
    uppercase = _state$sensitivity[1],
    number = _state$sensitivity[2],
    symbol = _state$sensitivity[3];

  var length = state.passwordLength.value;

  return {
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    number: number,
    symbol: symbol
  };
};

var mapSensitivityDispatchToProps = function mapSensitivityDispatchToProps(
  dispatch
) {
  return {
    sensitivityAction: function sensitivityAction(payload) {
      return dispatch(_sensitivityAction(payload));
    },
    getPasswordLengthAction: function getPasswordLengthAction(payload) {
      return dispatch(_getPasswordLengthAction(payload));
    }
  };
};
var Sensitivity = connect(
  mapSensitivityStateToProps,
  mapSensitivityDispatchToProps
)(SensitivityBox);

var PrimaryButton = styled.default.button(
  _templateObject6,
  function(prop) {
    return (
      fromPercent(convert(prop.sizeUnit, prop.size), 41.66666666666667) +
      "px " +
      convert(prop.sizeUnit, prop.size) +
      "px"
    );
  },
  function(prop) {
    return prop.fontFamily;
  },
  function(prop) {
    return prop.hoverBorder;
  },
  function(prop) {
    return prop.hoverBorder;
  },
  function(prop) {
    return prop.transition;
  },
  function(prop) {
    return prop.background;
  },
  function(prop) {
    return prop.color;
  },
  function(prop) {
    return prop.transition;
  },
  function(prop) {
    return prop.transition;
  },
  function(prop) {
    return prop.background;
  }
);

PrimaryButton.defaultProps = {
  size: 20,
  background: "#5c8df6",
  color: "#FFFFFF",
  hoverBorder: "#454B57",
  hoverBackground: "#93A0BA",
  transition: "500ms ease-out",
  fontFamily: "sans-serif"
};

PrimaryButton.PropTypes = {
  size: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hoverBackground: PropTypes.string,
  hoverColor: PropTypes.string,
  transition: PropTypes.string,
  fontFamily: PropTypes.string
};

var generatePassword = function generatePassword(
  length,
  lower,
  upper,
  number,
  symbol
) {
  if (typeof length !== "number" || isNaN(length)) return "";

  var getLower = function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  var getUpper = function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  var getNumber = function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  var symbols = "#$^&()_+=!<>/[]";
  var getSymbol = function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  var sensitivities = [
    { lower: lower },
    { upper: upper },
    { number: number },
    { symbol: symbol }
  ].filter(function(a) {
    return a[Object.keys(a)[0]];
  });
  var passwordKeys = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
  };
  var usedKeys = sensitivities.map(function(a) {
    return Object.keys(a);
  });
  var generatedPassword = "";
  Array(Number(length))
    .fill(length)
    .map(function(value) {
      var randomise = passwordKeys[
        usedKeys[Math.floor(Math.random() * usedKeys.length)]
      ]();
      generatedPassword += randomise;

      return 0;
    });

  var firstValue = generatedPassword[0];
  if (RegExp("\\" + firstValue, "g").test(symbols)) {
    generatedPassword =
      passwordKeys[usedKeys[Math.floor(Math.random() * 2)]]() +
      generatedPassword.slice(1, Number(length));
  }
  return generatedPassword;
};

var GenerateButton = function GenerateButton(props) {
  var lower = props.lower,
    upper = props.upper,
    symbol = props.symbol,
    number = props.number,
    length = props.length;

  var setGeneratedPassword = function setGeneratedPassword(
    length,
    lower,
    upper,
    number,
    symbol
  ) {
    return props.generatedPasswordAction(
      generatePassword(Number(length), lower, upper, number, symbol)
    );
  };
  return React.createElement(
    "div",
    { className: "btn" },
    React.createElement(
      PrimaryButton,
      {
        size: 25,
        background: "#00ff89",
        color: "#00ff89",
        onClick: function onClick() {
          return setGeneratedPassword(length, lower, upper, number, symbol);
        }
      },
      "Generate Password"
    )
  );
};
var MapGenerateStateToProps = function MapGenerateStateToProps(state) {
  var _state$sensitivity2 = _slicedToArray(state.sensitivity, 4),
    lower = _state$sensitivity2[0],
    upper = _state$sensitivity2[1],
    number = _state$sensitivity2[2],
    symbol = _state$sensitivity2[3];

  var length = state.passwordLength.value;

  return {
    lower: lower.data,
    upper: upper.data,
    symbol: symbol.data,
    number: number.data,
    length: length
  };
};

var MapGenerateDispatchToProps = function MapGenerateDispatchToProps(dispatch) {
  return {
    generatedPasswordAction: function generatedPasswordAction(payload) {
      return dispatch(_generatedPasswordAction(payload));
    }
  };
};
var GeneratePassword = connect(
  MapGenerateStateToProps,
  MapGenerateDispatchToProps
)(GenerateButton);

var PasswordGenerator = function PasswordGenerator(props) {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h2", null, "Password Generator"),
    React.createElement(Password, null),
    React.createElement(Sensitivity, null),
    React.createElement(GeneratePassword, null)
  );
};
function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(PasswordGenerator, null)
  );
}

ReactDOM.render(
  React.createElement(
    Provider,
    { store: store },
    React.createElement(App, null)
  ),
  document.querySelector("#root")
);
