"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

/* jshint esversion: 9 */

var Time = (function(_React$Component) {
  _inherits(Time, _React$Component);

  function Time() {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(
      this,
      (Time.__proto__ || Object.getPrototypeOf(Time)).call(this)
    );

    _this.state = {
      time: {}
    };
    return _this;
  }

  _createClass(Time, [
    {
      key: "showTime",
      value: function showTime() {
        var _this2 = this;

        var time = new Date();
        var hour =
          time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        var mins =
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

        this.setState({
          time: {
            hour: hour,
            min: mins
          }
        });

        requestAnimationFrame(function() {
          setTimeout(function() {
            return _this2.showTime();
          }, 1000);
        });
      }
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.showTime();
      }
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "timer-body" },
          React.createElement(
            "span",
            { className: "time" },
            this.state.time.hour,
            ":",
            this.state.time.min
          )
        );
      }
    }
  ]);

  return Time;
})(React.Component);

var Greeter = (function(_React$Component2) {
  _inherits(Greeter, _React$Component2);

  function Greeter() {
    _classCallCheck(this, Greeter);

    var _this3 = _possibleConstructorReturn(
      this,
      (Greeter.__proto__ || Object.getPrototypeOf(Greeter)).call(this)
    );

    _this3.state = {
      greeting: {}
    };
    return _this3;
  }

  _createClass(Greeter, [
    {
      key: "handleNameChange",
      value: function handleNameChange() {
        this.refs.username.setAttribute("contenteditable", "true");
      }
    },
    {
      key: "saveName",
      value: function saveName(e) {
        e.persist();

        if (e.type == "keypress") {
          if (e.key == "Enter") {
            if (this.refs.username.innerText !== "") {
              localStorage.setItem(
                "userData",
                JSON.stringify({ username: this.refs.username.innerText.su })
              );

              this.refs.username.blur();
            }
            if (localStorage.userData) {
              var local = JSON.parse(localStorage.userData);
              this.refs.username.innerText = local.username.split(" ")[0];
            }
            this.refs.username.blur();
          }
        } else if (e.type == "blur") {
          if (this.refs.username.innerText !== "") {
            localStorage.setItem(
              "userData",
              JSON.stringify({ username: this.refs.username.innerText })
            );
          }
          if (localStorage.userData) {
            var _local = JSON.parse(localStorage.userData);
            this.refs.username.innerText = _local.username.split(" ")[0];
          }
        }
      }
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "greeter" },
          React.createElement(
            "span",
            { className: "greeting" },
            this.props.greeting.greetType,
            ","
          ),
          React.createElement(
            "span",
            {
              className: "name",
              ref: "username",
              spellCheck: "false",
              onClick: this.handleNameChange.bind(this),
              onBlur: this.saveName.bind(this),
              onKeyPress: this.saveName.bind(this)
            },
            this.props.greeting.name
          ),
          React.createElement("span", { className: "name-dot" }, ".")
        );
      }
    }
  ]);

  return Greeter;
})(React.Component);

var SetFocus = (function(_React$Component3) {
  _inherits(SetFocus, _React$Component3);

  function SetFocus(props) {
    _classCallCheck(this, SetFocus);

    var _this4 = _possibleConstructorReturn(
      this,
      (SetFocus.__proto__ || Object.getPrototypeOf(SetFocus)).call(this, props)
    );

    _this4.state = {
      focus: []
    };
    return _this4;
  }

  _createClass(SetFocus, [
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        var categories = [
          "Congrats!",
          "Way to go!",
          "Nice!",
          "Weldone",
          "Go Pro!",
          "Good Job!"
        ];
        this.setState({ focus: categories });
      }
    },
    {
      key: "hail",
      value: function hail() {
        var _this5 = this;

        var hail = this.state.focus[
          Math.floor(Math.random() * this.state.focus.length)
        ];
        this.refs.congrats.textContent = hail;
        this.refs.congrats.style.animation = "hailIn .5s ease forwards";
        requestAnimationFrame(function() {
          setTimeout(function() {
            _this5.refs.congrats.textContent = "";
            _this5.refs.congrats.style.animation = "hailOut .5s ease forwards";
          }, 2000);
        });
      }
    },
    {
      key: "checkComp",
      value: function checkComp() {
        if (this.refs.closeTodo.checked) {
          var local = localStorage.userTodo;
          var todos = JSON.parse(local);
          this.hail();
          localStorage.setItem(
            "userTodo",
            JSON.stringify({ item: todos.item, done: true })
          );
          this.refs.todoWord.classList.add("checked");
          this.refs.closeSpan.innerHTML = "&plus;";
        } else {
          var _local2 = localStorage.userTodo;
          var _todos = JSON.parse(_local2);
          this.refs.todoWord.classList.remove("checked");
          this.refs.closeSpan.innerHTML = "&times;";
          localStorage.setItem(
            "userTodo",
            JSON.stringify({ item: _todos.item, done: false })
          );
        }
      }
    },
    {
      key: "hideTodoWord",
      value: function hideTodoWord() {
        this.refs.question.classList.remove("hide");
        this.refs.input.classList.remove("hide");
        this.refs.todoBlock.classList.add("hide");
        this.refs.todoWord.textContent = "";
        this.refs.todoWord.classList.remove("checked");
        localStorage.removeItem("userTodo");
        this.refs.closeTodo.checked = false;
      }
    },
    {
      key: "setTodo",
      value: function setTodo(x, bool) {
        var item = {
          item: x,
          done: bool
        };

        localStorage.setItem("userTodo", JSON.stringify(item));
      }
    },
    {
      key: "getTodo",
      value: function getTodo() {
        var x = localStorage.getItem("userTodo");
        return JSON.parse(x);
      }
    },
    {
      key: "showTodo",
      value: function showTodo(len, todo) {
        if (todo.item.length >= len) {
          var text = todo.item.substring(0, len - 3);
          var fullword = text + "...";
          this.refs.todoWord.style.transition = ".4s ease-in";
          this.refs.todoWord.innerText = fullword;
        } else {
          this.refs.todoWord.style.transition = ".4s ease-in";
          this.refs.todoWord.innerText = todo.item + ".";
        }
      }
    },
    {
      key: "checkExistingTodo",
      value: function checkExistingTodo() {
        var local = localStorage.userTodo;

        if (local) {
          var todos = JSON.parse(local);

          this.refs.question.classList.add("hide");
          this.refs.input.classList.add("hide");

          this.refs.todoBlock.classList.remove("hide");
          this.showTodo(67, todos);
          if (todos.done == true) {
            this.refs.todoWord.classList.add("checked");
            this.refs.closeSpan.innerHTML = "&plus;";
            this.refs.closeTodo.checked = true;
          }
        }
      }
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.checkExistingTodo();
      }
    },
    {
      key: "renderFocusText",
      value: function renderFocusText(e) {
        if (e.type == "keypress") {
          if (e.key == "Enter") {
            if (this.refs.input.value == "") return;
            this.refs.input.classList.add("hide");
            this.refs.todoBlock.classList.remove("hide");
            this.refs.question.classList.add("hide");
            this.setTodo(this.refs.input.value, false);
            var todo = this.getTodo();
            if (document.body.offsetWidth < 900) {
              this.showTodo(67, todo);
              this.refs.input.value = "";
            } else {
              this.showTodo(67, todo);
              this.refs.input.value = "";
            }
          }
        }
      }
    },
    {
      key: "updateFocusText",
      value: function updateFocusText(e) {
        if (e.key == "Enter") {
          var local = localStorage.userTodo;
          if (
            this.refs.todoWord.innerText != "" &&
            this.refs.todoWord.innerText != "."
          ) {
            if (local) {
              var done = JSON.parse(local).done;
              this.setTodo(this.refs.todoWord.innerText, done);
              var todo = this.getTodo();
              this.showTodo(67, todo);
            }
          } else {
            this.refs.todoWord.innerText = JSON.parse(local).item;
          }
          this.refs.todoWord.blur();
        }
      }
    },
    {
      key: "toggleEditMode",
      value: function toggleEditMode(e) {
        this.refs.todoWord.setAttribute("contenteditable", "true");
      }
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "question", ref: "question" },
            React.createElement(
              "span",
              null,
              "What is your main focus for today ?"
            )
          ),
          React.createElement(
            "div",
            { className: "todo" },
            React.createElement("input", {
              type: "text",
              name: "input",
              className: "input",
              ref: "input",
              spellCheck: "false",
              autoFocus: true,
              onKeyPress: this.renderFocusText.bind(this)
            }),
            React.createElement(
              "div",
              { className: "todo-block hide", ref: "todoBlock" },
              React.createElement("span", { className: "today" }, "Today"),
              React.createElement(
                "span",
                { className: "todo-text", ref: "todoText" },
                React.createElement(
                  "label",
                  null,
                  React.createElement("input", {
                    type: "checkbox",
                    ref: "closeTodo",
                    id: "close-todo",
                    onClick: this.checkComp.bind(this)
                  })
                ),
                React.createElement("span", {
                  className: "todo-word",
                  ref: "todoWord",
                  spellCheck: "false",
                  onKeyPress: this.updateFocusText.bind(this),
                  onClick: this.toggleEditMode.bind(this)
                }),
                React.createElement(
                  "span",
                  { className: "close" },
                  React.createElement(
                    "span",
                    {
                      className: "close-span",
                      ref: "closeSpan",
                      onClick: this.hideTodoWord.bind(this)
                    },
                    "\xD7"
                  )
                )
              )
            ),
            React.createElement(
              "span",
              { className: "congrats hide", ref: "congrats" },
              "Weldone!"
            )
          )
        );
      }
    }
  ]);

  return SetFocus;
})(React.Component);

var Focus = (function(_React$Component4) {
  _inherits(Focus, _React$Component4);

  function Focus() {
    _classCallCheck(this, Focus);

    var _this6 = _possibleConstructorReturn(
      this,
      (Focus.__proto__ || Object.getPrototypeOf(Focus)).call(this)
    );

    _this6.state = {
      greeting: {}
    };
    return _this6;
  }

  _createClass(Focus, [
    {
      key: "getGreeting",
      value: function getGreeting() {
        var time = new Date();
        var hours = time.getHours();
        if (localStorage.userData) {
          var name = JSON.parse(localStorage.userData);
          var splitName = name.username.split(" ")[0];

          if (hours < 12) {
            this.setState({
              greeting: {
                greetType: "Good Morning",
                name: splitName
              }
            });
          } else if (hours >= 12 && hours < 18) {
            this.setState({
              greeting: {
                greetType: "Good Afternoon",
                name: splitName
              }
            });
          } else if (hours >= 18) {
            this.setState({
              greeting: {
                greetType: "Good Evening",
                name: splitName
              }
            });
          }
        }
      }
    },
    {
      key: "checkName",
      value: function checkName() {
        if (localStorage.userData) {
          var name = JSON.parse(localStorage.userData);
          var splitName = name.username.split(" ")[0];
          var greetings = this.state.greeting.greetType;

          this.setState({
            greeting: {
              greetType: greetings,
              name: splitName
            }
          });
        }
      }
    },
    {
      key: "changeBackground",
      value: function changeBackground() {
        var morning = [
          "1img",
          "2img",
          "3img",
          "7img",
          "13img",
          "14img",
          "15img",
          "16img",
          "17img",
          "24img",
          "26img",
          "27img",
          "28img",
          "30img",
          "31img"
        ];
        var night = [
          "4img",
          "5img",
          "6img",
          "8img",
          "9img",
          "10img",
          "11img",
          "12img",
          "18img",
          "19img",
          "20img",
          "21img",
          "22img",
          "23img",
          "25img",
          "32img",
          "33img"
        ];
        var time = new Date();
        var hour = time.getHours();
        if (hour < 18) {
          var random = Math.floor(Math.random() * morning.length);
          this.refs.container.style.transition = ".4s ease-in";
          this.refs.container.style.backgroundImage =
            "url('http://127.0.0.1:8080/asset/dark-image/" +
            morning[random] +
            ".jpg')";
          this.refs.container.style.backgroundPosition = "center";
          this.refs.container.style.backgroundSize = "cover";
        } else if (hour > 18) {
          var _random = Math.floor(Math.random() * night.length);
          this.refs.container.style.transition = ".4s ease-in";
          this.refs.container.style.backgroundImage =
            "url('http://127.0.0.1:8080/asset/dark-image/" +
            night[_random] +
            ".jpg')";
          this.refs.container.style.backgroundPosition = "center";
          this.refs.container.style.backgroundSize = "cover";
        }
      }
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this7 = this;

        this.changeBackground();
        var local = localStorage.userData;
        if (local && JSON.parse(local).username != "") {
          this.refs.startupContent.style.visibility = "hidden";
          this.refs.contentBody.classList.remove("hide");

          this.checkName();
        }
        requestAnimationFrame(function() {
          setTimeout(function() {
            return _this7.getGreeting();
          }, 0);
        });
      }
    },
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this8 = this;

        requestAnimationFrame(function() {
          setTimeout(function() {
            return _this8.getGreeting();
          }, 0);
        });
        this.checkName();
      }
    },
    {
      key: "saveNewUser",
      value: function saveNewUser(e) {
        var _this9 = this;

        if (e.key == "Enter") {
          if (this.refs.welcome.value != "") {
            localStorage.setItem(
              "userData",
              JSON.stringify({ username: this.refs.welcome.value })
            );
            this.refs.contentBody.style.animation =
              "floatIn .3s ease-in  forwards 100ms";
            this.refs.startupContent.style.animation =
              "hailOut .2s ease-in  forwards";
            requestAnimationFrame(function() {
              setTimeout(function() {
                return _this9.getGreeting();
              }, 0);
            });
            this.checkName();
          } else {
            this.refs.info.textContent = "Name cannot be empty!.";
            this.refs.info.style.animation = "hailIn .5s ease-in forwards";
          }
        }
      }
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "container", ref: "container" },
          React.createElement(
            "div",
            { className: "startup-content", ref: "startupContent" },
            React.createElement(
              "span",
              { className: "welcome-greeting" },
              "Hello Welcome"
            ),
            React.createElement(
              "span",
              { className: "welcome-question" },
              "What is your name ?"
            ),
            React.createElement("input", {
              type: "text",
              ref: "welcome",
              className: "welcome-name",
              autoFocus: true,
              spellCheck: "false",
              onKeyPress: this.saveNewUser.bind(this)
            }),
            React.createElement(
              "span",
              { ref: "info", className: "info hide" },
              "Please click enter to save!."
            )
          ),
          React.createElement(
            "div",
            { className: "content-body hide", ref: "contentBody" },
            React.createElement(Time, null),
            React.createElement(Greeter, { greeting: this.state.greeting }),
            React.createElement(SetFocus, null)
          )
        );
      }
    }
  ]);

  return Focus;
})(React.Component);

ReactDOM.render(
  React.createElement(Focus, null),
  document.querySelector(".root")
);
